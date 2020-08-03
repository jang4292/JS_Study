var version = (new Date()).getTime();
var dom = document.getElementsByTagName("head")[0];
var scriptNames = ['a.js', 'b.js', 'c.js'];

addDynamicScripts(scriptNames, (new Date()).getTime(), () => {
});
function addDynamicScripts(list, version, callback) {
    var versionName = version ? version : 1;
    var dom = document.getElementsByTagName("head")[0];
    var length = list.length;
    list.forEach(element => {

        var scriptName = element + '?' + versionName;
        var doc = document.createElement("script");
        doc.src = scriptName;
        doc.type = 'text/javascript';
        doc.onload = function () {
            length -= 1;
            if (length === 0) {
                return callback();
            }
        };
        dom.appendChild(doc);
    });
}