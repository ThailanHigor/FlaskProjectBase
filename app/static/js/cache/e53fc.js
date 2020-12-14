var sbi_js_exists = void 0 !== sbi_js_exists;
sbi_js_exists ||
    (!(function (i) {
        function e() {
            var i,
                e,
                s,
                t = t || { VER: "0.9.944" };
            (t.bgs_Available = !1),
                (t.bgs_CheckRunned = !1),
                (function (i) {
                    i.fn.extend({
                        sbi_imgLiquid: function (e) {
                            (this.defaults = {
                                fill: !0,
                                verticalAlign: "center",
                                horizontalAlign: "center",
                                useBackgroundSize: !0,
                                useDataHtmlAttr: !0,
                                responsive: !0,
                                delay: 0,
                                fadeInTime: 0,
                                removeBoxBackground: !0,
                                hardPixels: !0,
                                responsiveCheckTime: 500,
                                timecheckvisibility: 500,
                                onStart: null,
                                onFinish: null,
                                onItemStart: null,
                                onItemFinish: null,
                                onItemError: null,
                            }),
                                (function () {
                                    if (!t.bgs_CheckRunned) {
                                        t.bgs_CheckRunned = !0;
                                        var e = i('<span style="background-size:cover" />');
                                        i("body").append(e),
                                            (function () {
                                                var i = e[0];
                                                if (i && window.getComputedStyle) {
                                                    var s = window.getComputedStyle(i, null);
                                                    s && s.backgroundSize && (t.bgs_Available = "cover" === s.backgroundSize);
                                                }
                                            })(),
                                            e.remove();
                                    }
                                })();
                            var s = this;
                            return (
                                (this.options = e),
                                (this.settings = i.extend({}, this.defaults, this.options)),
                                this.settings.onStart && this.settings.onStart(),
                                this.each(function (e) {
                                    function a() {
                                        (r.responsive || g.data("sbi_imgLiquid_oldProcessed")) &&
                                            g.data("sbi_imgLiquid_settings") &&
                                            ((r = g.data("sbi_imgLiquid_settings")),
                                            (l.actualSize = l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4),
                                            l.sizeOld && l.actualSize !== l.sizeOld && o(),
                                            (l.sizeOld = l.actualSize),
                                            setTimeout(a, r.responsiveCheckTime));
                                    }
                                    function n() {
                                        g.data("sbi_imgLiquid_error", !0), l.addClass("sbi_imgLiquid_error"), r.onItemError && r.onItemError(e, l, g), d();
                                    }
                                    function o() {
                                        var i,
                                            s,
                                            t,
                                            a,
                                            n,
                                            o,
                                            h,
                                            u,
                                            m = 0,
                                            _ = 0,
                                            c = l.width(),
                                            f = l.height();
                                        void 0 === g.data("owidth") && g.data("owidth", g[0].width),
                                            void 0 === g.data("oheight") && g.data("oheight", g[0].height),
                                            r.fill === c / f >= g.data("owidth") / g.data("oheight")
                                                ? ((i = "100%"), (s = "auto"), (t = Math.floor(c)), (a = Math.floor(c * (g.data("oheight") / g.data("owidth")))))
                                                : ((i = "auto"), (s = "100%"), (t = Math.floor(f * (g.data("owidth") / g.data("oheight")))), (a = Math.floor(f))),
                                            (h = c - t),
                                            "left" === (n = r.horizontalAlign.toLowerCase()) && (_ = 0),
                                            "center" === n && (_ = 0.5 * h),
                                            "right" === n && (_ = h),
                                            -1 !== n.indexOf("%") && (n = parseInt(n.replace("%", ""), 10)) > 0 && (_ = h * n * 0.01),
                                            (u = f - a),
                                            "left" === (o = r.verticalAlign.toLowerCase()) && (m = 0),
                                            "center" === o && (m = 0.5 * u),
                                            "bottom" === o && (m = u),
                                            -1 !== o.indexOf("%") && (o = parseInt(o.replace("%", ""), 10)) > 0 && (m = u * o * 0.01),
                                            r.hardPixels && ((i = t), (s = a)),
                                            g.css({ width: i, height: s, "margin-left": Math.floor(_), "margin-top": Math.floor(m) }),
                                            g.data("sbi_imgLiquid_oldProcessed") ||
                                                (g.fadeTo(r.fadeInTime, 1),
                                                g.data("sbi_imgLiquid_oldProcessed", !0),
                                                r.removeBoxBackground && l.css("background-image", "none"),
                                                l.addClass("sbi_imgLiquid_nobgSize"),
                                                l.addClass("sbi_imgLiquid_ready")),
                                            r.onItemFinish && r.onItemFinish(e, l, g),
                                            d();
                                    }
                                    function d() {
                                        e === s.length - 1 && s.settings.onFinish && s.settings.onFinish();
                                    }
                                    var r = s.settings,
                                        l = i(this),
                                        g = i("img:first", l);
                                    return g.length
                                        ? (g.data("sbi_imgLiquid_settings")
                                              ? (l.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"), (r = i.extend({}, g.data("sbi_imgLiquid_settings"), s.options)))
                                              : (r = i.extend(
                                                    {},
                                                    s.settings,
                                                    (function () {
                                                        var i = {};
                                                        if (s.settings.useDataHtmlAttr) {
                                                            var e = l.attr("data-sbi_imgLiquid-fill"),
                                                                a = l.attr("data-sbi_imgLiquid-horizontalAlign"),
                                                                n = l.attr("data-sbi_imgLiquid-verticalAlign");
                                                            ("true" === e || "false" === e) && (i.fill = Boolean("true" === e)),
                                                                void 0 === a || ("left" !== a && "center" !== a && "right" !== a && -1 === a.indexOf("%")) || (i.horizontalAlign = a),
                                                                void 0 === n || ("top" !== n && "bottom" !== n && "center" !== n && -1 === n.indexOf("%")) || (i.verticalAlign = n);
                                                        }
                                                        return t.isIE && s.settings.ieFadeInDisabled && (i.fadeInTime = 0), i;
                                                    })()
                                                )),
                                          g.data("sbi_imgLiquid_settings", r),
                                          r.onItemStart && r.onItemStart(e, l, g),
                                          void (t.bgs_Available && r.useBackgroundSize
                                              ? (-1 === l.css("background-image").indexOf(encodeURI(g.attr("src"))) && l.css({ "background-image": 'url("' + encodeURI(g.attr("src")) + '")' }),
                                                l.css({ "background-size": r.fill ? "cover" : "contain", "background-position": (r.horizontalAlign + " " + r.verticalAlign).toLowerCase(), "background-repeat": "no-repeat" }),
                                                i("a:first", l).css({ display: "block", width: "100%", height: "100%" }),
                                                i("img", l).css({ display: "none" }),
                                                r.onItemFinish && r.onItemFinish(e, l, g),
                                                l.addClass("sbi_imgLiquid_bgSize"),
                                                l.addClass("sbi_imgLiquid_ready"),
                                                d())
                                              : (function s() {
                                                    if (g.data("oldSrc") && g.data("oldSrc") !== g.attr("src")) {
                                                        var t = g.clone().removeAttr("style");
                                                        return t.data("sbi_imgLiquid_settings", g.data("sbi_imgLiquid_settings")), g.parent().prepend(t), g.remove(), ((g = t)[0].width = 0), void setTimeout(s, 10);
                                                    }
                                                    return g.data("sbi_imgLiquid_oldProcessed")
                                                        ? void o()
                                                        : (g.data("sbi_imgLiquid_oldProcessed", !1),
                                                          g.data("oldSrc", g.attr("src")),
                                                          i("img:not(:first)", l).css("display", "none"),
                                                          l.css({ overflow: "hidden" }),
                                                          g.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({ visibility: "visible", "max-width": "none", "max-height": "none", width: "auto", height: "auto", display: "block" }),
                                                          g.on("error", n),
                                                          (g[0].onerror = n),
                                                          (function i() {
                                                              g.data("sbi_imgLiquid_error") ||
                                                                  g.data("sbi_imgLiquid_loaded") ||
                                                                  g.data("sbi_imgLiquid_oldProcessed") ||
                                                                  (l.is(":visible") && g[0].complete && g[0].width > 0 && g[0].height > 0
                                                                      ? (g.data("sbi_imgLiquid_loaded", !0), setTimeout(o, e * r.delay))
                                                                      : setTimeout(i, r.timecheckvisibility));
                                                          })(),
                                                          void a());
                                                })()))
                                        : void n();
                                })
                            );
                        },
                    });
                })(jQuery),
                (i = t.injectCss),
                (e = document.getElementsByTagName("head")[0]),
                ((s = document.createElement("style")).type = "text/css"),
                s.styleSheet ? (s.styleSheet.cssText = i) : s.appendChild(document.createTextNode(i)),
                e.appendChild(s);
        }
        function s() {
            (this.feeds = {}), (this.options = sb_instagram_js_options);
        }
        function t(i, e, s) {
            (this.el = i), (this.index = e), (this.settings = s), (this.minImageWidth = 0), (this.imageResolution = 150), (this.resizedImages = {}), (this.needsResizing = []), (this.outOfPages = !1), (this.isInitialized = !1);
        }
        function a(e, s) {
            i.ajax({ url: sbiajaxurl, type: "post", data: e, success: s });
        }
        (s.prototype = {
            createPage: function (e, s) {
                (void 0 !== window.sbiajaxurl && -1 !== window.sbiajaxurl.indexOf(window.location.hostname)) || (window.sbiajaxurl = location.protocol + "//" + window.location.hostname + "/wp-admin/admin-ajax.php"),
                    i(".sbi_no_js_error_message").remove(),
                    i(".sbi_no_js").removeClass("sbi_no_js"),
                    e(s);
            },
            createFeeds: function (e) {
                e.whenFeedsCreated(
                    i(".sbi").each(function (e) {
                        i(this).attr("data-sbi-index", e + 1);
                        var s = i(this),
                            n = void 0 !== s.attr("data-sbi-flags") ? s.attr("data-sbi-flags").split(",") : [],
                            o = void 0 !== s.attr("data-options") ? JSON.parse(s.attr("data-options")) : {};
                        if (n.indexOf("testAjax") > -1) {
                            window.sbi.triggeredTest = !0;
                            a({ action: "sbi_on_ajax_test_trigger" }, function (i) {
                                console.log("did test");
                            });
                        }
                        var d = {
                            cols: s.attr("data-cols"),
                            colsmobile: "same" !== s.attr("data-colsmobile") ? s.attr("data-colsmobile") : s.attr("data-cols"),
                            num: s.attr("data-num"),
                            imgRes: s.attr("data-res"),
                            feedID: s.attr("data-feedid"),
                            shortCodeAtts: s.attr("data-shortcode-atts"),
                            resizingEnabled: -1 === n.indexOf("resizeDisable"),
                            imageLoadEnabled: -1 === n.indexOf("imageLoadDisable"),
                            debugEnabled: n.indexOf("debug") > -1,
                            favorLocal: n.indexOf("favorLocal") > -1,
                            ajaxPostLoad: n.indexOf("ajaxPostLoad") > -1,
                            autoMinRes: 1,
                            general: o,
                        };
                        (window.sbi.feeds[e] = (function (i, e, s) {
                            return new t(i, e, s);
                        })(this, e, d)),
                            window.sbi.feeds[e].setResizedImages(),
                            window.sbi.feeds[e].init();
                        var r = jQuery.Event("sbiafterfeedcreate");
                        (r.feed = window.sbi.feeds[e]), jQuery(window).trigger(r);
                    })
                );
            },
            afterFeedsCreated: function () {
                i(".sb_instagram_header").each(function () {
                    var e = i(this);
                    e.find(".sbi_header_link").hover(
                        function () {
                            e.find(".sbi_header_img_hover").addClass("sbi_fade_in");
                        },
                        function () {
                            e.find(".sbi_header_img_hover").removeClass("sbi_fade_in");
                        }
                    );
                });
            },
            encodeHTML: function (i) {
                return void 0 === i
                    ? ""
                    : i
                          .replace(/(>)/g, "&gt;")
                          .replace(/(<)/g, "&lt;")
                          .replace(/(&lt;br\/&gt;)/g, "<br>")
                          .replace(/(&lt;br&gt;)/g, "<br>");
            },
            urlDetect: function (i) {
                return i.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g);
            },
        }),
            (t.prototype = {
                init: function () {
                    var i = this;
                    this.settings.ajaxPostLoad ? this.getNewPostSet() : this.afterInitialImagesLoaded();
                    var e,
                        s =
                            ((e = 0),
                            function (i, s) {
                                clearTimeout(e), (e = setTimeout(i, s));
                            });
                    jQuery(window).resize(function () {
                        s(function () {
                            i.afterResize();
                        }, 500);
                    });
                },
                initLayout: function () {},
                afterInitialImagesLoaded: function () {
                    this.initLayout(), this.loadMoreButtonInit(), this.hideExtraImagesForWidth(), this.beforeNewImagesRevealed(), this.revealNewImages(), this.afterNewImagesRevealed();
                },
                afterResize: function () {
                    this.setImageHeight(), this.setImageResolution(), this.maybeRaiseImageResolution(), this.setImageSizeClass();
                },
                afterLoadMoreClicked: function (i) {
                    i.find(".sbi_loader").removeClass("sbi_hidden"), i.find(".sbi_btn_text").addClass("sbi_hidden"), i.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide");
                },
                afterNewImagesLoaded: function () {
                    var e = i(this.el),
                        s = this;
                    this.beforeNewImagesRevealed(),
                        this.revealNewImages(),
                        this.afterNewImagesRevealed(),
                        setTimeout(function () {
                            e.find(".sbi_loader").addClass("sbi_hidden"), e.find(".sbi_btn_text").removeClass("sbi_hidden"), s.maybeRaiseImageResolution();
                        }, 500);
                },
                beforeNewImagesRevealed: function () {
                    this.setImageHeight(), this.maybeRaiseImageResolution(!0), this.setImageSizeClass();
                },
                revealNewImages: function () {
                    var e = i(this.el);
                    "function" == typeof sbi_custom_js &&
                        setTimeout(function () {
                            sbi_custom_js();
                        }, 100),
                        this.applyImageLiquid(),
                        e.find(".sbi_item").each(function (i) {
                            jQuery(this)
                                .find(".sbi_photo")
                                .hover(
                                    function () {
                                        jQuery(this).fadeTo(200, 0.85);
                                    },
                                    function () {
                                        jQuery(this).stop().fadeTo(500, 1);
                                    }
                                );
                        }),
                        setTimeout(function () {
                            jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");
                            var i = 10;
                            e.find(".sbi_transition").each(function () {
                                var e = jQuery(this);
                                setTimeout(function () {
                                    e.removeClass("sbi_transition");
                                }, i),
                                    (i += 10);
                            });
                        }, 500);
                },
                afterNewImagesRevealed: function () {
                    this.listenForVisibilityChange(), this.sendNeedsResizingToServer(), this.settings.imageLoadEnabled || i(".sbi_no_resraise").removeClass("sbi_no_resraise");
                    var e = i.Event("sbiafterimagesloaded");
                    (e.el = i(this.el)), i(window).trigger(e);
                },
                setResizedImages: function () {
                    i(this.el).find(".sbi_resized_image_data").length &&
                        void 0 !== i(this.el).find(".sbi_resized_image_data").attr("data-resized") &&
                        0 === i(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"') &&
                        ((this.resizedImages = JSON.parse(i(this.el).find(".sbi_resized_image_data").attr("data-resized"))), i(this.el).find(".sbi_resized_image_data").remove());
                },
                sendNeedsResizingToServer: function () {
                    var e = this;
                    if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
                        var s = i(this.el).find(".sbi_item").length;
                        a({ action: "sbi_resized_images_submit", needs_resizing: e.needsResizing, offset: s, feed_id: e.settings.feedID, atts: e.settings.shortCodeAtts }, function (i) {
                            if (0 === i.trim().indexOf("{")) {
                                var s = JSON.parse(i);
                                e.settings.debugEnabled && console.log(s);
                            }
                        });
                    }
                },
                loadMoreButtonInit: function () {
                    var e = i(this.el),
                        s = this;
                    e.find("#sbi_load .sbi_load_btn")
                        .off()
                        .on("click", function () {
                            s.afterLoadMoreClicked(jQuery(this)), s.getNewPostSet();
                        });
                },
                getNewPostSet: function () {
                    var e = i(this.el),
                        s = this;
                    a({ action: "sbi_load_more_clicked", offset: e.find(".sbi_item").length, feed_id: s.settings.feedID, atts: s.settings.shortCodeAtts, current_resolution: s.imageResolution }, function (t) {
                        if (0 === t.trim().indexOf("{")) {
                            var a = JSON.parse(t);
                            s.settings.debugEnabled && console.log(a),
                                s.appendNewPosts(a.html),
                                s.addResizedImages(a.resizedImages),
                                s.settings.ajaxPostLoad ? ((s.settings.ajaxPostLoad = !1), s.afterInitialImagesLoaded()) : s.afterNewImagesLoaded(),
                                a.feedStatus.shouldPaginate ? (s.outOfPages = !1) : ((s.outOfPages = !0), e.find(".sbi_load_btn").hide()),
                                i(".sbi_no_js").removeClass("sbi_no_js");
                        }
                    });
                },
                appendNewPosts: function (e) {
                    var s = i(this.el);
                    s.find("#sbi_images .sbi_item").length ? s.find("#sbi_images .sbi_item").last().after(e) : s.find("#sbi_images").append(e);
                },
                addResizedImages: function (i) {
                    for (var e in i) this.resizedImages[e] = i[e];
                },
                setImageHeight: function () {
                    var e = i(this.el),
                        s = e.find(".sbi_photo").eq(0).innerWidth(),
                        t = this.getColumnCount(),
                        a = e.find("#sbi_images").innerWidth() - e.find("#sbi_images").width(),
                        n = a / 2;
                    (sbi_photo_width_manual = e.find("#sbi_images").width() / t - a),
                        e.find(".sbi_photo").css("height", s),
                        e.find(".sbi-owl-nav").length &&
                            setTimeout(function () {
                                var i = 2;
                                e.find(".sbi_owl2row-item").length && (i = 1);
                                var s = e.find(".sbi_photo").eq(0).innerWidth() / i;
                                (s += parseInt(n) * (2 - i + 2)), e.find(".sbi-owl-nav div").css("top", s);
                            }, 100);
                },
                maybeRaiseSingleImageResolution: function (e, s, t) {
                    var a = this,
                        n = a.getImageUrls(e),
                        o = e.find(".sbi_photo img").attr("src"),
                        d = 150,
                        r = e.find("img").get(0),
                        l = o === window.sbi.options.placeholder ? 1 : r.naturalWidth / r.naturalHeight;
                    t = void 0 !== t && t;
                    if (!(e.hasClass("sbi_no_resraise") || e.hasClass("sbi_had_error") || (e.find(".sbi_link_area").length && e.find(".sbi_link_area").hasClass("sbi_had_error")))) {
                        i.each(n, function (i, e) {
                            e === o && ((d = parseInt(i)), (t = !1));
                        });
                        var g = 640;
                        switch (a.settings.imgRes) {
                            case "thumb":
                                g = 150;
                                break;
                            case "medium":
                                g = 320;
                                break;
                            case "full":
                                g = 640;
                                break;
                            default:
                                var h = Math.max(a.settings.autoMinRes, e.find(".sbi_photo").innerWidth()),
                                    u = a.getBestResolutionForAuto(h, l, e);
                                switch (u) {
                                    case 320:
                                        g = 320;
                                        break;
                                    case 150:
                                        g = 150;
                                }
                        }
                        if (g > d || o === window.sbi.options.placeholder || t) {
                            if (a.settings.debugEnabled) {
                                var m = o === window.sbi.options.placeholder ? "was placeholder" : "too small";
                                console.log("rais res for " + o, m);
                            }
                            var _ = n[g].split("?ig_cache_key")[0];
                            if ((e.find(".sbi_photo img").attr("src", _), e.find(".sbi_photo").css("background-image", 'url("' + _ + '")'), (d = g), "auto" === a.settings.imgRes)) {
                                var c = !1;
                                e.find(".sbi_photo img").on("load", function () {
                                    var s = i(this),
                                        t = s.get(0).naturalWidth / s.get(0).naturalHeight;
                                    if (1e3 !== s.get(0).naturalWidth && t > l && !c) {
                                        switch (
                                            (a.settings.debugEnabled && console.log("rais res again for aspect ratio change " + o), (c = !0), (h = e.find(".sbi_photo").innerWidth()), (u = a.getBestResolutionForAuto(h, t, e)), (g = 640), u)
                                        ) {
                                            case 320:
                                                g = 320;
                                                break;
                                            case 150:
                                                g = 150;
                                        }
                                        g > d && ((_ = n[g].split("?ig_cache_key")[0]), s.attr("src", _), s.closest(".sbi_photo").css("background-image", 'url("' + _ + '")')),
                                            ("masonry" !== a.layout && "highlight" !== a.layout) ||
                                                (i(a.el).find("#sbi_images").smashotope(a.isotopeArgs),
                                                setTimeout(function () {
                                                    i(a.el).find("#sbi_images").smashotope(a.isotopeArgs);
                                                }, 500));
                                    } else if (a.settings.debugEnabled) {
                                        var r = c ? "already checked" : "no aspect ratio change";
                                        console.log("not raising res for replacement  " + o, r);
                                    }
                                });
                            }
                        }
                        e.find("img").on("error", function () {
                            if (i(this).hasClass("sbi_img_error")) console.log("unfixed error " + i(this).attr("src"));
                            else {
                                var e;
                                if ((i(this).addClass("sbi_img_error"), i(this).attr("src").indexOf("media?size=") > -1 || i(this).attr("src").indexOf("cdninstagram") > -1 || i(this).attr("src").indexOf("fbcdn") > -1))
                                    (a.settings.favorLocal = !0),
                                        void 0 !== (e = a.getImageUrls(i(this).closest(".sbi_item")))[640] &&
                                            (i(this).attr("src", e[640]),
                                            i(this)
                                                .closest(".sbi_photo")
                                                .css("background-image", "url(" + e[640] + ")"),
                                            i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"));
                                else if ("undefined" !== i(this).closest(".sbi_photo").attr("data-img-src-set"))
                                    void 0 !== (e = JSON.parse(i(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/"))).d &&
                                        (i(this).attr("src", e.d),
                                        i(this)
                                            .closest(".sbi_photo")
                                            .css("background-image", "url(" + e.d + ")"),
                                        i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"));
                                setTimeout(function () {
                                    a.afterResize();
                                }, 1500);
                            }
                        });
                    }
                },
                maybeRaiseImageResolution: function (e) {
                    var s = this,
                        t = void 0 !== e && !0 === e ? ".sbi_item.sbi_new" : ".sbi_item",
                        a = !s.isInitialized;
                    i(s.el)
                        .find(t)
                        .each(function (e) {
                            !i(this).hasClass("sbi_num_diff_hide") && i(this).find(".sbi_photo").length && void 0 !== i(this).find(".sbi_photo").attr("data-img-src-set") && s.maybeRaiseSingleImageResolution(i(this), e, a);
                        }),
                        (s.isInitialized = !0);
                },
                getBestResolutionForAuto: function (e, s, t) {
                    (isNaN(s) || s < 1) && (s = 1);
                    var a = e * s,
                        n = 10 * Math.ceil(a / 10),
                        o = [150, 320, 640];
                    if ((t.hasClass("sbi_highlighted") && (n *= 2), -1 === o.indexOf(parseInt(n)))) {
                        var d = !1;
                        i.each(o, function (i, e) {
                            e > parseInt(n) && !d && ((n = e), (d = !0));
                        });
                    }
                    return n;
                },
                hideExtraImagesForWidth: function () {
                    if ("carousel" !== this.layout) {
                        var e = i(this.el),
                            s = void 0 !== e.attr("data-num") && "" !== e.attr("data-num") ? parseInt(e.attr("data-num")) : 1,
                            t = void 0 !== e.attr("data-nummobile") && "" !== e.attr("data-nummobile") ? parseInt(e.attr("data-nummobile")) : s;
                        i(window).width() < 480
                            ? t < e.find(".sbi_item").length &&
                              e
                                  .find(".sbi_item")
                                  .slice(t - e.find(".sbi_item").length)
                                  .addClass("sbi_num_diff_hide")
                            : s < e.find(".sbi_item").length &&
                              e
                                  .find(".sbi_item")
                                  .slice(s - e.find(".sbi_item").length)
                                  .addClass("sbi_num_diff_hide");
                    }
                },
                setImageSizeClass: function () {
                    var e = i(this.el);
                    e.removeClass("sbi_small sbi_medium");
                    var s = e.innerWidth(),
                        t = parseInt(e.find("#sbi_images").outerWidth() - e.find("#sbi_images").width()) / 2,
                        a = this.getColumnCount(),
                        n = (s - t * (a + 2)) / a;
                    n > 120 && n < 240 ? e.addClass("sbi_medium") : n <= 120 && e.addClass("sbi_small");
                },
                setMinImageWidth: function () {
                    i(this.el).find(".sbi_item .sbi_photo").first().length ? (this.minImageWidth = i(this.el).find(".sbi_item .sbi_photo").first().innerWidth()) : (this.minImageWidth = 150);
                },
                setImageResolution: function () {
                    if ("auto" === this.settings.imgRes) this.imageResolution = "auto";
                    else
                        switch (this.settings.imgRes) {
                            case "thumb":
                                this.imageResolution = 150;
                                break;
                            case "medium":
                                this.imageResolution = 320;
                                break;
                            default:
                                this.imageResolution = 640;
                        }
                },
                getImageUrls: function (i) {
                    var e = JSON.parse(i.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/")),
                        s = i.attr("id").replace("sbi_", "");
                    if (
                        void 0 !== this.resizedImages[s] &&
                        "video" !== this.resizedImages[s] &&
                        "pending" !== this.resizedImages[s] &&
                        "error" !== this.resizedImages[s].id &&
                        "video" !== this.resizedImages[s].id &&
                        "pending" !== this.resizedImages[s].id
                    ) {
                        if (void 0 !== this.resizedImages[s].sizes) {
                            var t = [];
                            void 0 !== this.resizedImages[s].sizes.full && ((e[640] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg"), t.push(640)),
                                void 0 !== this.resizedImages[s].sizes.low && ((e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg"), t.push(320)),
                                void 0 !== this.resizedImages[s].sizes.thumb && (t.push(150), (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "thumb.jpg")),
                                this.settings.favorLocal &&
                                    (-1 === t.indexOf(640) && t.indexOf(320) > -1 && (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg"),
                                    -1 === t.indexOf(320) &&
                                        (t.indexOf(640) > -1
                                            ? (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg")
                                            : t.indexOf(150) > -1 && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "thumb.jpg")),
                                    -1 === t.indexOf(150) &&
                                        (t.indexOf(320) > -1
                                            ? (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg")
                                            : t.indexOf(640) > -1 && (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg")));
                        }
                    } else (void 0 === this.resizedImages[s] || (void 0 !== this.resizedImages[s].id && "pending" !== this.resizedImages[s].id && "error" !== this.resizedImages[s].id)) && this.addToNeedsResizing(s);
                    return e;
                },
                getAvatarUrl: function (i, e) {
                    if ("" === i) return "";
                    var s = this.settings.general.avatars;
                    return "local" === (e = void 0 !== e ? e : "local")
                        ? void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i])
                            ? sb_instagram_js_options.resized_url + i + ".jpg"
                            : void 0 !== s[i]
                            ? s[i]
                            : ""
                        : void 0 !== s[i]
                        ? s[i]
                        : void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i])
                        ? sb_instagram_js_options.resized_url + i + ".jpg"
                        : "";
                },
                addToNeedsResizing: function (i) {
                    -1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i);
                },
                applyImageLiquid: function () {
                    var s = i(this.el);
                    e(), "function" == typeof s.find(".sbi_photo").sbi_imgLiquid && s.find(".sbi_photo").sbi_imgLiquid({ fill: !0 });
                },
                listenForVisibilityChange: function () {
                    var e,
                        s,
                        t,
                        a = this;
                    (e = jQuery),
                        (s = { callback: function () {}, runOnLoad: !0, frequency: 100, sbiPreviousVisibility: null }),
                        (t = {
                            sbiCheckVisibility: function (i, e) {
                                if (jQuery.contains(document, i[0])) {
                                    var s = e.sbiPreviousVisibility,
                                        a = i.is(":visible");
                                    (e.sbiPreviousVisibility = a),
                                        null == s ? e.runOnLoad && e.callback(i, a) : s !== a && e.callback(i, a),
                                        setTimeout(function () {
                                            t.sbiCheckVisibility(i, e);
                                        }, e.frequency);
                                }
                            },
                        }),
                        (e.fn.sbiVisibilityChanged = function (i) {
                            var a = e.extend({}, s, i);
                            return this.each(function () {
                                t.sbiCheckVisibility(e(this), a);
                            });
                        }),
                        "function" == typeof i(this.el).filter(":hidden").sbiVisibilityChanged &&
                            i(this.el)
                                .filter(":hidden")
                                .sbiVisibilityChanged({
                                    callback: function (i, e) {
                                        a.afterResize();
                                    },
                                    runOnLoad: !1,
                                });
                },
                getColumnCount: function () {
                    var e = i(this.el),
                        s = this.settings.cols,
                        t = this.settings.colsmobile,
                        a = s;
                    return (
                        (sbiWindowWidth = window.innerWidth),
                        e.hasClass("sbi_mob_col_auto")
                            ? (sbiWindowWidth < 640 && parseInt(s) > 2 && parseInt(s) < 7 && (a = 2), sbiWindowWidth < 640 && parseInt(s) > 6 && parseInt(s) < 11 && (a = 4), sbiWindowWidth <= 480 && parseInt(s) > 2 && (a = 1))
                            : sbiWindowWidth <= 480 && (a = t),
                        parseInt(a)
                    );
                },
            }),
            (window.sbi_init = function () {
                (window.sbi = new s()), window.sbi.createPage(window.sbi.createFeeds, { whenFeedsCreated: window.sbi.afterFeedsCreated });
            });
    })(jQuery),
    jQuery(document).ready(function (i) {
        void 0 === window.sb_instagram_js_options &&
            (window.sb_instagram_js_options = {
                font_method: "svg",
                resized_url: location.protocol + "//" + window.location.hostname + "/wp-content/uploads/sb-instagram-feed-images/",
                placeholder: location.protocol + "//" + window.location.hostname + "/wp-content/plugins/instagram-feed/img/placeholder.png",
            }),
            void 0 !== window.sb_instagram_js_options.resized_url &&
                -1 === window.sb_instagram_js_options.resized_url.indexOf(location.protocol) &&
                ("http:" === location.protocol
                    ? (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("http:", "https:"))
                    : (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("https:", "http:"))),
            sbi_init();
    }));
