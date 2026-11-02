/*
 * Brain Boost privacy policy: the level path (about 4 KB, no storage, no network).
 *
 * - Mirrors the living-layer pause button onto <html class="motion-off">, so one
 *   button stops everything: the butterfly, the tile turn, the twinkle and smooth scroll.
 * - Turns the masthead Boost Tile (--p from 0 to 1 over the first 60vh of scroll).
 * - Lets the gold specks twinkle only while their region is on screen (.is-live).
 * - Marks the current and passed sections on the contents rail (desktop) and on
 *   the phone path, and completes the path in gold at the contact panel.
 * - Shows "Back to contents" once the contents have scrolled away (CSS keeps it
 *   to screens under 1100px).
 *
 * Load it after assets/living-layer.js, both with `defer`, so the kit's pause
 * button already exists when this runs.
 */
(function () {
  'use strict';

  var html = document.documentElement;
  html.classList.add('js');

  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var toggle = document.querySelector('.ll-toggle');
  var turn = document.querySelector('.mast .tile-turn');
  var mast = document.querySelector('.mast');
  var contact = document.getElementById('contact');
  var sections = [].slice.call(document.querySelectorAll('.levels > section'));
  var links = [].slice.call(document.querySelectorAll('.toc a'));          // 12: §1 to §11, then #contact
  var nodes = links.map(function (a) { return a.querySelector('.node'); });
  var ol = document.querySelector('.toc ol');
  var levels = document.querySelector('.levels');
  var toc = document.querySelector('.toc');
  var back = document.querySelector('.to-contents');

  var mastIn = true, ticking = false;
  var lastP = -1, lastCur = null, lastDone = null, lastRail = '', lastPath = '';

  // Twinkle needs a pause button (WCAG 2.2.2): no kit, no twinkle.
  html.classList.toggle('can-pause', !!toggle);

  function motionOn() { return !html.classList.contains('motion-off'); }

  function setP(p) {
    var v = Math.round(p * 1000) / 1000;
    if (!turn || v === lastP) return;
    lastP = v;
    turn.style.setProperty('--p', String(v));
  }

  function syncMotion() {
    var on = toggle ? toggle.getAttribute('aria-pressed') === 'true' : !reduce.matches;
    html.classList.toggle('motion-off', !on);
    if (!on) setP(0);
    frame();
  }

  // 1. One pause button for everything. The kit starts paused under reduced motion.
  if (toggle && 'MutationObserver' in window) {
    new MutationObserver(syncMotion).observe(toggle, { attributes: true, attributeFilter: ['aria-pressed'] });
  } else if (reduce.addEventListener) {
    reduce.addEventListener('change', syncMotion);
  }

  // 2. Twinkle and turn only while their region is on screen; the back button
  //    appears once the contents panel has scrolled above the viewport.
  if ('IntersectionObserver' in window) {
    var live = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle('is-live', e.isIntersecting);
        if (e.target === mast) { mastIn = e.isIntersecting; if (mastIn) onScroll(); }
      });
    });
    if (mast) live.observe(mast);
    if (contact) live.observe(contact);
    if (toc && back) {
      new IntersectionObserver(function (entries) {
        var e = entries[entries.length - 1];
        back.classList.toggle('is-shown', !e.isIntersecting && e.boundingClientRect.top < 0);
      }).observe(toc);
    }
  }

  // 3. Where the reader is: the current section is the last one whose top has
  //    passed 35% of the viewport; the path is complete once the contact panel
  //    reaches the middle. All geometry is read first, then the DOM is written.
  function states() {
    var vh = window.innerHeight;
    var cTop = contact ? contact.getBoundingClientRect().top : Infinity;
    var tops = sections.map(function (s) { return s.getBoundingClientRect().top; });
    var done = cTop <= vh * 0.5;
    var cur = -1;
    for (var i = 0; i < tops.length; i++) if (tops[i] <= vh * 0.35) cur = i;
    if (done) cur = sections.length;

    // Rail fill: from the first node's centre to the current (or end) node's centre.
    var k = Math.min(cur, nodes.length - 1), rail = '0px';
    if (ol && k > 0 && nodes[k] && nodes[0]) {
      rail = Math.max(0, Math.round(nodes[k].getBoundingClientRect().top - nodes[0].getBoundingClientRect().top)) + 'px';
    }
    // Phone path fill: each node sits 22px below its opener's top; the end node
    // sits 32px below the contact panel's top.
    var path = '0px';
    if (levels && tops.length) {
      var f = 0;
      if (done) f = cTop + 32 - (tops[0] + 22);
      else if (cur >= 0) f = tops[cur] - tops[0];
      path = Math.max(0, Math.round(f)) + 'px';
    }

    if (cur !== lastCur || done !== lastDone) {
      lastCur = cur; lastDone = done;
      sections.forEach(function (s, j) {
        s.classList.toggle('is-current', j === cur);
        s.classList.toggle('is-passed', j < cur);
      });
      links.forEach(function (a, j) {
        if (j === cur && j < sections.length) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
        a.parentElement.classList.toggle('is-passed', j < cur && j < sections.length);
        a.parentElement.classList.toggle('is-done', j === sections.length && done);
      });
      if (contact) contact.classList.toggle('is-done', done);
    }
    if (ol && rail !== lastRail) { lastRail = rail; ol.style.setProperty('--fill', rail); }
    if (levels && path !== lastPath) { lastPath = path; levels.style.setProperty('--fill', path); }
  }

  function frame() {
    if (motionOn() && mastIn) setP(Math.min(1, Math.max(0, (window.scrollY || 0) / (window.innerHeight * 0.6))));
    states();
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; frame(); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  syncMotion();
})();
