"undefined" === typeof window.console && (window.console = {});
"undefined" === typeof window.console.emulated && ("function" === typeof window.console.log ? window.console.hasLog = !0 : ("undefined" === typeof window.console.log && (window.console.log = function() {}), window.console.hasLog = !1), "function" === typeof window.console.debug ? window.console.hasDebug = !0 : ("undefined" === typeof window.console.debug && (window.console.debug = !window.console.hasLog ? function() {} : function() {
    for (var a = ["console.debug:"], b = 0; b < arguments.length; b++) a.push(arguments[b]);
    window.console.log.apply(window.console,
        a)
}), window.console.hasDebug = !1), "function" === typeof window.console.warn ? window.console.hasWarn = !0 : ("undefined" === typeof window.console.warn && (window.console.warn = !window.console.hasLog ? function() {} : function() {
    for (var a = ["console.warn:"], b = 0; b < arguments.length; b++) a.push(arguments[b]);
    window.console.log.apply(window.console, a)
}), window.console.hasWarn = !1), "function" === typeof window.console.error ? window.console.hasError = !0 : ("undefined" === typeof window.console.error && (window.console.error = function() {
    var a =
        "An error has occured.";
    if (window.console.hasLog) {
        for (var a = ["console.error:"], b = 0; b < arguments.length; b++) a.push(arguments[b]);
        window.console.log.apply(window.console, a);
        a = "An error has occured. More information is available in your browser's javascript console."
    }
    for (b = 0; b < arguments.length; ++b) {
        if (typeof arguments[b] !== "string") break;
        a = a + ("\n" + arguments[b])
    }
    if (typeof Error !== "undefined") throw Error(a);
    throw a;
}), window.console.hasError = !1), "function" === typeof window.console.trace ? window.console.hasTrace = !0 : ("undefined" === typeof window.console.trace && (window.console.trace = function() {
    window.console.error("console.trace does not exist")
}), window.console.hasTrace = !1), window.console.emulated = !0);
(function(a) {
    a.appendStylesheet = a.appendStylesheet || function(b, c) {
        if (!document.body) {
            setTimeout(function() {
                a.appendStylesheet.apply(a, [b, c])
            }, 500);
            return a
        }
        var d = "stylesheet-" + b.replace(/[^a-zA-Z0-9]/g, ""),
            e = a("#" + d);
        typeof c === "undefined" && (c = false);
        if (e.length === 1)
            if (c) e.remove();
            else return a;
        var e = document.getElementsByTagName(a.browser.safari ? "head" : "body")[0],
            f = document.createElement("link");
        f.type = "text/css";
        f.rel = "stylesheet";
        f.media = "screen";
        f.href = b;
        f.id = d;
        e.appendChild(f);
        return a
    };
    a.appendScript =
        a.appendScript || function(b, c) {
            if (!document.body) {
                setTimeout(function() {
                    a.appendScript.apply(a, [b, c])
                }, 500);
                return a
            }
            var d = "script-" + b.replace(/[^a-zA-Z0-9]/g, ""),
                e = a("#" + d);
            typeof c === "undefined" && (c = false);
            if (e.length === 1)
                if (c) e.remove();
                else return a;
            var e = document.getElementsByTagName(a.browser.safari ? "head" : "body")[0],
                f = document.createElement("script");
            f.type = "text/javascript";
            f.src = b;
            f.id = d;
            e.appendChild(f);
            return a
        }
})(jQuery);
(function(a) {
    a.fn.findAndSelf = a.fn.findAndSelf || function(b) {
        return a(this).find(b).andSelf().filter(b)
    };
    Number.prototype.replace = Number.prototype.replace || function() {
        return ("" + this).replace.apply(this, arguments)
    };
    a.SyntaxHighlighter ? window.console.warn("SyntaxHighlighter has already been defined...") : a.SyntaxHighlighter = {
        config: {
            load: true,
            highlight: true,
            debug: false,
            wrapLines: true,
            lineNumbers: true,
            stripEmptyStartFinishLines: true,
            stripInitialWhitespace: true,
            alternateLines: false,
            defaultClassname: "highlight",
            theme: "balupton",
            themes: ["balupton"],
            addSparkleExtension: true,
            prettifyBaseUrl: "https://balupton.github.com/jquery-syntaxhighlighter/prettify",
            baseUrl: "https://balupton.github.com/jquery-syntaxhighlighter"
        },
        init: function(b) {
            var c = this.config,
                d = c.baseUrl;
            if (d[d.length - 1] === "/") c.baseUrl = d.substr(0, d.length - 2);
            delete d;
            a.extend(true, this.config, b || {});
            a.Sparkle && a.Sparkle.addExtension("syntaxhighlighter", function() {
                a(this).syntaxHighlight()
            });
            a.fn.syntaxHighlight = a.fn.SyntaxHighlight = this.fn;
            c.load && this.load();
            c.highlight && this.highlight();
            return this
        },
        load: function() {
            var b = this.config,
                c = b.prettifyBaseUrl,
                d = b.baseUrl,
                b = b.themes;
            if (!this.loaded()) {
                a.appendScript("https://balupton.github.io/jquery-syntaxhighlighter/prettify/prettify.min.js");
                a.appendStylesheet("https://balupton.github.io/jquery-syntaxhighlighter/prettify/prettify.min.css");
                a.appendStylesheet("https://balupton.github.io/jquery-syntaxhighlighter/styles/style.min.css");
                a.each(b, function(b, c) {
                    a.appendStylesheet("https://balupton.github.io/jquery-syntaxhighlighter/styles/theme-balupton.min.css")
                });
                a.browser.msie && a.appendStylesheet(d + "/styles/ie.min.css");
                this.loadedExtras = true
            }
            return this
        },
        loadedExtras: false,
        loaded: function() {
            return typeof prettyPrint !==
                "undefined" && this.loadedExtras
        },
        determineLanguage: function(a) {
            for (var c = null, d = /lang(uage)?-([a-z0-9]+)/g, e = d.exec(a); e !== null;) {
                c = e[2];
                e = d.exec(a)
            }
            return c
        },
        fn: function() {
            var b = a(this);
            a.SyntaxHighlighter.highlight({
                el: b
            });
            return this
        },
        highlight: function(b) {
            typeof b !== "object" && (b = {});
            var c = this,
                d = c.config,
                e = b.el || false;
            e instanceof jQuery || (e = a("body"));
            if (c.loaded()) {
                var f = d.defaultClassname,
                    g = "";
                if (typeof f === "array") {
                    g = "." + f.join(",.");
                    f = f.join(" ")
                } else {
                    f = "" + f;
                    g = "." + f.replace(" ", ",.")
                }
                if (g ===
                    "." || !f) {
                    window.console.error("SyntaxHighlighter.highlight: Invalid defaultClassname.", [this, arguments], [d.defaultClassname]);
                    window.console.trace()
                }
                e = e.findAndSelf("code,pre").filter("[class*=lang]," + g).filter(":not(.prettyprint)");
                e.css({
                    "overflow-y": "visible",
                    "overflow-x": "visible",
                    "white-space": "pre"
                }).addClass("prettyprint " + f).each(function() {
                    var b = a(this),
                        d = b.attr("class"),
                        d = c.determineLanguage(d);
                    b.addClass("lang-" + d)
                });
                d.lineNumbers && e.addClass("linenums");
                d.theme && e.addClass("theme-" + d.theme);
                d.alternateLines && e.addClass("alternate");
                prettyPrint();
                d.stripEmptyStartFinishLines && e.find("li:first-child > :first-child, li:last-child > :first-child").each(function() {
                    var b = a(this),
                        d = /^([\r\n\s\t]|\&nbsp;)*$/.test(b.html()),
                        c = b.parent(),
                        c = b.siblings();
                    if (d && (c.length === 0 || c.length === 1 && c.filter(":last").is("br"))) {
                        c = b.parent();
                        b = c.val();
                        c.next().val(b);
                        c.remove()
                    }
                });
                d.stripInitialWhitespace && e.find("li:first-child > :first-child").each(function() {
                    var b = a(this),
                        c = (b.html().match(/^(([\r\n\s\t]|\&nbsp;)+)/) || [])[1] || "";
                    c.length && b.parent().siblings().children(":first-child").add(b).each(function() {
                        var b = a(this),
                            d = b.html(),
                            d = d.replace(RegExp("^" + c, "gm"), "");
                        b.html(d)
                    })
                });
                d.wrapLines ? e.css({
                    "overflow-x": "hidden",
                    "overflow-y": "hidden",
                    "white-space": "pre-wrap",
                    "max-height": "none"
                }) : e.css({
                    "overflow-x": "auto",
                    "overflow-y": "auto",
                    "white-space": "normal",
                    "max-height": "500px"
                });
                return this
            }
            d.debug && window.console.debug("SyntaxHighlighter.highlight: Chosen SyntaxHighlighter is not yet defined. Waiting 1200 ms then trying again.");
            setTimeout(function() {
                c.highlight.apply(c, [b])
            }, 1200)
        }
    }
})(jQuery);