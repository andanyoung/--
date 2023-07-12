Object(a.run)(
  function (t, a, s, e) {
    var o, i, n;
    q()(this, "") ||
      c ||
      (e &&
        e.o[0].o.props &&
        e.o[0].o.props.twinId &&
        (t += "." + e.o[0].o.props.twinId),
      ((a = a || {})._nid = this.nid),
      (a._uid = this.uid),
      (a._gid = this.gid),
      (a._eid = this.eid),
      (i = t.split(".")),
      (a._sid = i[0]),
      1 < i.length && (a._modid = i[1]),
      (a._locOffset = -60 * new Date().getTimezoneOffset()),
      this.instance && (a._instance = this.instance),
      this.client && (a._client = this.client),
      this.lang && (a._lang = this.lang),
      (n =
        (this.secure ? "https:" : location.protocol) +
        "//" +
        this.domain +
        "/ih5/player/function/run?nid=" +
        this.nid),
      this.version && (n += "&version=" + this.version),
      ((o = new XMLHttpRequest()).withCredentials = !0),
      o.addEventListener("load", function () {
        if (402 === o.status)
          return (
            (c = 1),
            (t = a._lang),
            void alert("en" === t ? "" : "流量用完，请续费")
          );
        var t;
        if (s) {
          var e,
            i =
              200 === o.status
                ? ((n = o.responseText),
                  (i = R.a.codec.base64.toBits(n)),
                  (t = R.a.bitArray.bitSlice(i, 0, 64)),
                  (n = R.a.bitArray.bitSlice(i, 64, 160)),
                  (i = R.a.bitArray.bitSlice(i, 160)),
                  (t = R.a.misc.pbkdf2("gSrg5v9h", t, 1e3)),
                  (t = new R.a.cipher.aes(t)),
                  (n = R.a.mode.gcm.decrypt(t, i, n, 0, 128)),
                  R.a.codec.utf8String.fromBits(n))
                : o.responseText,
            n = o.getResponseHeader("Content-Type");
          if (n && 0 <= n.indexOf("application/json")) {
            e = {};
            try {
              e = JSON.parse(i);
            } catch (t) {}
          } else e = i;
          s(o.status, e);
        }
      }),
      o.addEventListener("error", function () {
        s(o.status, o.responseText);
      }),
      o.open("POST", n),
      o.send(
        ((e = a),
        (t = R.a.codec.utf8String.toBits(JSON.stringify(e))),
        (i = R.a.random.randomWords(3, 0)),
        (n = R.a.random.randomWords(2, 0)),
        (e = R.a.misc.pbkdf2("gSrg5v9h", n, 1e3)),
        (e = new R.a.cipher.aes(e)),
        (t = R.a.mode.gcm.encrypt(e, t, i, 0, 128)),
        (n = (n = n.concat(i)).concat(t)),
        R.a.codec.base64.fromBits(n))
      ));
  },
  k,
  ["wx"],
  l,
  n,
  o
);



(o = new XMLHttpRequest()).withCredentials = !0

o.open("POST", n),
o.send(
  ((e = a),
  (t = R.a.codec.utf8String.toBits(JSON.stringify(e))),
  (i = R.a.random.randomWords(3, 0)),
  (n = R.a.random.randomWords(2, 0)),
  (e = R.a.misc.pbkdf2("gSrg5v9h", n, 1e3)),
  (e = new R.a.cipher.aes(e)),
  (t = R.a.mode.gcm.encrypt(e, t, i, 0, 128)),
  (n = (n = n.concat(i)).concat(t)),
  R.a.codec.base64.fromBits(n))
));

工坊编号
: 
61
投票人员
: 
"qa9qu2BqLc"
日期
: 
"2023-07-12"
票数
: 
1
_eid
: 
10091505
_gid
: 
37942
_lang
: 
"zh"
_locOffset
: 
28800
_nid
: 
11293744
_sid
: 
"cjpg9yfa3j50000rcwc0"
_uid
: 
10211149
