(function () {
  var el = document.getElementById('visit-count');
  if (!el) return;
  var num = el.querySelector('span');
  if (!num) return;
  var url = 'https://countapi.mileshilliard.com/api/v1/hit/onejudge69-github-io-1969-gto-judge-pattern-research';
  fetch(url, { cache: 'no-store' })
    .then(function (res) { return res.ok ? res.json() : Promise.reject(); })
    .then(function (data) {
      var n = Number(data && data.value);
      if (!isFinite(n) || n < 1) return;
      num.textContent = n.toLocaleString('en-US');
      el.removeAttribute('hidden');
    })
    .catch(function () { /* Keep the line hidden if the count cannot be read. */ });
})();
