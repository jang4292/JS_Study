function getTimerString(sec) {
    var h = Math.floor(sec / (60 * 60));
    var remainder = sec % (60 * 60);
    var m = Math.floor(remainder / 60);
    var s = sec % 60;

    h = h.toString().length === 1 ? "0" + h : h;
    m = m.toString().length === 1 ? "0" + m : m;
    s = s.toString().length === 1 ? "0" + s : s;
    return h + " : " + m + " : " + s;
}