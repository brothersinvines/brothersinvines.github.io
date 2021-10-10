!function(a) {
  "use strict";
  function b() {
    eltdf.scroll = a(window).scrollTop(),
    eltdf.body.hasClass("eltdf-dark-header") && (eltdf.defaultHeaderStyle = "eltdf-dark-header"),
    eltdf.body.hasClass("eltdf-light-header") && (eltdf.defaultHeaderStyle = "eltdf-light-header")
  }
  function c() {}
  function d() {
    eltdf.windowWidth = a(window).width(),
        eltdf.windowHeight = a(window).height()
  }
  function e() {
    eltdf.scroll = a(window).scrollTop()
  }
  switch (window.eltdf = {},
      eltdf.modules = {},
      eltdf.scroll = 0,
      eltdf.window = a(window),
      eltdf.document = a(document),
      eltdf.windowWidth = a(window).width(),
      eltdf.windowHeight = a(window).height(),
      eltdf.body = a("body"),
      eltdf.html = a("html, body"),
      eltdf.htmlEl = a("html"),
      eltdf.menuDropdownHeightSet = !1,
      eltdf.defaultHeaderStyle = "",
      eltdf.minVideoWidth = 1500,
      eltdf.videoWidthOriginal = 1280,
      eltdf.videoHeightOriginal = 720,
      eltdf.videoRatio = 1.61,
      eltdf.eltdfOnDocumentReady = b,
      eltdf.eltdfOnWindowLoad = c,
      eltdf.eltdfOnWindowResize = d,
      eltdf.eltdfOnWindowScroll = e,
      a(document).ready(b),
      a(window).on("load", c),
      a(window).resize(d),
      a(window).scroll(e),
      !0) {
    case eltdf.body.hasClass("eltdf-grid-1300"):
      eltdf.boxedLayoutWidth = 1350;
      break;
    case eltdf.body.hasClass("eltdf-grid-1200"):
      eltdf.boxedLayoutWidth = 1250;
      break;
    case eltdf.body.hasClass("eltdf-grid-1000"):
      eltdf.boxedLayoutWidth = 1050;
      break;
    case eltdf.body.hasClass("eltdf-grid-800"):
      eltdf.boxedLayoutWidth = 850;
      break;
    default:
      eltdf.boxedLayoutWidth = 1150
  }
}(jQuery),
    function(a) {
      "use strict";
      function b() {
        f(),
            h(),
            i(),
            z().init(),
            g(),
            o(),
            p(),
            s(),
            r(),
            u()
      }
      function c() {
        t(),
        eltdf.body.hasClass("wpb-js-composer") && window.vc_rowBehaviour()
      }
      function d() {
        p()
      }
      function e() {}
      function f() {
        fluidvids.init({
          selector: ["iframe"],
          players: ["www.youtube.com", "player.vimeo.com"]
        })
      }
      function g() {
        var b = a(".eltdf-owl-slider");
        b.length && b.each(function() {
          var b = a(this)
              , c = function() {
            var a = Math.floor(parseInt(b.css("width")));
            b.css("width", a)
          };
          b.owlCarousel({
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 600,
            items: 1,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<span class="eltdf-prev-icon"><span class="eltdf-icon-arrow arrow_left"></span></span>', '<span class="eltdf-next-icon"><span class="eltdf-icon-arrow arrow_right"></span></span>'],
            onInitialized: function() {
              c()
            }
          })
        })
      }
      function h() {
        a(".eltdf-preload-background").each(function() {
          var b = a(this);
          if ("" !== b.css("background-image") && "none" != b.css("background-image")) {
            var c = b.attr("style");
            if (c = c.match(/url\(["']?([^'")]+)['"]?\)/),
                c = c ? c[1] : "") {
              var d = new Image;
              d.src = c,
                  a(d).on("load", function() {
                    b.removeClass("eltdf-preload-background")
                  })
            }
          } else
            a(window).on("load", function() {
              b.removeClass("eltdf-preload-background")
            })
        })
      }
      function i() {
        a("a[data-rel^='prettyPhoto']").prettyPhoto({
          hook: "data-rel",
          animation_speed: "normal",
          slideshow: !1,
          autoplay_slideshow: !1,
          opacity: 1,
          show_title: !0,
          allow_resize: !0,
          horizontal_padding: 0,
          default_width: 960,
          default_height: 540,
          counter_separator_label: "/",
          theme: "pp_default",
          hideflash: !1,
          wmode: "opaque",
          autoplay: !0,
          modal: !1,
          overlay_gallery: !1,
          keyboard_shortcuts: !0,
          deeplinking: !1,
          custom_markup: "",
          social_tools: !1,
          markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>'
        })
      }
      function j() {
        window.addEventListener && window.addEventListener("wheel", l, {
          passive: !1
        }),
            document.onkeydown = m
      }
      function k() {
        window.removeEventListener && window.removeEventListener("wheel", l, {
          passive: !1
        }),
            window.onmousewheel = document.onmousewheel = document.onkeydown = null
      }
      function l(a) {
        n(a)
      }
      function m(a) {
        for (var b = [37, 38, 39, 40], c = b.length; c--; )
          if (a.keyCode === b[c])
            return void n(a)
      }
      function n(a) {
        a = a || window.event,
        a.preventDefault && a.preventDefault(),
            a.returnValue = !1
      }
      function o() {
        a(".eltdf-self-hosted-video").mediaelementplayer({
          audioWidth: "100%"
        })
      }
      function p() {
        a(".eltdf-self-hosted-video-holder .eltdf-video-wrap").each(function() {
          var b = a(this)
              , c = b.closest(".eltdf-self-hosted-video-holder").outerWidth()
              , d = c / eltdf.videoRatio;
          navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (b.parent().width(c),
              b.parent().height(d)),
              b.width(c),
              b.height(d),
              b.find("video, .mejs-overlay, .mejs-poster").width(c),
              b.find("video, .mejs-overlay, .mejs-poster").height(d)
        })
      }
      function q(b) {
        var c = a("#eltdf-back-to-top");
        c.removeClass("off on"),
            "on" === b ? c.addClass("on") : c.addClass("off")
      }
      function r() {
        eltdf.window.scroll(function() {
          var b, c = a(this).scrollTop(), d = a(this).height();
          b = c > 0 ? c + d / 2 : 1,
              q(b < 1e3 ? "off" : "on")
        })
      }
      function s() {
        // a("#eltdf-back-to-top").on("click", function(a) {
        //   a.preventDefault(),
        //       eltdf.html.animate({
        //         scrollTop: 0
        //       }, eltdf.window.scrollTop() / 3, "easeInOutQuad")
        // })
      }
      function t() {
        var b = a("body > .eltdf-smooth-transition-loader.eltdf-mimic-ajax");
        if (b.length) {
          if (b.fadeOut(500, "easeInOutQuad"),
              a(window).on("pageshow", function(a) {
                a.originalEvent.persisted && b.fadeOut(500, "easeInOutQuad")
              }),
          a("a").parent().hasClass("eltdf-blog-load-more-button") || a("a").parent().hasClass("eltdf-ptf-list-load-more"))
            return !1;
          a("a").on("click", function(c) {
            var d = a(this);
            1 == c.which && d.attr("href").indexOf(window.location.host) >= 0 && void 0 === d.data("rel") && void 0 === d.attr("rel") && (void 0 === d.attr("target") || "_self" === d.attr("target")) && d.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (c.preventDefault(),
                b.addClass("eltdf-hide-spinner"),
                b.fadeIn(500, function() {
                  window.location = d.attr("href")
                }))
          })
        }
      }
      function u() {
        var a = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
            , b = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
            , c = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
        a && eltdf.body.addClass("eltdf-chrome"),
        b && eltdf.body.addClass("eltdf-safari"),
        c && eltdf.body.addClass("eltdf-ms-explorer-9-10")
      }
      function v(a) {
        var b = a.data()
            , c = {};
        for (var d in b)
          b.hasOwnProperty(d) && void 0 !== b[d] && !1 !== b[d] && (c[d] = b[d]);
        return c
      }
      function w(a, b) {
        var c = {
          action: b
        };
        for (var d in a)
          a.hasOwnProperty(d) && void 0 !== a[d] && !1 !== a[d] && (c[d] = a[d]);
        return c
      }
      function x() {
        window.requestNextAnimationFrame = function() {
          var a = void 0
              , b = void 0
              , c = navigator.userAgent
              , d = 0
              , e = this;
          return window.webkitRequestAnimationFrame && (b = function(a) {
                void 0 === a && (a = +new Date),
                    e.callback(a)
              }
                  ,
                  a = window.webkitRequestAnimationFrame,
                  window.webkitRequestAnimationFrame = function(c, d) {
                    e.callback = c,
                        a(b, d)
                  }
          ),
          window.mozRequestAnimationFrame && (d = c.indexOf("rv:"),
          -1 != c.indexOf("Gecko") && "2.0" === c.substr(d + 3, 3) && (window.mozRequestAnimationFrame = void 0)),
          window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
            var c, d;
            window.setTimeout(function() {
              c = +new Date,
                  a(c),
                  d = +new Date,
                  e.timeout = 1e3 / 60 - (d - c)
            }, e.timeout)
          }
        }()
      }
      var y = {};
      eltdf.modules.common = y,
          y.eltdfFluidVideo = f,
          y.eltdfEnableScroll = k,
          y.eltdfDisableScroll = j,
          y.eltdfOwlSlider = g,
          y.getLoadMoreData = v,
          y.setLoadMoreAjaxData = w,
          y.eltdfRequestAnimationFrame = x,
          y.eltdfOnDocumentReady = b,
          y.eltdfOnWindowLoad = c,
          y.eltdfOnWindowResize = d,
          y.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e);
      var z = eltdf.modules.common.eltdfInitAnchor = function() {
        var b = function(b) {
          a(".eltdf-main-menu .eltdf-active-item, .eltdf-mobile-nav .eltdf-active-item, .eltdf-fullscreen-menu .eltdf-active-item").removeClass("eltdf-active-item"),
              b.parent().addClass("eltdf-active-item"),
              a(".eltdf-main-menu a, .eltdf-mobile-nav a, .eltdf-fullscreen-menu a").removeClass("current"),
              b.addClass("current")
        }
            , c = function() {
          a("[data-eltdf-anchor]").waypoint(function(c) {
            "down" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("eltdf-anchor") + "']"))
          }, {
            offset: "50%"
          }),
              a("[data-eltdf-anchor]").waypoint(function(c) {
                "up" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("eltdf-anchor") + "']"))
              }, {
                offset: function() {
                  return -(a(this.element).outerHeight() - 150)
                }
              })
        }
            , d = function() {
          var b = window.location.hash.split("#")[1];
          "" !== b && a('[data-eltdf-anchor="' + b + '"]').length > 0 && e(b)
        }
            , e = function(c) {
          var d, e = a("a"), g = c;
          if ("" !== g && a('[data-eltdf-anchor="' + g + '"]').length > 0) {
            var h = a('[data-eltdf-anchor="' + g + '"]').offset().top;
            return d = a('[data-eltdf-anchor="' + g + '"]').offset().top - f(h) - eltdfGlobalVars.vars.eltdfAddForAdminBar,
                b(e),
                eltdf.html.stop().animate({
                  scrollTop: Math.round(d)
                }, 1e3, function() {
                  history.pushState && history.pushState(null, null, "#" + g)
                }),
                !1
          }
        }
            , f = function(a) {
          "eltdf-sticky-header-on-scroll-down-up" === eltdf.modules.header.behaviour && (eltdf.modules.header.isStickyVisible = a > eltdf.modules.header.stickyAppearAmount),
          "eltdf-sticky-header-on-scroll-up" === eltdf.modules.header.behaviour && a > eltdf.scroll && (eltdf.modules.header.isStickyVisible = !1);
          var b = eltdf.modules.header.isStickyVisible ? eltdfGlobalVars.vars.eltdfStickyHeaderTransparencyHeight : eltdfPerPageVars.vars.eltdfHeaderTransparencyHeight;
          return eltdf.windowWidth < 1025 && (b = 0),
              b
        }
            , g = function() {
          eltdf.document.on("click", ".eltdf-main-menu a, .eltdf-fullscreen-menu a, .eltdf-btn, .eltdf-anchor, .eltdf-mobile-nav a", function() {
            var c, d = a(this), e = d.prop("hash").split("#")[1];
            if ("" !== e && a('[data-eltdf-anchor="' + e + '"]').length > 0) {
              var g = a('[data-eltdf-anchor="' + e + '"]').offset().top;
              return c = a('[data-eltdf-anchor="' + e + '"]').offset().top - f(g) - eltdfGlobalVars.vars.eltdfAddForAdminBar,
                  b(d),
                  eltdf.html.stop().animate({
                    scrollTop: Math.round(c)
                  }, 1e3, function() {
                    history.pushState && history.pushState(null, null, "#" + e)
                  }),
                  !1
            }
          })
        };
        return {
          init: function() {
            a("[data-eltdf-anchor]").length && (g(),
                c(),
                a(window).on("load", function() {
                  d()
                }))
          }
        }
      }
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        f(),
            h(),
            i(),
            j(),
            k(),
            l(),
            m(),
            o(),
            q().init(),
            g(),
            n()
      }
      function c() {
        m()
      }
      function d() {}
      function e() {}
      function f() {
        var b = (a(".eltdf-page-header"),
            a(".eltdf-sticky-header"))
            , c = a(".eltdf-fixed-wrapper")
            , d = 0;
        a(".eltdf-slider").length && (d = a(".eltdf-slider").outerHeight());
        var e, f, g = a(".eltdf-page-header").find(".eltdf-fixed-wrapper").length ? a(".eltdf-page-header").find(".eltdf-fixed-wrapper").offset().top - eltdfGlobalVars.vars.eltdfAddForAdminBar - eltdf.scroll : 0;
        switch (!0) {
          case eltdf.body.hasClass("eltdf-sticky-header-on-scroll-up"):
            eltdf.modules.header.behaviour = "eltdf-sticky-header-on-scroll-up";
            var h = a(document).scrollTop();
            e = eltdfGlobalVars.vars.eltdfTopBarHeight + eltdfGlobalVars.vars.eltdfLogoAreaHeight + eltdfGlobalVars.vars.eltdfMenuAreaHeight + eltdfGlobalVars.vars.eltdfStickyHeaderHeight,
                f = function() {
                  var c = a(document).scrollTop();
                  c > h && c > e || c < e ? (eltdf.modules.header.isStickyVisible = !1,
                      b.removeClass("header-appear").find(".eltdf-main-menu .second").removeClass("eltdf-drop-down-start")) : (eltdf.modules.header.isStickyVisible = !0,
                      b.addClass("header-appear")),
                      h = a(document).scrollTop()
                }
                ,
                f(),
                a(window).scroll(function() {
                  f()
                });
            break;
          case eltdf.body.hasClass("eltdf-sticky-header-on-scroll-down-up"):
            if (eltdf.modules.header.behaviour = "eltdf-sticky-header-on-scroll-down-up",
            0 !== eltdfPerPageVars.vars.eltdfStickyScrollAmount)
              eltdf.modules.header.stickyAppearAmount = eltdfPerPageVars.vars.eltdfStickyScrollAmount;
            else {
              var i = eltdfGlobalVars.vars.eltdfMenuAreaHeight;
              eltdf.modules.header.stickyAppearAmount = 0 !== eltdfGlobalVars.vars.eltdfStickyScrollAmount ? eltdfGlobalVars.vars.eltdfStickyScrollAmount : eltdfGlobalVars.vars.eltdfTopBarHeight + eltdfGlobalVars.vars.eltdfLogoAreaHeight + i + d
            }
            f = function() {
              eltdf.scroll < eltdf.modules.header.stickyAppearAmount ? (eltdf.modules.header.isStickyVisible = !1,
                  b.removeClass("header-appear").find(".eltdf-main-menu .second").removeClass("eltdf-drop-down-start")) : (eltdf.modules.header.isStickyVisible = !0,
                  b.addClass("header-appear"))
            }
                ,
                f(),
                a(window).scroll(function() {
                  f()
                });
            break;
          case eltdf.body.hasClass("eltdf-fixed-on-scroll"):
            eltdf.modules.header.behaviour = "eltdf-fixed-on-scroll";
            var j = function() {
              eltdf.scroll <= g ? c.removeClass("fixed") : c.addClass("fixed"),
                  eltdf.scroll > 0 && eltdf.scroll < eltdfGlobalVars.vars.eltdfTopBarHeight ? (a(".eltdf-top-bar").css("top", -eltdf.scroll + "px"),
                      a(".eltdf-page-header .eltdf-fixed-wrapper").css("top", eltdfGlobalVars.vars.eltdfTopBarHeight - eltdf.scroll + "px")) : eltdf.scroll >= eltdfGlobalVars.vars.eltdfTopBarHeight ? (a(".eltdf-top-bar").css("top", -eltdfGlobalVars.vars.eltdfTopBarHeight + "px"),
                      a(".eltdf-page-header .eltdf-fixed-wrapper").css("top", "0px")) : (a(".eltdf-top-bar").css("top", "0px"),
                      a(".eltdf-page-header .eltdf-fixed-wrapper").css("top", eltdfGlobalVars.vars.eltdfTopBarHeight + "px")),
                  eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight - (eltdf.scroll - eltdfGlobalVars.vars.eltdfTopBarHeight) / 4 >= 60 && eltdf.scroll >= eltdfGlobalVars.vars.eltdfTopBarHeight ? (a(".eltdf-header-standard .eltdf-page-header .eltdf-menu-area").css("height", eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight - (eltdf.scroll - eltdfGlobalVars.vars.eltdfTopBarHeight) / 4 + "px"),
                      a(".eltdf-header-full-screen .eltdf-page-header .eltdf-menu-area").css("height", eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight - (eltdf.scroll - eltdfGlobalVars.vars.eltdfTopBarHeight) / 4 + "px")) : eltdf.scroll < eltdfGlobalVars.vars.eltdfTopBarHeight ? (a(".eltdf-header-standard .eltdf-page-header .eltdf-menu-area").css("height", eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight),
                      a(".eltdf-header-full-screen .eltdf-page-header .eltdf-menu-area").css("height", eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight)) : eltdfGlobalVars.vars.eltdfMenuAreaHeight - eltdfGlobalVars.vars.eltdfTopBarHeight - (eltdf.scroll - eltdfGlobalVars.vars.eltdfTopBarHeight) / 4 < 60 && (a(".eltdf-header-standard .eltdf-page-header .eltdf-menu-area").css("height", "60px"),
                      a(".eltdf-header-full-screen .eltdf-page-header .eltdf-menu-area").css("height", "60px"))
            };
            j(),
                a(window).scroll(function() {
                  j()
                })
        }
      }
      function g() {
        if (eltdf.body.hasClass("eltdf-header-divided")) {
          var b = a(".eltdf-menu-area")
              , c = a(".eltdf-sticky-holder")
              , d = b.width()
              , e = c.width()
              , f = a(".eltdf-main-menu > ul > li > a")
              , g = 0
              , h = b.find(".eltdf-logo-wrapper .eltdf-normal-logo")
              , i = 0;
          b.children(".eltdf-grid").length && (d = b.children(".eltdf-grid").outerWidth()),
          c.children(".eltdf-grid").length && (e = c.children(".eltdf-grid").outerWidth()),
          f.length && (g = parseInt(f.css("padding-left"))),
          h.length && (i = h.width() / 2);
          var j = Math.round(d / 2 - g - i)
              , k = Math.round(e / 2 - g - i);
          a(".eltdf-menu-area .eltdf-position-left, .eltdf-menu-area .eltdf-position-right, .eltdf-sticky-header .eltdf-position-left, .eltdf-sticky-header .eltdf-position-right").removeAttr("style"),
              a(".eltdf-menu-area .eltdf-position-left").width(j),
              a(".eltdf-menu-area .eltdf-position-right").width(j),
              a(".eltdf-sticky-header .eltdf-position-left").width(k),
              a(".eltdf-sticky-header .eltdf-position-right").width(k),
              b.css("opacity", 1)
        }
      }
      function h() {
        var b = a(".eltdf-wrapper")
            , c = a("a.eltdf-side-menu-button-opener")
            , d = "eltdf-right-side-menu-opened";
        b.prepend('<div class="eltdf-cover"/>'),
            a("a.eltdf-side-menu-button-opener, a.eltdf-close-side-menu").on("click", function(b) {
              if (b.preventDefault(),
                  c.hasClass("opened"))
                c.removeClass("opened"),
                    eltdf.body.removeClass(d);
              else {
                c.addClass("opened"),
                    eltdf.body.addClass(d),
                    a(".eltdf-wrapper .eltdf-cover").on("click", function() {
                      eltdf.body.removeClass("eltdf-right-side-menu-opened"),
                          c.removeClass("opened")
                    });
                var e = a(window).scrollTop();
                a(window).scroll(function() {
                  Math.abs(eltdf.scroll - e) > 400 && (eltdf.body.removeClass(d),
                      c.removeClass("opened"))
                })
              }
            })
      }
      function i() {
        var b = a(".eltdf-side-menu");
        b.length && b.niceScroll({
          scrollspeed: 60,
          mousescrollstep: 40,
          cursorwidth: 0,
          cursorborder: 0,
          cursorborderradius: 0,
          cursorcolor: "transparent",
          autohidemode: !1,
          horizrailenabled: !1
        })
      }
      function j() {
        if (a("a.eltdf-fullscreen-menu-opener").length) {
          var b, c = a("a.eltdf-fullscreen-menu-opener"), d = a(".eltdf-fullscreen-menu-holder-outer"), e = !1, f = !1, g = a(".eltdf-fullscreen-above-menu-widget-holder"), h = a(".eltdf-fullscreen-below-menu-widget-holder"), i = a(".eltdf-fullscreen-menu-holder-outer nav > ul > li > a"), j = a(".eltdf-fullscreen-menu > ul li.has_sub > a"), k = a(".eltdf-fullscreen-menu ul li:not(.has_sub) a");
          d.height(eltdf.windowHeight).niceScroll({
            scrollspeed: 30,
            mousescrollstep: 20,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
          }),
              a(window).resize(function() {
                d.height(eltdf.windowHeight)
              }),
              eltdf.body.hasClass("eltdf-fade-push-text-right") ? (b = "eltdf-push-nav-right",
                  e = !0) : eltdf.body.hasClass("eltdf-fade-push-text-top") && (b = "eltdf-push-text-top",
                  f = !0),
          (e || f) && (g.length && g.children().css({
            "-webkit-animation-delay": "0ms",
            "-moz-animation-delay": "0ms",
            "animation-delay": "0ms"
          }),
              i.each(function(b) {
                a(this).css({
                  "-webkit-animation-delay": 70 * (b + 1) + "ms",
                  "-moz-animation-delay": 70 * (b + 1) + "ms",
                  "animation-delay": 70 * (b + 1) + "ms"
                })
              }),
          h.length && h.children().css({
            "-webkit-animation-delay": 70 * (i.length + 1) + "ms",
            "-moz-animation-delay": 70 * (i.length + 1) + "ms",
            "animation-delay": 70 * (i.length + 1) + "ms"
          })),
              c.on("click", function(d) {
                d.preventDefault(),
                    c.hasClass("eltdf-fm-opened") ? (c.removeClass("eltdf-fm-opened"),
                        eltdf.body.removeClass("eltdf-fullscreen-menu-opened"),
                        eltdf.body.removeClass("eltdf-fullscreen-fade-in").addClass("eltdf-fullscreen-fade-out"),
                        eltdf.body.addClass(b),
                    eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll(),
                        a("nav.eltdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                          a("nav.popup_menu").getNiceScroll().resize()
                        })) : (c.addClass("eltdf-fm-opened"),
                        eltdf.body.addClass("eltdf-fullscreen-menu-opened"),
                        eltdf.body.removeClass("eltdf-fullscreen-fade-out").addClass("eltdf-fullscreen-fade-in"),
                        eltdf.body.removeClass(b),
                    eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfDisableScroll(),
                        a(document).keyup(function(d) {
                          27 == d.keyCode && (c.removeClass("eltdf-fm-opened"),
                              eltdf.body.removeClass("eltdf-fullscreen-menu-opened"),
                              eltdf.body.removeClass("eltdf-fullscreen-fade-in").addClass("eltdf-fullscreen-fade-out"),
                              eltdf.body.addClass(b),
                          eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll(),
                              a("nav.eltdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                                a("nav.popup_menu").getNiceScroll().resize()
                              }))
                        }))
              }),
              j.on("tap click", function(b) {
                b.preventDefault();
                var c = a(this)
                    , d = c.parent()
                    , e = d.siblings(".menu-item-has-children");
                if (d.hasClass("has_sub")) {
                  var f = d.find("> ul.sub_menu");
                  f.is(":visible") ? (f.slideUp(450, "easeInOutQuint"),
                      d.removeClass("open_sub")) : (d.addClass("open_sub"),
                      0 === e.length ? f.slideDown(400, "easeInOutQuint") : (d.closest("li.menu-item").siblings().find(".menu-item").removeClass("open_sub"),
                          d.siblings().removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function() {
                            f.slideDown(400, "easeInOutQuint")
                          })))
                }
                return !1
              }),
              k.on("click", function(d) {
                if ("http://#" === a(this).attr("href") || "#" === a(this).attr("href"))
                  return !1;
                1 == d.which && (c.removeClass("eltdf-fm-opened"),
                    eltdf.body.removeClass("eltdf-fullscreen-menu-opened"),
                    eltdf.body.removeClass("eltdf-fullscreen-fade-in").addClass("eltdf-fullscreen-fade-out"),
                    eltdf.body.addClass(b),
                    a("nav.eltdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                      a("nav.popup_menu").getNiceScroll().resize()
                    }),
                    eltdf.modules.common.eltdfEnableScroll())
              })
        }
      }
      function k() {
        var b = a(".eltdf-mobile-header .eltdf-mobile-menu-opener")
            , c = a(".eltdf-mobile-header .eltdf-mobile-nav")
            , d = a(".eltdf-mobile-nav .mobile_arrow, .eltdf-mobile-nav h5, .eltdf-mobile-nav a.eltdf-mobile-no-link");
        b.length && c.length && b.on("tap click", function(a) {
          a.stopPropagation(),
              a.preventDefault(),
              c.is(":visible") ? c.slideUp(200) : c.slideDown(200)
        }),
        d.length && d.each(function() {
          a(this).on("tap click", function(b) {
            var c = a(this).nextAll("ul").first();
            if (c.length) {
              b.preventDefault(),
                  b.stopPropagation();
              var d = a(this).parent("li");
              c.is(":visible") ? (c.slideUp(200),
                  d.removeClass("eltdf-opened")) : (c.slideDown(200),
                  d.addClass("eltdf-opened"))
            }
          })
        }),
            a(".eltdf-mobile-nav a, .eltdf-mobile-logo-wrapper a").on("click tap", function(b) {
              "http://#" !== a(this).attr("href") && "#" !== a(this).attr("href") && c.slideUp(200)
            })
      }
      function l() {
        if (eltdf.body.hasClass("eltdf-sticky-up-mobile-header")) {
          var b, c = a(".eltdf-mobile-header"), d = a("#wpadminbar"), e = c.length ? c.height() : 0, f = eltdf.body.hasClass("page-template-landing-page") && a(".eltdf-slider").length ? a(".eltdf-slider").outerHeight() : 0, g = a(document).scrollTop();
          b = e + eltdfGlobalVars.vars.eltdfAddForAdminBar + f,
              a(window).scroll(function() {
                var e = a(document).scrollTop();
                e > b ? c.addClass("eltdf-animate-mobile-header") : c.removeClass("eltdf-animate-mobile-header"),
                    e > g && e > b || e < b ? (c.removeClass("mobile-header-appear"),
                        c.css("margin-bottom", 0),
                    d.length && c.find(".eltdf-mobile-header-inner").css("top", 0)) : (c.addClass("mobile-header-appear"),
                        c.css("margin-bottom", b - f)),
                    g = a(document).scrollTop()
              })
        }
      }
      function m() {
        a(".eltdf-drop-down > ul > li.narrow").each(function(b) {
          var c = eltdf.windowWidth - 16
              , d = a(this).offset().left
              , e = a(this).find(".second .inner ul").width()
              , f = 0;
          f = eltdf.body.hasClass("eltdf-boxed") ? eltdf.boxedLayoutWidth - (d - (c - eltdf.boxedLayoutWidth) / 2) : c - d;
          var g;
          a(this).find("li.sub").length > 0 && (g = f - e),
          (f < e || g < e) && (a(this).find(".second").addClass("right"),
              a(this).find(".second .inner ul").addClass("right"))
        })
      }
      function n() {
        var b = a(".eltdf-drop-down > ul > li");
        b.each(function(c) {
          if (a(b[c]).find(".second").length > 0) {
            var d = a(b[c]).find(".second");
            if (a(b[c]).hasClass("wide")) {
              a(this).hasClass("left_position") || a(this).hasClass("right_position") || d.css("left", 0);
              var e = 0;
              a(this).find(".second > .inner > ul > li").each(function() {
                var b = a(this).height();
                b > e && (e = b)
              }),
                  a(this).find(".second > .inner > ul > li").css("height", ""),
                  a(this).find(".second > .inner > ul > li").height(e);
              var f;
              a(this).hasClass("left_position") || a(this).hasClass("right_position") || (f = d.offset().left,
                  d.css("left", -f),
                  d.css("width", eltdf.windowWidth))
            }
            if (eltdf.menuDropdownHeightSet || (a(b[c]).data("original_height", d.height() + "px"),
                d.height(0)),
                navigator.userAgent.match(/(iPod|iPhone|iPad)/))
              a(b[c]).on("touchstart mouseenter", function() {
                d.css({
                  height: a(b[c]).data("original_height"),
                  overflow: "visible",
                  visibility: "visible",
                  opacity: "1"
                })
              }).on("mouseleave", function() {
                d.css({
                  height: "0px",
                  overflow: "hidden",
                  visibility: "hidden",
                  opacity: "0"
                })
              });
            else if (eltdf.body.hasClass("eltdf-dropdown-animate-height")) {
              var g = {
                interval: 0,
                over: function() {
                  d.addClass("eltdf-drop-down-start"),
                      d.css({
                        visibility: "visible",
                        height: "0px",
                        overflow: "visible"
                      }),
                      d.stop().animate({
                        height: a(b[c]).data("original_height")
                      }, 350, "easeInOutQuad")
                },
                timeout: 0,
                out: function() {
                  d.removeClass("eltdf-drop-down-start"),
                      d.stop().animate({
                        height: "0px"
                      }, 0, function() {
                        d.css({
                          overflow: "hidden",
                          visibility: "hidden"
                        })
                      })
                }
              };
              a(b[c]).hoverIntent(g)
            } else {
              var g = {
                interval: 0,
                over: function() {
                  setTimeout(function() {
                    d.addClass("eltdf-drop-down-start"),
                        d.stop().css({
                          height: a(b[c]).data("original_height")
                        })
                  }, 150)
                },
                timeout: 150,
                out: function() {
                  d.stop().css({
                    height: "0px"
                  }),
                      d.removeClass("eltdf-drop-down-start")
                }
              };
              a(b[c]).hoverIntent(g)
            }
          }
        }),
            a(".eltdf-drop-down ul li.wide ul li a").on("click", function(b) {
              if (1 == b.which) {
                var c = a(this);
                setTimeout(function() {
                  c.mouseleave()
                }, 500)
              }
            }),
            eltdf.menuDropdownHeightSet = !0
      }
      function o() {
        var b, c = a("a.eltdf-search-opener");
        if (a("html").hasClass("touch") && !0,
        c.length > 0) {
          if (eltdf.body.hasClass("eltdf-fullscreen-search")) {
            var d;
            b = a(".eltdf-fullscreen-search-close"),
                d = !0,
                function(d) {
                  var e = a(".eltdf-fullscreen-search-holder");
                  c.on("click", function(c) {
                    c.preventDefault();
                    var f = !1
                        , g = 0
                        , h = 0;
                    "yes" === a(this).data("icon-close-same-position") && (g = a(this).find(".eltdf-search-opener-wrapper").offset().top,
                        h = a(this).offset().left,
                        f = !0),
                    d && (e.hasClass("eltdf-animate") ? (eltdf.body.removeClass("eltdf-fullscreen-search-opened"),
                        eltdf.body.addClass("eltdf-search-fade-out"),
                        eltdf.body.removeClass("eltdf-search-fade-in"),
                        e.removeClass("eltdf-animate"),
                        setTimeout(function() {
                          e.find(".eltdf-search-field").val(""),
                              e.find(".eltdf-search-field").blur()
                        }, 300),
                    eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll()) : (eltdf.body.addClass("eltdf-fullscreen-search-opened"),
                        setTimeout(function() {
                          e.find(".eltdf-search-field").focus()
                        }, 900),
                        eltdf.body.removeClass("eltdf-search-fade-out"),
                        eltdf.body.addClass("eltdf-search-fade-in"),
                        e.addClass("eltdf-animate"),
                    f && b.css({
                      top: g - eltdf.scroll,
                      left: h
                    }),
                    eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfDisableScroll()),
                        b.on("click", function(a) {
                          a.preventDefault(),
                              eltdf.body.removeClass("eltdf-fullscreen-search-opened"),
                              e.removeClass("eltdf-animate"),
                              setTimeout(function() {
                                e.find(".eltdf-search-field").val(""),
                                    e.find(".eltdf-search-field").blur()
                              }, 300),
                              eltdf.body.removeClass("eltdf-search-fade-in"),
                              eltdf.body.addClass("eltdf-search-fade-out"),
                          eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll()
                        }),
                        a(document).mouseup(function(b) {
                          var c = a(".eltdf-form-holder-inner");
                          c.is(b.target) || 0 !== c.has(b.target).length || (b.preventDefault(),
                              eltdf.body.removeClass("eltdf-fullscreen-search-opened"),
                              e.removeClass("eltdf-animate"),
                              setTimeout(function() {
                                e.find(".eltdf-search-field").val(""),
                                    e.find(".eltdf-search-field").blur()
                              }, 300),
                              eltdf.body.removeClass("eltdf-search-fade-in"),
                              eltdf.body.addClass("eltdf-search-fade-out"),
                          eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll())
                        }),
                        a(document).keyup(function(a) {
                          27 == a.keyCode && (eltdf.body.removeClass("eltdf-fullscreen-search-opened"),
                              e.removeClass("eltdf-animate"),
                              setTimeout(function() {
                                e.find(".eltdf-search-field").val(""),
                                    e.find(".eltdf-search-field").blur()
                              }, 300),
                              eltdf.body.removeClass("eltdf-search-fade-in"),
                              eltdf.body.addClass("eltdf-search-fade-out"),
                          eltdf.body.hasClass("page-template-full_screen-php") || eltdf.modules.common.eltdfEnableScroll())
                        }))
                  }),
                      a(".eltdf-fullscreen-search-holder .eltdf-search-field").focus(function() {
                        a(".eltdf-fullscreen-search-holder .eltdf-field-holder .eltdf-line").css("width", "100%")
                      }),
                      a(".eltdf-fullscreen-search-holder .eltdf-search-field").blur(function() {
                        a(".eltdf-fullscreen-search-holder .eltdf-field-holder .eltdf-line").css("width", "0")
                      })
                }(d)
          }
          if (void 0 !== c.data("hover-color")) {
            var e = function(a) {
              a.data.searchOpener.css("color", a.data.color)
            }
                , f = c.css("color")
                , g = c.data("hover-color");
            c.on("mouseenter", {
              searchOpener: c,
              color: g
            }, e),
                c.on("mouseleave", {
                  searchOpener: c,
                  color: f
                }, e)
          }
        }
      }
      var p = {};
      eltdf.modules.header = p,
          p.isStickyVisible = !1,
          p.stickyAppearAmount = 0,
          p.behaviour = "",
          p.eltdfOnDocumentReady = b,
          p.eltdfOnWindowLoad = c,
          p.eltdfOnWindowResize = d,
          p.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e);
      var q = function() {
        var b = a(".eltdf-vertical-menu-area")
            , c = function() {
          d() && b.getNiceScroll().resize()
        }
            , d = function() {
          return b.hasClass(".eltdf-with-scroll")
        }
            , e = function() {
          var d = b.find(".eltdf-vertical-menu");
          !function() {
            var b = d.find("ul li.menu-item-has-children");
            b.each(function() {
              var d = a(this).find(" > .second, > ul")
                  , e = this
                  , f = a(this).find("> a");
              f.on("click tap", function(g) {
                g.preventDefault(),
                    g.stopPropagation(),
                    d.is(":visible") ? (a(e).removeClass("open"),
                        d.slideUp("fast", function() {
                          c()
                        })) : f.parent().parent().children().hasClass("open") && f.parent().parent().parent().hasClass("eltdf-vertical-menu") ? (a(this).parent().parent().children().removeClass("open"),
                        a(this).parent().parent().children().find(" > .second").slideUp("fast"),
                        a(e).addClass("open"),
                        d.slideDown("slow", function() {
                          c()
                        })) : (a(this).parents("li").hasClass("open") || (b.removeClass("open"),
                        b.find(" > .second, > ul").slideUp("fast")),
                    a(this).parent().parent().children().hasClass("open") && (a(this).parent().parent().children().removeClass("open"),
                        a(this).parent().parent().children().find(" > .second, > ul").slideUp("fast")),
                        a(e).addClass("open"),
                        d.slideDown("slow", function() {
                          c()
                        }))
              })
            })
          }()
        }
            , f = function() {
          d() && b.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
          })
        };
        return {
          init: function() {
            b.length && (e(),
                f())
          }
        }
      }
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        f()
      }
      function c() {}
      function d() {}
      function e() {}
      function f() {
        if (a(".eltdf-title.eltdf-has-parallax-background").length > 0 && 0 === a(".touch").length) {
          var b = a(".eltdf-title.eltdf-has-parallax-background")
              , c = a(".eltdf-title.eltdf-has-parallax-background.eltdf-zoom-out")
              , d = parseInt(b.data("background-width").match(/\d+/))
              , e = b.data("height")
              , f = e / 1e4 * 7
              , g = -eltdf.scroll * f;
          b.css({
            "background-position": "center " + (g + eltdfGlobalVars.vars.eltdfAddForAdminBar) + "px"
          }),
              c.css({
                "background-size": d - eltdf.scroll + "px auto"
              }),
              a(window).scroll(function() {
                g = -eltdf.scroll * f,
                    b.css({
                      "background-position": "center " + (g + eltdfGlobalVars.vars.eltdfAddForAdminBar) + "px"
                    }),
                    c.css({
                      "background-size": d - eltdf.scroll + "px auto"
                    })
              })
        }
      }
      var g = {};
      eltdf.modules.title = g,
          g.eltdfParallaxTitle = f,
          g.eltdfOnDocumentReady = b,
          g.eltdfOnWindowLoad = c,
          g.eltdfOnWindowResize = d,
          g.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e)
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        f(),
            g(),
            K().init(),
            h(),
            i(),
            j(),
            k(),
            m(),
            L().init(),
            M().init(),
            p(),
            q(),
            r(),
            s(),
            v(),
            x(),
            N().init(),
            O().init(),
            A(),
            C(),
            B(),
            E(),
            G(),
            F(),
            H(),
            I()
      }
      function c() {
        l(),
            z().init(),
            u()
      }
      function d() {}
      function e() {}
      function f() {
        var b = a(".eltdf-accordion-holder");
        b.length && b.each(function() {
          var b = a(this);
          if (b.hasClass("eltdf-accordion") && b.accordion({
            animate: "swing",
            collapsible: !0,
            active: 0,
            icons: "",
            heightStyle: "content"
          }),
              b.hasClass("eltdf-toggle")) {
            var c = a(this)
                , d = c.find(".eltdf-title-holder")
                , e = d.next();
            c.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
                d.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"),
                e.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                d.each(function() {
                  var b = a(this);
                  b.on("mouseenter mouseleave", function() {
                    b.toggleClass("ui-state-hover")
                  }),
                      b.on("click", function() {
                        b.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"),
                            b.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                      })
                })
          }
        })
      }
      function g() {
        var b, c, d, e = a(".eltdf-no-animations-on-touch"), f = !0, g = a(".eltdf-fade-in-down, .eltdf-element-from-fade, .eltdf-element-from-left, .eltdf-element-from-right, .eltdf-element-from-top, .eltdf-element-from-bottom, .eltdf-flip-in, .eltdf-x-rotate, .eltdf-z-rotate, .eltdf-y-translate, .eltdf-fade-in, .eltdf-fade-in-left-x-rotate");
        e.length && (f = !1),
        g.length > 0 && f && g.each(function() {
          var e = a(this);
          e.appear(function() {
            if (c = e.data("animation"),
                d = parseInt(e.data("animation-delay")),
            void 0 !== c && "" !== c) {
              b = c;
              var a = b + "-on";
              setTimeout(function() {
                e.addClass(a)
              }, d)
            }
          }, {
            accX: 0,
            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
          })
        })
      }
      function h() {
        var b = a(".eltdf-clients-carousel-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-cc-inner")
              , d = 4
              , e = !0
              , f = 5e3
              , g = !0
              , h = 650;
          void 0 !== b.data("number-of-items") && !1 !== b.data("number-of-items") && (d = parseInt(b.data("number-of-items"))),
          void 0 !== b.data("autoplay") && !1 !== b.data("autoplay") && (e = b.data("autoplay")),
          void 0 !== b.data("autoplay-timeout") && !1 !== b.data("autoplay-timeout") && (f = b.data("autoplay-timeout")),
          void 0 !== b.data("loop") && !1 !== b.data("loop") && (g = b.data("loop")),
          void 0 !== b.data("speed") && !1 !== b.data("speed") && (h = b.data("speed")),
          1 === d && (e = !1,
              g = !1);
          var i = 1
              , j = 2
              , k = 3;
          d < 3 && (i = d,
              j = d,
              k = d),
              c.owlCarousel({
                items: d,
                autoplay: e,
                autoplayTimeout: f,
                loop: g,
                smartSpeed: h,
                nav: !1,
                dots: !1,
                responsive: {
                  0: {
                    items: i
                  },
                  600: {
                    items: j
                  },
                  768: {
                    items: k
                  },
                  1024: {
                    items: d
                  }
                }
              }),
              c.css({
                visibility: "visible"
              })
        })
      }
      function i() {
        var b, c, d, e, f, g, h, i, j, k, l, m = a(".eltdf-countdown");
        m.length && m.each(function() {
          function m() {
            q.find(".countdown-amount").css({
              "font-size": n + "px",
              "line-height": n + "px"
            }),
                q.find(".countdown-period").css({
                  "font-size": o + "px"
                })
          }
          var n, o, p = a(this).attr("id"), q = a("#" + p);
          b = q.data("year"),
              c = q.data("month"),
              d = q.data("day"),
              e = q.data("hour"),
              f = q.data("minute"),
              g = q.data("timezone"),
              h = q.data("month-label"),
              i = q.data("day-label"),
              j = q.data("hour-label"),
              k = q.data("minute-label"),
              l = q.data("second-label"),
              n = q.data("digit-size"),
              o = q.data("label-size"),
              q.countdown({
                until: new Date(b,c - 1,d,e,f,44),
                labels: ["Years", h, "Weeks", i, j, k, l],
                format: "ODHMS",
                timezone: g,
                padZeroes: !0,
                onTick: m
              })
        })
      }
      function j() {
        var b = a(".eltdf-counter-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.find(".eltdf-counter");
          b.appear(function() {
            if (b.css("opacity", "1"),
                c.hasClass("eltdf-zero-counter")) {
              var a = parseFloat(c.text());
              c.countTo({
                from: 0,
                to: a,
                speed: 1500,
                refreshInterval: 100
              })
            } else
              c.absoluteCounter({
                speed: 2e3,
                fadeInDelay: 1e3
              })
          }, {
            accX: 0,
            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
          })
        })
      }
      function k() {
        var b = a(".eltdf-elements-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-eh-item")
              , d = ""
              , e = "";
          c.each(function() {
            var b = a(this)
                , c = ""
                , d = ""
                , f = ""
                , g = ""
                , h = ""
                , i = ""
                , j = "";
            void 0 !== b.data("item-class") && !1 !== b.data("item-class") && (c = b.data("item-class")),
            void 0 !== b.data("1280-1600") && !1 !== b.data("1280-1600") && (d = b.data("1280-1600")),
            void 0 !== b.data("1024-1280") && !1 !== b.data("1024-1280") && (f = b.data("1024-1280")),
            void 0 !== b.data("768-1024") && !1 !== b.data("768-1024") && (g = b.data("768-1024")),
            void 0 !== b.data("600-768") && !1 !== b.data("600-768") && (h = b.data("600-768")),
            void 0 !== b.data("480-600") && !1 !== b.data("480-600") && (i = b.data("480-600")),
            void 0 !== b.data("480") && !1 !== b.data("480") && (j = b.data("480")),
                b.hasClass("eltdf-ehi-animation"),
            (d.length || f.length || g.length || h.length || i.length || j.length) && (d.length && (e += "@media only screen and (min-width: 1280px) and (max-width: 1600px) {.eltdf-eh-item-content." + c + " { padding: " + d + " !important; } }"),
            f.length && (e += "@media only screen and (min-width: 1024px) and (max-width: 1280px) {.eltdf-eh-item-content." + c + " { padding: " + f + " !important; } }"),
            g.length && (e += "@media only screen and (min-width: 768px) and (max-width: 1024px) {.eltdf-eh-item-content." + c + " { padding: " + g + " !important; } }"),
            h.length && (e += "@media only screen and (min-width: 600px) and (max-width: 768px) {.eltdf-eh-item-content." + c + " { padding: " + h + " !important; } }"),
            i.length && (e += "@media only screen and (min-width: 480px) and (max-width: 600px) {.eltdf-eh-item-content." + c + " { padding: " + i + " !important; } }"),
            j.length && (e += "@media only screen and (max-width: 480px) {.eltdf-eh-item-content." + c + " { padding: " + j + " !important; } }"))
          }),
          e.length && (d = '<style type="text/css" data-type="vino_elated_shortcodes_custom_css">' + e + "</style>"),
          d.length && a("head").append(d)
        })
      }
      function l() {
        var b = a(".eltdf-frame-slider-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-fs-slides");
          c.waitForImages(function() {
            c.owlCarousel({
              loop: !0,
              smartSpeed: 400,
              nav: !1,
              dots: !0,
              center: !0,
              responsive: {
                0: {
                  items: 1,
                  margin: 0,
                  autoWidth: !1
                },
                681: {
                  items: 3,
                  margin: 36,
                  autoWidth: !0
                },
                1201: {
                  items: 5,
                  margin: 15,
                  autoWidth: !0
                },
                1281: {
                  items: 5,
                  margin: 36,
                  autoWidth: !0
                }
              }
            }),
                c.css({
                  visibility: "visible"
                })
          })
        })
      }
      function m() {
        var b = a(".eltdf-google-map");
        b.length && b.each(function() {
          var b, c = a(this);
          void 0 !== c.data("custom-map-style") && (b = c.data("custom-map-style"));
          var d;
          void 0 !== c.data("color-overlay") && !1 !== c.data("color-overlay") && (d = c.data("color-overlay"));
          var e;
          void 0 !== c.data("saturation") && !1 !== c.data("saturation") && (e = c.data("saturation"));
          var f;
          void 0 !== c.data("lightness") && !1 !== c.data("lightness") && (f = c.data("lightness"));
          var g;
          void 0 !== c.data("zoom") && !1 !== c.data("zoom") && (g = c.data("zoom"));
          var h;
          void 0 !== c.data("pin") && !1 !== c.data("pin") && (h = c.data("pin"));
          var i;
          void 0 !== c.data("height") && !1 !== c.data("height") && (i = c.data("height"));
          var j;
          void 0 !== c.data("unique-id") && !1 !== c.data("unique-id") && (j = c.data("unique-id"));
          var k;
          void 0 !== c.data("scroll-wheel") && (k = c.data("scroll-wheel"));
          var l;
          void 0 !== c.data("addresses") && !1 !== c.data("addresses") && (l = c.data("addresses")),
              n(b, d, e, f, k, g, "eltdf-map-" + j, i, h, "map_" + j, "geocoder_" + j, l)
        })
      }
      function n(a, b, c, d, e, f, g, h, i, j, k, l) {
        if ("object" == typeof google) {
          var m, n = [{
            stylers: [{
              hue: b
            }, {
              saturation: c
            }, {
              lightness: d
            }, {
              gamma: 1
            }]
          }];
          m = "yes" === a ? "eltdf-style" : google.maps.MapTypeId.ROADMAP,
              e = "yes" === e;
          var p = new google.maps.StyledMapType(n,{
            name: "Elated Google Map"
          });
          k = new google.maps.Geocoder;
          var q = new google.maps.LatLng(-34.397,150.644);
          isNaN(h) || (h += "px");
          var r = {
            zoom: f,
            scrollwheel: e,
            center: q,
            zoomControl: !0,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle.SMALL,
              position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: !1,
            scaleControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: !1,
            streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: !1,
            panControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: !1,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "eltdf-style"],
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeId: m
          };
          j = new google.maps.Map(document.getElementById(g),r),
              j.mapTypes.set("eltdf-style", p);
          var s;
          for (s = 0; s < l.length; ++s)
            o(l[s], i, j, k);
          document.getElementById(g).style.height = h
        }
      }
      function o(a, b, c, d) {
        if ("" !== a) {
          var e = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + a + "</p></div></div>"
              , f = new google.maps.InfoWindow({
            content: e
          });
          d.geocode({
            address: a
          }, function(d, e) {
            if (e === google.maps.GeocoderStatus.OK) {
              c.setCenter(d[0].geometry.location);
              var g = new google.maps.Marker({
                map: c,
                position: d[0].geometry.location,
                icon: b,
                title: a.store_title
              });
              google.maps.event.addListener(g, "click", function() {
                f.open(c, g)
              }),
                  google.maps.event.addDomListener(window, "resize", function() {
                    c.setCenter(d[0].geometry.location)
                  })
            }
          })
        }
      }
      function p() {
        var b = a(".eltdf-image-gallery");
        b.length && b.each(function() {
          var b = a(this).find(".eltdf-ig-slider")
              , c = b.data("number-of-visible-items")
              , d = b.data("autoplay")
              , e = "slide" !== b.data("animation") && b.data("animation")
              , f = "yes" === b.data("navigation")
              , g = "yes" === b.data("pagination")
              , h = c
              , i = 4
              , j = 3
              , k = 2;
          h < 3 && (i = h,
              j = h),
          h < 2 && (k = h),
              b.owlCarousel({
                autoplay: !0,
                autoplayTimeout: 1e3 * d,
                loop: !0,
                autoplayHoverPause: !0,
                smartSpeed: 600,
                animateIn: e,
                nav: f,
                dots: g,
                navText: ['<span class="eltdf-prev-icon"><span class="eltdf-icon-arrow arrow_left"></span></span>', '<span class="eltdf-next-icon"><span class="eltdf-icon-arrow arrow_right"></span></span>'],
                responsive: {
                  1201: {
                    items: h
                  },
                  769: {
                    items: i
                  },
                  601: {
                    items: j
                  },
                  481: {
                    items: k
                  },
                  0: {
                    items: 1
                  }
                }
              }),
              b.css({
                visibility: "visible"
              })
        })
      }
      function q() {
        var b = a(".eltdf-item-showcase-holder");
        b.length && b.each(function() {
          function b(b) {
            c.find(b).each(function(b) {
              var c = a(this);
              setTimeout(function() {
                c.addClass("eltdf-appeared")
              }, 150 * b)
            })
          }
          var c = a(this)
              , d = c.find(".eltdf-is-left")
              , e = c.find(".eltdf-is-right")
              , f = c.find(".eltdf-is-image");
          d.wrapAll("<div class='eltdf-is-item-holder eltdf-is-left-holder' />"),
              e.wrapAll("<div class='eltdf-is-item-holder eltdf-is-right-holder' />"),
              c.animate({
                opacity: 1
              }, 200),
              setTimeout(function() {
                c.appear(function() {
                  f.addClass("eltdf-appeared"),
                      c.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(a) {
                        eltdf.windowWidth > 1200 ? (b(".eltdf-is-left-holder .eltdf-is-item"),
                            b(".eltdf-is-right-holder .eltdf-is-item")) : b(".eltdf-is-item")
                      })
                }, {
                  accX: 0,
                  accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
                })
              }, 100)
        })
      }
      function r() {
        var b = a(".eltdf-masonry-gallery-holder")
            , c = b.children(".eltdf-mg-inner")
            , d = c.children(".eltdf-mg-grid-sizer");
        t(d.outerWidth(), c),
        b.length && (b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-mg-inner");
          c.waitForImages(function() {
            c.animate({
              opacity: 1
            }),
                c.isotope({
                  layoutMode: "packery",
                  itemSelector: ".eltdf-mg-item",
                  percentPosition: !0,
                  packery: {
                    gutter: ".eltdf-mg-grid-gutter",
                    columnWidth: ".eltdf-mg-grid-sizer"
                  }
                })
          })
        }),
            a(window).resize(function() {
              t(d.outerWidth(), c),
                  c.isotope("reloadItems")
            }))
      }
      function s() {
        var b = a(".eltdf-message-box-holder");
        b.length && b.each(function() {
          var b = a(this);
          b.find(".eltdf-mb-close").on("click", function(a) {
            a.preventDefault(),
                b.fadeOut(500)
          })
        })
      }
      function t(a, b) {
        var c = b.find(".eltdf-mg-rectangle-portrait")
            , d = b.find(".eltdf-mg-rectangle-landscape")
            , e = b.find(".eltdf-mg-square-big")
            , f = b.find(".eltdf-mg-square-small");
        c.css("height", 2 * a),
            window.innerWidth <= 680 ? d.css("height", a / 2) : d.css("height", a),
            e.css("height", 2 * a),
        window.innerWidth <= 680 && e.css("height", e.width()),
            f.css("height", a)
      }
      function u() {
        var b = a(".eltdf-parallax-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = .4 * b.data("parallax-speed");
          b.parallax("50%", c)
        })
      }
      function v() {
        var b = a(".eltdf-pie-chart-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-pc-percentage")
              , d = "#b59f00"
              , e = "#f7f7f7"
              , f = 177;
          void 0 !== c.data("size") && "" !== c.data("size") && (f = c.data("size")),
          void 0 !== c.data("bar-color") && "" !== c.data("bar-color") && (d = c.data("bar-color")),
          void 0 !== c.data("track-color") && "" !== c.data("track-color") && (e = c.data("track-color")),
              c.appear(function() {
                w(c),
                    b.css("opacity", "1"),
                    c.easyPieChart({
                      barColor: d,
                      trackColor: e,
                      scaleColor: !1,
                      lineCap: "butt",
                      lineWidth: 4,
                      animate: 1500,
                      size: f
                    })
              }, {
                accX: 0,
                accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
              })
        })
      }
      function w(a) {
        var b = a.find(".eltdf-pc-percent")
            , c = parseFloat(b.text());
        b.countTo({
          from: 0,
          to: c,
          speed: 1500,
          refreshInterval: 50
        })
      }
      function x() {
        var b = a(".eltdf-progress-bar");
        b.length && b.each(function() {
          function b() {
            y(c, e),
                d.css("width", "0%"),
                d.animate({
                  width: e + "%"
                }, 2e3)
          }
          var c = a(this)
              , d = c.find(".eltdf-pb-content")
              , e = d.data("percentage");
          c.parents(".eltdf-vss-ms-section").length ? c.parents(".eltdf-vss-ms-section").hasClass("active") && !c.hasClass("activated") && b() : c.appear(function() {
            b()
          })
        })
      }
      function y(b, c) {
        var d = parseFloat(c)
            , e = b.find(".eltdf-pb-percent");
        e.length && e.each(function() {
          var b = a(this);
          b.css("opacity", "1"),
              b.countTo({
                from: 0,
                to: d,
                speed: 2e3,
                refreshInterval: 50
              })
        })
      }
      function z() {
        function b() {
          d.length && d.each(function() {
            var b = a(this);
            f = b.offset().top,
                g = b.position().top,
                b.parents("aside.eltdf-sidebar").length ? h = b.parents("aside.eltdf-sidebar").outerHeight() : b.parents(".wpb_widgetised_column").length && (h = b.parents(".wpb_widgetised_column").outerHeight()),
                b.parents("aside.eltdf-sidebar").length ? i = b.parents("aside.eltdf-sidebar").width() : b.parents(".wpb_widgetised_column").length && (i = b.parents(".wpb_widgetised_column").width()),
                j.push({
                  object: b,
                  offset: f,
                  position: g,
                  height: h,
                  width: i
                })
          })
        }
        function c() {
          j.length && a.each(j, function(b) {
            var c = j[b].object
                , d = j[b].offset
                , f = j[b].position
                , g = j[b].height
                , h = j[b].width;
            if (eltdf.body.hasClass("eltdf-fixed-on-scroll") ? (e = 42,
            a(".eltdf-fixed-wrapper").hasClass("eltdf-fixed") && (e = a(".eltdf-fixed-wrapper.eltdf-fixed").height())) : e = a(".eltdf-page-header").height(),
            eltdf.windowWidth > 1024) {
              var i = -(f - e - 10)
                  , k = g - f - 40
                  , l = 0;
              c.parents("aside.eltdf-sidebar").length ? l = c.parents(".eltdf-content-has-sidebar").children(".eltdf-content-right-from-sidebar").length ? c.parents(".eltdf-content-has-sidebar").children(".eltdf-content-right-from-sidebar").outerHeight() : c.parents(".eltdf-content-has-sidebar").children(".eltdf-content-left-from-sidebar").outerHeight() : c.parents(".wpb_widgetised_column").length && (l = c.parents(".vc_row").height());
              var m = d - e - f - eltdfGlobalVars.vars.eltdfTopBarHeight + l;
              eltdf.scroll >= d - e && g < l ? (c.parents("aside.eltdf-sidebar").length ? c.parents("aside.eltdf-sidebar").hasClass("eltdf-sticky-sidebar-appeared") ? c.parents("aside.eltdf-sidebar.eltdf-sticky-sidebar-appeared").css({
                top: i + "px"
              }) : c.parents("aside.eltdf-sidebar").addClass("eltdf-sticky-sidebar-appeared").css({
                position: "fixed",
                top: i + "px",
                width: h,
                "margin-top": "-10px"
              }).animate({
                "margin-top": "0"
              }, 200) : c.parents(".wpb_widgetised_column").length && (c.parents(".wpb_widgetised_column").hasClass("eltdf-sticky-sidebar-appeared") ? c.parents(".wpb_widgetised_column.eltdf-sticky-sidebar-appeared").css({
                top: i + "px"
              }) : c.parents(".wpb_widgetised_column").addClass("eltdf-sticky-sidebar-appeared").css({
                position: "fixed",
                top: i + "px",
                width: h,
                "margin-top": "-10px"
              }).animate({
                "margin-top": "0"
              }, 200)),
                  eltdf.scroll + k >= m ? c.parents("aside.eltdf-sidebar").length ? c.parents("aside.eltdf-sidebar.eltdf-sticky-sidebar-appeared").css({
                    position: "absolute",
                    top: l - k + i - 40 - e + "px"
                  }) : c.parents(".wpb_widgetised_column").length && c.parents(".wpb_widgetised_column.eltdf-sticky-sidebar-appeared").css({
                    position: "absolute",
                    top: l - k + i - 40 - e + "px"
                  }) : c.parents("aside.eltdf-sidebar").length ? c.parents("aside.eltdf-sidebar.eltdf-sticky-sidebar-appeared").css({
                    position: "fixed",
                    top: i + "px"
                  }) : c.parents(".wpb_widgetised_column").length && c.parents(".wpb_widgetised_column.eltdf-sticky-sidebar-appeared").css({
                    position: "fixed",
                    top: i + "px"
                  })) : c.parents("aside.eltdf-sidebar").length ? c.parents("aside.eltdf-sidebar").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              }) : c.parents(".wpb_widgetised_column").length && c.parents(".wpb_widgetised_column").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              })
            } else
              c.parents("aside.eltdf-sidebar").length ? c.parents("aside.eltdf-sidebar").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              }) : c.parents(".wpb_widgetised_column").length && c.parents(".wpb_widgetised_column").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              })
          })
        }
        var d = a(".eltdf-widget-sticky-sidebar")
            , e = 0
            , f = 0
            , g = 0
            , h = 0
            , i = 0
            , j = [];
        return {
          init: function() {
            b(),
                c(),
                a(window).scroll(function() {
                  c()
                })
          },
          reInit: c
        }
      }
      function A() {
        var b = a(".eltdf-tabs");
        b.length && b.each(function() {
          var b = a(this);
          b.children(".eltdf-tab-container").each(function(b) {
            b += 1;
            var c = a(this)
                , d = c.attr("id")
                , e = c.parent().find(".eltdf-tabs-nav li:nth-child(" + b + ") a")
                , f = e.attr("href");
            d = "#" + d,
            d.indexOf(f) > -1 && e.attr("href", d)
          }),
              b.hasClass("eltdf-horizontal-tab") ? b.tabs() : b.hasClass("eltdf-vertical-tab") && (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),
                  b.find(".eltdf-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left"))
        })
      }
      function B() {
        var b = a(".eltdf-testimonials-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-testimonials")
              , d = 1
              , e = !0
              , f = !0
              , g = 0
              , h = 4e3
              , i = 600
              , j = !0
              , k = !0;
          void 0 !== c.data("number") && !1 !== c.data("number") && (g = parseInt(c.data("number"))),
          void 0 !== c.data("number-visible") && !1 !== c.data("number-visible") && (d = parseInt(c.data("number-visible"))),
          void 0 !== c.data("speed") && !1 !== c.data("speed") && (h = c.data("speed")),
          void 0 !== c.data("animation-speed") && !1 !== c.data("animation-speed") && (i = c.data("animation-speed")),
          void 0 !== c.data("nav-arrows") && !1 !== c.data("nav-arrows") && "no" === c.data("nav-arrows") && (j = !1),
          void 0 !== c.data("nav-dots") && !1 !== c.data("nav-dots") && "no" === c.data("nav-dots") && (k = !1);
          var l = 2
              , m = 3;
          d < 3 && (l = d,
              m = d),
          1 === g && (e = !1,
              f = !1,
              j = !1,
              k = !1),
              c.owlCarousel({
                items: d,
                loop: e,
                autoplay: f,
                autoplayTimeout: h,
                smartSpeed: i,
                margin: 0,
                nav: j,
                dots: k,
                responsive: {
                  0: {
                    items: 1,
                    margin: 0
                  },
                  769: {
                    items: l
                  },
                  1025: {
                    items: m
                  },
                  1201: {
                    items: d
                  }
                },
                navText: ['<span class="eltdf-prev-icon"><span class="eltdf-icon-arrow lnr lnr-chevron-left"></span></span>', '<span class="eltdf-next-icon"><span class="eltdf-icon-arrow lnr lnr-chevron-right"></span></span>']
              }),
              b.css({
                visibility: "visible"
              })
        })
      }
      function C() {
        var b = a(".eltdf-vertical-split-slider");
        if (b.length) {
          eltdf.body.hasClass("eltdf-vss-initialized") && (eltdf.body.removeClass("eltdf-vss-initialized"),
              a.fn.multiscroll.destroy()),
              b.height(eltdf.windowHeight).animate({
                opacity: 1
              }, 300);
          var c = "";
          eltdf.body.hasClass("eltdf-light-header") ? c = "light" : eltdf.body.hasClass("eltdf-dark-header") && (c = "dark"),
              b.multiscroll({
                scrollingSpeed: 700,
                easing: "easeInOutQuart",
                navigation: !0,
                useAnchorsOnLoad: !1,
                sectionSelector: ".eltdf-vss-ms-section",
                leftSelector: ".eltdf-vss-ms-left",
                rightSelector: ".eltdf-vss-ms-right",
                afterRender: function() {
                  D(a(".eltdf-vss-ms-left .eltdf-vss-ms-section:first-child").data("header-style"), c),
                      eltdf.body.addClass("eltdf-vss-initialized");
                  var d = a("div.wpcf7 > form");
                  d.length && d.each(function() {
                    var b = a(this);
                    b.find(".wpcf7-submit").off().on("click", function(a) {
                      a.preventDefault(),
                          wpcf7.submit(b)
                    })
                  });
                  var e = a('<div class="eltdf-vss-responsive"></div>')
                      , f = b.find(".eltdf-vss-ms-left > div")
                      , g = b.find(".eltdf-vss-ms-right > div");
                  b.after(e);
                  for (var h = 0; h < f.length; h++)
                    e.append(a(f[h]).clone(!0)),
                        e.append(a(g[f.length - 1 - h]).clone(!0));
                  a(".eltdf-vss-responsive .eltdf-google-map").length && a(".eltdf-vss-responsive .eltdf-google-map").each(function() {
                    var b = a(this);
                    b.empty();
                    var c = Math.floor(1e5 * Math.random() + 1);
                    b.attr("id", "eltdf-map-" + c),
                        b.data("unique-id", c)
                  }),
                      K().init(),
                      k(),
                      m(),
                      x(),
                      B()
                },
                onLeave: function(b, d, e) {
                  x(),
                      D(a(a(".eltdf-vss-ms-left .eltdf-vss-ms-section")[d - 1]).data("header-style"), c)
                }
              }),
              eltdf.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build(),
              a(window).resize(function() {
                eltdf.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build()
              })
        }
      }
      function D(a, b) {
        void 0 !== a && "" !== a ? eltdf.body.removeClass("eltdf-light-header eltdf-dark-header").addClass("eltdf-" + a + "-header") : "" !== b ? eltdf.body.removeClass("eltdf-light-header eltdf-dark-header").addClass("eltdf-" + b + "-header") : eltdf.body.removeClass("eltdf-light-header eltdf-dark-header")
      }
      function E() {
        var b = a(".eltdf-instagram-feed.eltdf-instagram-carousel");
        b.length && b.each(function() {
          var b, c = a(this), d = 6, e = !0;
          void 0 !== c.data("items") && !1 !== c.data("items") && (d = c.data("items")),
          1 == c.children().length && (e = !1),
              1 === d ? b = 0 : "normal" === c.data("space-between-items") ? b = 20 : "small" === c.data("space-between-items") ? b = 10 : "tiny" === c.data("space-between-items") ? b = 5 : "no" === c.data("space-between-items") && (b = 0);
          var f = d
              , g = 4
              , h = 3
              , i = 2;
          d > 5 && (f = 5),
          d < 4 && (g = d),
          d < 3 && (h = d),
          1 === d && (i = d),
              c.owlCarousel({
                autoplay: !0,
                autoplayHoverPause: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 600,
                items: d,
                margin: b,
                loop: e,
                dots: !1,
                nav: !1,
                responsive: {
                  1200: {
                    items: d
                  },
                  1024: {
                    items: f
                  },
                  769: {
                    items: g
                  },
                  601: {
                    items: h
                  },
                  0: {
                    items: i
                  }
                },
                onInitialized: function() {
                  c.css({
                    opacity: 1
                  })
                }
              })
        })
      }
      function F() {
        var b = a(".eltdf-workflow");
        b.length && b.each(function() {
          var b = a(this);
          if (b.hasClass("eltdf-workflow-animate")) {
            var c = b.find(".eltdf-workflow-item");
            b.appear(function() {
              b.addClass("eltdf-appeared"),
                  setTimeout(function() {
                    c.each(function(b) {
                      var c = a(this);
                      setTimeout(function() {
                        c.addClass("eltdf-appeared")
                      }, 350 * b)
                    })
                  }, 350)
            }, {
              accX: 0,
              accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
            })
          }
        })
      }
      function G() {
        var b = a(".eltdf-twitter-slider");
        b.length && b.each(function() {
          var b = a(this)
              , c = !0
              , d = !0
              , e = !0;
          b.owlCarousel({
            items: 1,
            loop: c,
            autoplay: d,
            autoplayTimeout: 5e3,
            smartSpeed: 600,
            nav: !0,
            dots: e,
            navText: ['<span class="eltdf-prev-icon"><span class="eltdf-icon-arrow ion-ios-arrow-thin-left"></span></span>', '<span class="eltdf-next-icon"><span class="eltdf-icon-arrow ion-ios-arrow-thin-right"></span></span>']
          }),
              b.css({
                visibility: "visible"
              })
        })
      }
      function H() {
        // craig
        return;
        var b = a(".eltdf-parallax-image");
        b.length && !eltdf.htmlEl.hasClass("touch") && (eltdf.modules.common.eltdfRequestAnimationFrame(),
            b.each(function() {
              var b = a(this)
                  , c = b.find("img")
                  , d = 0
                  , e = 0
                  , f = function() {
                var a = b.offset().top
                    , g = b.height();
                eltdf.scroll >= a - .75 * eltdf.windowHeight && eltdf.scroll <= a + g && (d = (eltdf.scroll - a + .75 * eltdf.windowHeight) / (g + .75 * eltdf.windowHeight),
                    e = -100 * d * 1 * c.offset().top / eltdf.scroll,
                    c.css("transform", "translate3d(0," + e + "%,0)")),
                    requestNextAnimationFrame(f)
              };
              f()
            }))
      }
      function I() {
        var b = a(".eltdf-item-catalogue");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.find(".eltdf-item")
              , d = function() {
            if (eltdf.windowWidth > 1024 && !eltdf.htmlEl.hasClass("touch")) {
              var d = 0;
              c.each(function(b) {
                var e = a(this)
                    , f = e.find(".eltdf-item-image")
                    , g = Math.round(f.height());
                b < c.length - 1 ? d += g / 2 : d += g,
                    e.css("top", -b * g / 2)
              }),
                  b.css("height", d)
            } else
              c.css("top", "0px"),
                  b.css("height", "auto")
          };
          if (b.hasClass("eltdf-loading-animation-yes") && !eltdf.htmlEl.hasClass("touch") && c.each(function(b) {
            var c = a(this)
                , d = c.height() / 2;
            c.appear(function() {
              c.addClass("eltdf-loading"),
                  setTimeout(function() {
                    c.addClass("eltdf-loaded")
                  }, 1200)
            }, {
              accX: 0,
              accY: d
            })
          }),
              b.hasClass("eltdf-lightbox-behavior")) {
            var e = b.find("a[data-rel^='eltdfLightbox']")
                , f = "eltdf-item-catalogue-lightbox-opened";
            if (!a("#eltdf-item-catalogue-lightbox-frame").length) {
              eltdf.body.append('<div id="eltdf-item-catalogue-lightbox-frame">\t\t\t\t\t\t\t\t\t\t\t<div id="eltdf-item-catalogue-lightbox-frame-inner"></div>\t\t\t\t\t\t\t\t\t\t\t<div id="eltdf-item-catalogue-overlay"></div>\t\t\t\t\t\t\t\t\t\t\t</div>');
              var g = a("#eltdf-item-catalogue-lightbox-frame")
                  , h = a("#eltdf-item-catalogue-lightbox-frame-inner")
                  , i = a("#eltdf-item-catalogue-overlay")
            }
            e.on("click", function(b) {
              if (!eltdf.body.hasClass(f)) {
                var c = a(this)
                    , d = c.closest(".eltdf-item").find(".eltdf-item-image")
                    , e = c.attr("href")
                    , i = a(e).clone();
                b.preventDefault(),
                    d.addClass("eltdf-active"),
                    h.append(i),
                    g.fadeIn(400, "easeInOutQuart", function() {
                      eltdf.body.addClass(f),
                          K().init()
                    })
              }
            }),
                i.on("click", function() {
                  eltdf.body.hasClass(f) && (b.find(".eltdf-active").removeClass("eltdf-active"),
                      g.stop().fadeOut(100, "easeInOutQuint", function() {
                        h.empty(),
                            eltdf.body.removeClass(f)
                      }))
                })
          }
          b.waitForImages(function() {
            b.css("visibility", "visible"),
                d(),
                a(window).resize(function() {
                  d()
                })
          })
        })
      }
      var J = {};
      eltdf.modules.shortcodes = J,
          J.eltdfOnDocumentReady = b,
          J.eltdfOnWindowLoad = c,
          J.eltdfOnWindowResize = d,
          J.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e);
      var K = eltdf.modules.shortcodes.eltdfButton = function() {
        var b = a(".eltdf-btn")
            , c = function(a) {
          if (void 0 !== a.data("hover-color")) {
            var b = function(a) {
              a.data.button.css("color", a.data.color)
            }
                , c = a.css("color")
                , d = a.data("hover-color");
            a.on("mouseenter", {
              button: a,
              color: d
            }, b),
                a.on("mouseleave", {
                  button: a,
                  color: c
                }, b)
          }
        }
            , d = function(a) {
          if (void 0 !== a.data("hover-bg-color")) {
            var b = function(a) {
              a.data.button.css("background-color", a.data.color)
            }
                , c = a.css("background-color")
                , d = a.data("hover-bg-color");
            a.on("mouseenter", {
              button: a,
              color: d
            }, b),
                a.on("mouseleave", {
                  button: a,
                  color: c
                }, b)
          }
        }
            , e = function(a) {
          if (void 0 !== a.data("hover-border-color")) {
            var b = function(a) {
              a.data.button.css("border-color", a.data.color)
            }
                , c = a.css("borderTopColor")
                , d = a.data("hover-border-color");
            a.on("mouseenter", {
              button: a,
              color: d
            }, b),
                a.on("mouseleave", {
                  button: a,
                  color: c
                }, b)
          }
        };
        return {
          init: function() {
            b.length && b.each(function() {
              c(a(this)),
                  d(a(this)),
                  e(a(this))
            })
          }
        }
      }
          , L = eltdf.modules.shortcodes.eltdfIcon = function() {
        var b = a(".eltdf-icon-shortcode")
            , c = function(a) {
          a.hasClass("eltdf-icon-animation") && a.appear(function() {
            a.parent(".eltdf-icon-animation-holder").addClass("eltdf-icon-animation-show")
          }, {
            accX: 0,
            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
          })
        }
            , d = function(a) {
          if (void 0 !== a.data("hover-color")) {
            var b = function(a) {
              a.data.icon.css("color", a.data.color)
            }
                , c = a.find(".eltdf-icon-element")
                , d = a.data("hover-color")
                , e = c.css("color");
            "" !== d && (a.on("mouseenter", {
              icon: c,
              color: d
            }, b),
                a.on("mouseleave", {
                  icon: c,
                  color: e
                }, b))
          }
        }
            , e = function(a) {
          if (void 0 !== a.data("hover-background-color")) {
            var b = function(a) {
              a.data.icon.css("background-color", a.data.color)
            }
                , c = a.data("hover-background-color")
                , d = a.css("background-color");
            "" !== c && (a.on("mouseenter", {
              icon: a,
              color: c
            }, b),
                a.on("mouseleave", {
                  icon: a,
                  color: d
                }, b))
          }
        }
            , f = function(a) {
          if (void 0 !== a.data("hover-border-color")) {
            var b = function(a) {
              a.data.icon.css("border-color", a.data.color)
            }
                , c = a.data("hover-border-color")
                , d = a.css("border-color");
            "" !== c && (a.on("mouseenter", {
              icon: a,
              color: c
            }, b),
                a.on("mouseleave", {
                  icon: a,
                  color: d
                }, b))
          }
        };
        return {
          init: function() {
            b.length && b.each(function() {
              c(a(this)),
                  d(a(this)),
                  e(a(this)),
                  f(a(this))
            })
          }
        }
      }
          , M = eltdf.modules.shortcodes.eltdfInitIconList = function() {
        var b = a(".eltdf-animate-list")
            , c = function(a) {
          setTimeout(function() {
            a.appear(function() {
              a.addClass("eltdf-appeared")
            }, {
              accX: 0,
              accY: eltdfGlobalVars.vars.eltdfElementAppearAmount
            })
          }, 30)
        };
        return {
          init: function() {
            b.length && b.each(function() {
              c(a(this))
            })
          }
        }
      }
          , N = eltdf.modules.shortcodes.eltdfIconWidget = function() {
        var b = a(".eltdf-icon-widget-holder")
            , c = function(a) {
          if (void 0 !== a.data("icon-hover-color")) {
            var b = function(a) {
              a.data.icon.css("color", a.data.iColor)
            }
                , c = a
                , d = ""
                , e = "";
            void 0 !== a.data("icon-color") && (d = a.data("icon-color")),
            void 0 !== a.data("icon-hover-color") && (e = a.data("icon-hover-color")),
            "" !== e && (a.on("mouseenter", {
              icon: c,
              iColor: e
            }, b),
                a.on("mouseleave", {
                  icon: c,
                  iColor: d
                }, b))
          }
        };
        return {
          init: function() {
            b.length && b.each(function() {
              c(a(this))
            })
          }
        }
      }
          , O = eltdf.modules.shortcodes.eltdfSocialIconWidget = function() {
        var b = a(".eltdf-social-icon-widget-holder")
            , c = function(a) {
          if (void 0 !== a.data("hover-color")) {
            var b = function(a) {
              a.data.icon.css("color", a.data.color)
            }
                , c = a
                , d = a.data("hover-color")
                , e = c.css("color");
            void 0 !== a.data("original-color") && (e = a.data("original-color")),
            "" !== d && (a.on("mouseenter", {
              icon: c,
              color: d
            }, b),
                a.on("mouseleave", {
                  icon: c,
                  color: e
                }, b))
          }
        };
        return {
          init: function() {
            b.length && b.each(function() {
              c(a(this))
            })
          }
        }
      }
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        g(),
            h(),
            i(),
            j(),
            k(),
            l()
      }
      function c() {
        f()
      }
      function d() {
        h(),
            i()
      }
      function e() {}
      function f() {
        var b = a(".eltdf-blog-list-holder");
        b.length && b.each(function() {
          a(this).children(".eltdf-bli-inner").children("article").each(function(b) {
            var c = a(this);
            c.appear(function() {
              c.addClass("eltdf-item-show"),
                  setTimeout(function() {
                    c.addClass("eltdf-item-shown")
                  }, 1e3)
            }, {
              accX: 0,
              accY: 0
            })
          })
        })
      }
      function g() {
        a("audio.eltdf-blog-audio").mediaelementplayer({
          audioWidth: "100%"
        })
      }
      function h() {
        if (a(".eltdf-blog-holder.eltdf-blog-type-masonry").length) {
          var b = a(".eltdf-blog-holder.eltdf-blog-type-masonry");
          b.waitForImages(function() {
            b.isotope({
              itemSelector: "article",
              resizable: !1,
              masonry: {
                columnWidth: ".eltdf-blog-masonry-grid-sizer",
                gutter: ".eltdf-blog-masonry-grid-gutter"
              }
            }),
                b.css("opacity", 1)
          })
        }
      }
      function i() {
        if (a(".eltdf-blog-list-holder.eltdf-masonry").length) {
          var b = a(".eltdf-blog-list-holder.eltdf-masonry")
              , c = b.children(".eltdf-blog-list");
          c.waitForImages(function() {
            c.isotope({
              itemSelector: ".eltdf-bli",
              resizable: !1,
              masonry: {
                columnWidth: ".eltdf-blog-masonry-grid-sizer",
                gutter: ".eltdf-blog-masonry-grid-gutter"
              }
            }),
                c.css("opacity", 1)
          })
        }
      }
      function j() {
        if (a(".eltdf-blog-holder.eltdf-blog-type-masonry").length) {
          var b = a(".eltdf-blog-holder.eltdf-blog-type-masonry");
          if (b.hasClass("eltdf-masonry-pagination-load-more")) {
            var c = 1;
            a(".eltdf-blog-load-more-button a").on("click", function(d) {
              d.preventDefault();
              var e = a(this)
                  , f = e.attr("href")
                  , g = ".eltdf-blog-load-more-button a"
                  , h = a(".eltdf-bli-loading")
                  , i = a(g).attr("href");
              e.hide(),
                  h.show(),
                  a.get(f + "", function(d) {
                    var f = a(".eltdf-masonry-pagination-load-more", d).wrapInner("").html();
                    i = a(g, d).attr("href"),
                        b.append(f).isotope("reloadItems").isotope({
                          sortBy: "original-order"
                        }),
                        eltdf.modules.blog.eltdfInitAudioPlayer(),
                        eltdf.modules.common.eltdfOwlSlider(),
                        eltdf.modules.common.eltdfFluidVideo(),
                        setTimeout(function() {
                          a(".eltdf-masonry-pagination-load-more").isotope("layout"),
                              e.show(),
                              h.hide()
                        }, 600),
                        e.parent().data("rel") > c ? e.attr("href", i) : e.parent().remove()
                  }),
                  c++
            })
          }
        }
      }
      function k() {
        var b = a(".eltdf-blog-holder.eltdf-blog-load-more:not(.eltdf-blog-type-masonry)");
        b.length && b.each(function() {
          var b, c, d = a(this), e = d.find(".eltdf-load-more-ajax-pagination .eltdf-btn");
          c = d.data("max-pages"),
              e.on("click", function(f) {
                f.preventDefault(),
                    f.stopPropagation();
                var h = eltdf.modules.common.getLoadMoreData(d);
                if ((b = h.nextPage) <= c) {
                  var i = eltdf.modules.common.setLoadMoreAjaxData(h, "vino_elated_blog_load_more");
                  a.ajax({
                    type: "POST",
                    data: i,
                    url: eltdfAjaxUrl,
                    success: function(c) {
                      b++,
                          d.data("next-page", b);
                      var e = a.parseJSON(c)
                          , f = e.html;
                      d.waitForImages(function() {
                        d.find("article:last").after(f),
                            setTimeout(function() {
                              g(),
                                  eltdf.modules.common.eltdfOwlSlider(),
                                  eltdf.modules.common.eltdfFluidVideo()
                            }, 400)
                      })
                    }
                  })
                }
                b === c && e.hide()
              })
        })
      }
      function l() {
        var b = a(".eltdf-blog-list-holder");
        b.length && b.each(function() {
          var b, c, d = a(this), e = d.find(".eltdf-bli-load-more .eltdf-btn");
          c = d.data("max-num-pages"),
              e.on("click", function(g) {
                g.preventDefault(),
                    g.stopPropagation();
                var h = eltdf.modules.common.getLoadMoreData(d)
                    , i = d.find(".eltdf-bli-loading");
                if ((b = h.nextPage) <= c) {
                  i.addClass("eltdf-showing"),
                      e.hide();
                  var j = eltdf.modules.common.setLoadMoreAjaxData(h, "vino_elated_blog_shortcode_load_more");
                  a.ajax({
                    type: "POST",
                    data: j,
                    url: eltdfAjaxUrl,
                    success: function(c) {
                      b++,
                          d.data("next-page", b);
                      var g = a.parseJSON(c)
                          , h = g.html;
                      d.waitForImages(function() {
                        d.hasClass("eltdf-masonry") ? d.find(".eltdf-blog-list").append(h).isotope("reloadItems").isotope({
                          sortBy: "original-order"
                        }) : (d.find(".eltdf-bli:last").after(h),
                            f()),
                            i.removeClass("eltdf-showing"),
                            e.show(),
                            setTimeout(function() {
                              d.hasClass("eltdf-masonry") && (d.find(".eltdf-blog-list").isotope("layout"),
                                  f())
                            }, 600)
                      })
                    }
                  })
                }
                b === c && e.parent().parent().hide()
              })
        })
      }
      var m = {};
      eltdf.modules.blog = m,
          m.eltdfInitAudioPlayer = g,
          m.eltdfInitBlogMasonry = h,
          m.eltdfInitShortcodeBlogMasonry = i,
          m.eltdfInitBlogMasonryLoadMore = j,
          m.eltdfInitBlogLoadMore = k,
          m.eltdfInitBlogShortcodeLoadMore = l,
          m.eltdfOnDocumentReady = b,
          m.eltdfOnWindowLoad = c,
          m.eltdfOnWindowResize = d,
          m.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e)
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        h(),
            i(),
            k(),
            m()
      }
      function c() {
        f(),
            g(),
            l(),
            o().init()
      }
      function d() {
        h()
      }
      function e() {
        l()
      }
      function f() {
        var b = a(".eltdf-portfolio-list-holder.eltdf-pl-has-animation");
        a("html").hasClass("touch") || b.length && b.each(function() {
          var b = a(this).children(".eltdf-pl-inner")
              , c = b.children("article")
              , d = 0
              , e = 0
              , f = c.first().height() / 2;
          c.each(function() {
            var b = a(this);
            b.offset().top == c.first().offset().top && d++,
                setTimeout(function() {
                  b.appear(function() {
                    e == d && (e = 0),
                        setTimeout(function() {
                          b.addClass("eltdf-item-show"),
                              setTimeout(function() {
                                b.addClass("eltdf-item-shown")
                              }, 850)
                        }, 250 * e),
                        e++
                  }, {
                    accX: 0,
                    accY: f
                  })
                }, 20)
          })
        })
      }
      function g() {
        var b = a(".eltdf-portfolio-list-holder.eltdf-hover-direction-active");
        b.length && b.each(function() {
          a(this).find("article").hoverdir({
            hoverElem: ".eltdf-pli-text-holder",
            speed: 330,
            hoverDelay: 35,
            easing: "ease"
          })
        })
      }
      function h() {
        var b = a(".eltdf-portfolio-list-holder.eltdf-pl-masonry");
        b.length && b.each(function() {
          var b = a(this).children(".eltdf-pl-inner");
          b.waitForImages(function() {
            b.isotope({
              layoutMode: "packery",
              itemSelector: "article",
              percentPosition: !0,
              packery: {
                gutter: ".eltdf-pl-grid-gutter",
                columnWidth: ".eltdf-pl-grid-sizer"
              }
            }),
                b.css("opacity", "1")
          })
        })
      }
      function i() {
        var b = a(".eltdf-portfolio-list-holder .eltdf-pl-filter-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.closest(".eltdf-portfolio-list-holder")
              , d = c.find(".eltdf-pl-inner")
              , e = !!c.hasClass("eltdf-pl-has-load-more");
          b.find(".eltdf-pl-filter:first").addClass("eltdf-pl-current"),
              b.find(".eltdf-pl-filter").on("click", function() {
                var f = a(this)
                    , g = f.attr("data-filter")
                    , h = g.length ? g.substring(1) : ""
                    , i = !!d.children().hasClass(h);
                a(".eltdf-pl-current").data("filter");
                f.parents(".eltdf-portfolio-list-holder").removeClass("eltdf-pl-has-animation"),
                    f.parent().children(".eltdf-pl-filter").removeClass("eltdf-pl-current"),
                    f.addClass("eltdf-pl-current"),
                    a(".eltdf-pl-item").css("visibility", "visible"),
                    e && !i ? j(c, g, h) : b.parent().children(".eltdf-pl-inner").isotope({
                      filter: g
                    })
              })
        })
      }
      function j(b, c, d) {
        var e = b
            , f = e.find(".eltdf-pl-inner")
            , g = c
            , h = d
            , i = 0;
        void 0 !== e.data("max-num-pages") && !1 !== e.data("max-num-pages") && (i = e.data("max-num-pages"));
        var k = eltdf.modules.common.getLoadMoreData(e)
            , l = k.nextPage
            , m = eltdf.modules.common.setLoadMoreAjaxData(k, "eltd_core_portfolio_ajax_load_more")
            , n = e.find(".eltdf-pl-loading");
        l <= i && (n.addClass("eltdf-showing eltdf-filter-trigger"),
            f.css("opacity", "0"),
            a.ajax({
              type: "POST",
              data: m,
              url: eltdfAjaxUrl,
              success: function(b) {
                l++,
                    e.data("next-page", l);
                var c = a.parseJSON(b)
                    , d = c.html;
                e.waitForImages(function() {
                  f.append(d).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                  }),
                      !f.children().hasClass(h) ? (n.removeClass("eltdf-showing eltdf-filter-trigger"),
                          j(e, g, h)) : setTimeout(function() {
                        f.isotope("layout").isotope({
                          filter: g
                        }),
                            n.removeClass("eltdf-showing eltdf-filter-trigger"),
                            setTimeout(function() {
                              f.css("opacity", "1")
                            }, 150)
                      }, 400)
                })
              }
            }))
      }
      function k() {
        var b = a(".eltdf-portfolio-list-holder.eltdf-pl-has-load-more");
        b.length && b.each(function() {
          var b, c, d = a(this), e = d.find(".eltdf-pl-inner"), g = d.find(".eltdf-pl-load-more a");
          void 0 !== d.data("max-num-pages") && !1 !== d.data("max-num-pages") && (c = d.data("max-num-pages")),
              g.on("click", function(h) {
                h.preventDefault(),
                    h.stopPropagation();
                var i = eltdf.modules.common.getLoadMoreData(d)
                    , j = d.find(".eltdf-pl-loading");
                if ((b = i.nextPage) <= c) {
                  g.fadeOut(0),
                      j.addClass("eltdf-showing");
                  var k = eltdf.modules.common.setLoadMoreAjaxData(i, "eltd_core_portfolio_ajax_load_more");
                  a.ajax({
                    type: "POST",
                    data: k,
                    url: eltdfAjaxUrl,
                    success: function(c) {
                      b++,
                          d.data("next-page", b);
                      var h = a.parseJSON(c)
                          , i = h.html;
                      d.waitForImages(function() {
                        if (d.hasClass("eltdf-pl-masonry")) {
                          e.append(i).isotope("reloadItems").isotope({
                            sortBy: "original-order"
                          }),
                              g.fadeIn(300),
                              j.removeClass("eltdf-showing"),
                              setTimeout(function() {
                                e.isotope("layout"),
                                    f()
                              }, 400);
                          var b = a(".eltdf-pl-current").data("filter");
                          d.find(".eltdf-pl-item").css("visibility", "hidden"),
                              d.find(".eltdf-pl-item" + b).css("visibility", "visible")
                        } else
                          g.fadeIn(300),
                              j.removeClass("eltdf-showing"),
                              e.append(i),
                              f()
                      })
                    }
                  })
                }
                b === c && (g.stop().fadeOut(),
                    g.parents(".eltdf-pl-load-more-holder").hide())
              })
        })
      }
      function l() {
        var b = a(".eltdf-portfolio-list-holder.eltdf-pl-has-infinite-scroll");
        b.length && !b.hasClass("eltdf-pl-has-load-more") && b.each(function() {
          var b = a(this)
              , c = b.find(".eltdf-pl-inner")
              , d = 0
              , e = 0
              , g = 0
              , h = b.offset().top;
          if (void 0 !== b.data("max-num-pages") && !1 !== b.data("max-num-pages") && (e = b.data("max-num-pages")),
          eltdf.scroll >= h + g - eltdfGlobalVars.vars.eltdfAddForAdminBar && !c.hasClass("eltdf-pl-inifite-scroll-start")) {
            c.addClass("eltdf-pl-inifite-scroll-start");
            var i = eltdf.modules.common.getLoadMoreData(b);
            if ((d = i.nextPage) <= e) {
              var j = eltdf.modules.common.setLoadMoreAjaxData(i, "eltd_core_portfolio_ajax_load_more");
              a.ajax({
                type: "POST",
                data: j,
                url: eltdfAjaxUrl,
                success: function(e) {
                  d++,
                      b.data("next-page", d),
                      g = .7 * c.outerHeight();
                  var h = a.parseJSON(e)
                      , i = h.html;
                  b.waitForImages(function() {
                    c.append(i).isotope("reloadItems").isotope({
                      sortBy: "original-order"
                    }),
                        setTimeout(function() {
                          c.isotope("layout"),
                              c.removeClass("eltdf-pl-inifite-scroll-start"),
                              f()
                        }, 400)
                  })
                }
              })
            }
          }
        })
      }
      function m() {
        var b = a(".eltdf-portfolio-slider-holder");
        b.length && b.each(function() {
          var b, c = a(this), d = c.children(".eltdf-portfolio-list-holder"), e = d.children(".eltdf-pl-inner"), f = 4, g = 0, h = 5e3, i = !0, j = !1, k = !1, l = !0, m = !0, n = 0;
          void 0 !== d.data("number-of-columns") && !1 !== d.data("number-of-columns") && (f = d.data("number-of-columns")),
          void 0 !== d.data("space-between-items") && !1 !== d.data("space-between-items") && (b = d.data("space-between-items"),
              "large" === b ? (g = 72,
              eltdf.windowWidth < 1025 && (g = 30)) : g = "normal" === b ? 30 : "small" === b ? 20 : "tiny" === b ? 10 : 0),
          void 0 !== d.data("slider-speed") && !1 !== d.data("slider-speed") && (h = d.data("slider-speed")),
          void 0 !== d.data("loop") && !1 !== d.data("loop") && "no" === d.data("loop") && (i = !1),
          void 0 !== d.data("enable-variable-width") && !1 !== d.data("enable-variable-width") && "yes" === d.data("enable-variable-width") && (j = !0),
          void 0 !== d.data("padding") && !1 !== d.data("padding") && "yes" === d.data("padding") && (k = !0),
          void 0 !== d.data("navigation") && !1 !== d.data("navigation") && "no" === d.data("navigation") && (l = !1),
          void 0 !== d.data("pagination") && !1 !== d.data("pagination") && "no" === d.data("pagination") && (m = !1),
          k && (n = .1315789473684211 * c.outerWidth());
          var o = 1
              , p = 2
              , q = 3;
          f < 3 && (o = f,
              p = f,
              q = f),
              e.owlCarousel({
                items: f,
                margin: g,
                loop: i,
                autoWidth: j,
                autoplay: !0,
                autoplayTimeout: h,
                autoplayHoverPause: !0,
                smartSpeed: 800,
                stagePadding: n,
                nav: l,
                navText: ['<span class="eltdf-prev-icon"><span class="arrow_left"></span></span>', '<span class="eltdf-next-icon"><span class="arrow_right"></span></span>'],
                dots: m,
                responsive: {
                  0: {
                    items: o,
                    autoWidth: !1,
                    stagePadding: 0
                  },
                  600: {
                    items: p
                  },
                  768: {
                    items: q,
                    autoWidth: j,
                    stagePadding: n
                  },
                  1024: {
                    items: f
                  }
                }
              }),
              c.css("opacity", "1")
        })
      }
      var n = {};
      eltdf.modules.portfolio = n,
          n.eltdfOnDocumentReady = b,
          n.eltdfOnWindowLoad = c,
          n.eltdfOnWindowResize = d,
          n.eltdfOnWindowScroll = e,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d),
          a(window).scroll(e);
      var o = function() {
        var b = a(".eltdf-follow-portfolio-info .small-images.eltdf-portfolio-single-holder .eltdf-portfolio-info-holder, .eltdf-follow-portfolio-info .small-slider.eltdf-portfolio-single-holder .eltdf-portfolio-info-holder");
        if (b.length)
          var c = b.parent()
              , d = c.offset().top
              , e = c.height()
              , f = a(".eltdf-portfolio-media")
              , g = f.height()
              , h = a(".header-appear, .eltdf-fixed-wrapper")
              , i = h.length ? h.height() : 0;
        var j = function() {
          if (b.length && g > e && eltdf.scroll > d) {
            var a = eltdf.scroll - d + eltdfGlobalVars.vars.eltdfAddForAdminBar + i + 20;
            a + e > g && (a = g - e),
                b.animate({
                  marginTop: a
                })
          }
        }
            , k = function() {
          b.length && g > e && (eltdf.scroll > d ? eltdf.scroll + i + eltdfGlobalVars.vars.eltdfAddForAdminBar + e + 70 < d + g ? (a(".header-appear, .eltdf-fixed-wrapper").length && (i = a(".header-appear, .eltdf-fixed-wrapper").height()),
              b.stop().animate({
                marginTop: eltdf.scroll - d + eltdfGlobalVars.vars.eltdfAddForAdminBar + i + 20
              }),
              i = 0) : b.stop().animate({
            marginTop: g - e
          }) : b.stop().animate({
            marginTop: 0
          }))
        };
        return {
          init: function() {
            j(),
                a(window).scroll(function() {
                  k()
                })
          }
        }
      }
    }(jQuery),
    function(a) {
      "use strict";
      function b() {
        i(),
            j(),
            f(),
            h(),
            l()
      }
      function c() {
        g().init(),
            e(),
            k()
      }
      function d() {
        k()
      }
      function e() {
        a(".add_to_cart_button").on("click", function() {
          a(this).text(eltdfGlobalVars.vars.eltdAddingToCart)
        })
      }
      function f() {
        var b = a("nav.woocommerce-pagination");
        b.length && b.find("> ul > li").each(function() {
          var b = a(this);
          b.children("a").hasClass("prev") && b.addClass("eltdf-prev-arrow"),
          b.children("a").hasClass("next") && b.addClass("eltdf-next-arrow")
        })
      }
      function g() {
        function b() {
          d.length && d.each(function() {
            var b = a(this);
            f = b.offset().top,
                g = b.position().top,
                h = b.children(".summary").outerHeight(),
                i = b.width(),
                j.push({
                  object: b,
                  offset: f,
                  position: g,
                  height: h,
                  width: i
                })
          })
        }
        function c() {
          j.length && eltdf.body.hasClass("eltdf-woo-sticky-holder-enabled") && a.each(j, function(b) {
            var c = j[b].object
                , d = j[b].offset
                , f = j[b].position
                , g = j[b].height
                , h = j[b].width;
            if (eltdf.body.hasClass("eltdf-fixed-on-scroll") ? (e = 80,
            a(".eltdf-fixed-wrapper").hasClass("eltdf-fixed") && (e = a(".eltdf-fixed-wrapper.eltdf-fixed").height())) : e = a(".eltdf-page-header").height(),
            eltdf.windowWidth > 1024) {
              var i = -(f - e - eltdfGlobalVars.vars.eltdfAddForAdminBar - 10)
                  , k = g - f
                  , l = parseInt(a(".eltdf-single-product-summary").css("margin-top"))
                  , m = c.parent().outerHeight() - 10 - l
                  , n = d - e - f - eltdfGlobalVars.vars.eltdfTopBarHeight + m;
              eltdf.scroll >= d - e && g < m ? (c.children(".summary").hasClass("eltdf-sticky-sidebar-appeared") ? c.children(".summary.eltdf-sticky-sidebar-appeared").css({
                top: i + "px"
              }) : c.children(".summary").addClass("eltdf-sticky-sidebar-appeared").css({
                position: "fixed",
                top: i + "px",
                width: h,
                "margin-top": "-10px"
              }).animate({
                "margin-top": "0"
              }, 200),
                  eltdf.scroll + k >= n ? c.children(".summary.eltdf-sticky-sidebar-appeared").css({
                    position: "absolute",
                    top: m - k + i - e + "px"
                  }) : c.children(".summary.eltdf-sticky-sidebar-appeared").css({
                    position: "fixed",
                    top: i + "px"
                  })) : c.children(".summary").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              })
            } else
              c.children(".summary").removeClass("eltdf-sticky-sidebar-appeared").css({
                position: "relative",
                top: "0",
                width: "auto"
              })
          })
        }
        var d = a(".eltdf-single-product-summary")
            , e = 0
            , f = 0
            , g = 0
            , h = 0
            , i = 0
            , j = [];
        return {
          init: function() {
            b(),
                c(),
                a(window).scroll(function() {
                  c()
                })
          },
          reInit: c
        }
      }
      function h() {
        var b = a(".woocommerce-tabs ul.tabs>li a");
        b.length && b.on("click", function() {
          a(this).parents(".summary").hasClass("eltdf-sticky-sidebar-appeared") ? (a(this).parents(".summary").removeClass("eltdf-sticky-sidebar-appeared").css({
            position: "relative",
            top: "0",
            width: "auto"
          }),
              setTimeout(function() {
                g().init()
              }, 100)) : setTimeout(function() {
            g().init()
          }, 100)
        })
      }
      function i() {
        a(document).on("click", ".eltdf-quantity-minus, .eltdf-quantity-plus", function(b) {
          b.stopPropagation();
          var c, d = a(this), e = d.siblings(".eltdf-quantity-input"), f = parseFloat(e.data("step")), g = parseFloat(e.data("max")), h = !1, i = parseFloat(e.val());
          d.hasClass("eltdf-quantity-minus") && (h = !0),
              h ? (c = i - f,
                  c >= 1 ? e.val(c) : e.val(0)) : (c = i + f,
                  void 0 === g ? e.val(c) : c >= g ? e.val(g) : e.val(c)),
              e.trigger("change")
        })
      }
      function j() {
        var b = a(".woocommerce-ordering .orderby");
        b.length && b.select2({
          minimumResultsForSearch: 1 / 0
        });
        var c = a("#calc_shipping_country");
        c.length && c.select2();
        var d = a(".cart-collaterals .shipping select#calc_shipping_state");
        d.length && d.select2()
      }
      function k() {
        var b = a(".eltdf-pl-holder.eltdf-masonry-layout .eltdf-pl-outer");
        b.length && b.each(function() {
          var b = a(this);
          b.waitForImages(function() {
            b.isotope({
              itemSelector: ".eltdf-pli",
              resizable: !1,
              masonry: {
                columnWidth: ".eltdf-pl-sizer",
                gutter: ".eltdf-pl-gutter"
              }
            }),
                b.isotope("layout").css("opacity", 1)
          })
        })
      }
      function l() {
        var b = a(".eltdf-plc-holder");
        b.length && b.each(function() {
          var b = a(this)
              , c = b.children(".eltdf-plc-outer")
              , d = "" !== b.data("number-of-visible-items") ? parseInt(b.data("number-of-visible-items")) : 3
              , e = "yes" === b.data("autoplay")
              , f = "" !== b.data("autoplay-timeout") ? parseInt(b.data("autoplay-timeout")) : 5e3
              , g = "yes" === b.data("loop")
              , h = "" !== b.data("speed") ? parseInt(b.data("speed")) : 650
              , i = "yes" === b.data("navigation")
              , j = "yes" === b.data("pagination")
              , k = 30;
          b.hasClass("eltdf-small-space") ? k = 10 : b.hasClass("eltdf-no-space") && (k = 0);
          var l = d
              , m = 3
              , n = 2;
          d > 4 && (l = 4),
          d < 3 && (m = d,
              n = d),
          1 === d && (k = 0),
              c.owlCarousel({
                items: d,
                autoplay: e,
                autoplayTimeout: f,
                autoplayHoverPause: !0,
                loop: g,
                smartSpeed: h,
                margin: k,
                nav: i,
                navText: ['<span class="eltdf-prev-icon"><span class="eltdf-icon-arrow ion-ios-arrow-thin-left"></span></span>', '<span class="eltdf-next-icon"><span class="eltdf-icon-arrow ion-ios-arrow-thin-right"></span></span>'],
                dots: j,
                mouseDrag: !0,
                touchDrag: !0,
                responsive: {
                  1200: {
                    items: d
                  },
                  1024: {
                    items: l
                  },
                  769: {
                    items: m
                  },
                  601: {
                    items: n
                  },
                  0: {
                    items: 1
                  }
                }
              }),
              c.css({
                visibility: "visible"
              })
        })
      }
      var m = {};
      eltdf.modules.woocommerce = m,
          m.eltdfInitQuantityButtons = i,
          m.eltdfInitSelect2 = j,
          m.eltdfOnDocumentReady = b,
          m.eltdfOnWindowLoad = c,
          m.eltdfOnWindowResize = d,
          a(document).ready(b),
          a(window).on("load", c),
          a(window).resize(d)
    }(jQuery);
;/*!
* WPBakery Page Builder v6.0.0 (https://wpbakery.com)
* Copyright 2011-2021 Michael M, WPBakery
* License: Commercial. More details: http://go.wpbakery.com/licensing
*/
document.documentElement.className += " js_active ",
    document.documentElement.className += "ontouchstart"in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
      for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++)
        prefix[i] + "transform"in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
      "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(),
                vc_tabsBehaviour(),
                vc_accordionBehaviour(),
                vc_teaserGrid(),
                vc_carouselBehaviour(),
                vc_slidersBehaviour(),
                vc_prettyPhoto(),
                vc_pinterest(),
                vc_progress_bar(),
                vc_plugin_flexslider(),
                vc_gridBehaviour(),
                vc_rowBehaviour(),
                vc_prepareHoverBox(),
                vc_googleMapsPointer(),
                vc_ttaActivation(),
                jQuery(document).trigger("vc_js"),
                window.setTimeout(vc_waypoints, 500)
          }
      ),
      "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
              var this_element = jQuery(this)
                  , sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10)
                  , sliderFx = this_element.attr("data-flex_fx")
                  , slideshow = 0 == sliderTimeout ? !1 : !0;
              this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0
              })
            })
          }
      ),
      "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
              var po = document.createElement("script");
              po.type = "text/javascript",
                  po.async = !0,
                  po.src = "https://apis.google.com/js/plusone.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s)
            }()
          }
      ),
      "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
              var po = document.createElement("script");
              po.type = "text/javascript",
                  po.async = !0,
                  po.src = "https://assets.pinterest.com/js/pinit.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s)
            }()
          }
      ),
      "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
              var $el = jQuery(this);
              $el.vcwaypoint(function() {
                $el.find(".vc_single_bar").each(function(index) {
                  var bar = jQuery(this).find(".vc_bar")
                      , val = bar.data("percentage-value");
                  setTimeout(function() {
                    bar.css({
                      width: val + "%"
                    })
                  }, 200 * index)
                })
              }, {
                offset: "85%"
              })
            })
          }
      ),
      "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
              var $el = jQuery(this);
              $el.vcwaypoint(function() {
                $el.addClass("wpb_start_animation animated")
              }, {
                offset: "85%"
              })
            })
          }
      ),
      "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(content) {
              content && content.preventDefault && content.preventDefault();
              var element = jQuery(this).closest(".vc_toggle")
                  , content = element.find(".vc_toggle_content");
              element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300,
                complete: function() {
                  element.removeClass("vc_toggle_active")
                }
              }) : content.slideDown({
                duration: 300,
                complete: function() {
                  element.addClass("vc_toggle_active")
                }
              })
            }
            ($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
          }
      ),
      "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(ver) {
            var $call, old_version;
            jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9,
                $call.each(function(index) {
                  var interval = jQuery(this).attr("data-interval")
                      , tabs_array = []
                      , $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                    show: function(event, ui) {
                      wpb_prepare_tab_content(event, ui)
                    },
                    activate: function(event, ui) {
                      wpb_prepare_tab_content(event, ui)
                    }
                  });
                  if (interval && 0 < interval)
                    try {
                      $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                      window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                  jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                  }),
                      jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                        return e && e.preventDefault && e.preventDefault(),
                            old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()),
                            !1
                      }),
                      jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(length) {
                        var index;
                        length && length.preventDefault && length.preventDefault(),
                            old_version ? (index = $tabs.tabs("option", "selected"),
                                jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--,
                                index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0),
                                $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"),
                                length = $tabs.find(".wpb_tab").length,
                                index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1,
                                $tabs.tabs("option", "active", index))
                      })
                }))
          }
      ),
      "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
              var $this = jQuery(this)
                  , active_tab = ($this.attr("data-interval"),
              !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1)
                  , $tabs = !1 === active_tab || "yes" === $this.data("collapsible")
                  , $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: $tabs,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function(event, ui) {
                  void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"),
                      vc_carouselBehaviour(ui.newPanel)
                }
              });
              !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {}
              )
            })
          }
      ),
      "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
              fitrows: "fitRows",
              masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
              var $container = jQuery(this)
                  , $thumbs = $container.find(".wpb_thumbnails")
                  , layout_mode = $thumbs.attr("data-layout-mode");
              $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
              }),
                  $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function($thumbs) {
                    $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                    $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"),
                        jQuery(this).parent().addClass("active"),
                        $thumbs.isotope({
                          filter: jQuery(this).attr("data-filter")
                        })
                  }),
                  jQuery(window).on("load resize", function() {
                    $thumbs.isotope("layout")
                  })
            })
          }
      ),
      "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
              var fluid_ul = jQuery(this);
              !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0),
                  getColumnsCount(jQuery(this)),
                  jQuery(this).hasClass("columns_count_1"),
                  (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": fluid_ul.css("margin-left"),
                    "margin-left": 0
                  }),
                  (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300),
                  jQuery(window).on("resize", function() {
                    screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                      location.reload()
                    }, 20)
                  }))
            })
          }
      ),
      "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
              var $imagesGrid, sliderTimeout, this_element = jQuery(this);
              this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999),
                  this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                  })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                $imagesGrid.isotope({
                  itemSelector: ".isotope-item",
                  layoutMode: "fitRows"
                })
              }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
              }))
            })
          }
      ),
      "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
              jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function() {
                  -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                },
                social_tools: ""
              })
            } catch (err) {
              window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
          }
      ),
      "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"),
                !1
          }
      ),
          window.vcParallaxSkroll = !1,
      "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;
            function fullWidthRow() {
              var $elements = $('[data-vc-full-width="true"]');
              $.each($elements, function(key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10),
                    el_margin_right = parseInt($el.css("margin-right"), 10),
                    offset = 0 - $el_full.offset().left - el_margin_left,
                    width = $(window).width(),
                "rtl" === $el.css("direction") && (offset -= $el_full.width(),
                    offset += width,
                    offset += el_margin_left,
                    offset += el_margin_right),
                    $el.css({
                      position: "relative",
                      left: offset,
                      "box-sizing": "border-box",
                      width: width
                    }),
                $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0),
                (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0),
                    $el.css({
                      "padding-left": padding + "px",
                      "padding-right": paddingRight + "px"
                    })),
                    $el.attr("data-vc-full-width-init", "true"),
                    $el.removeClass("vc_hidden"),
                    $(document).trigger("vc-full-width-row-single", {
                      el: $el,
                      offset: offset,
                      marginLeft: el_margin_left,
                      marginRight: el_margin_right,
                      elFull: $el_full,
                      width: width
                    }))
              }),
                  $(document).trigger("vc-full-width-row", $elements)
            }
            function fullHeightRow() {
              var fullHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
              $element.length && (fullHeight = $(window).height(),
              (offsetTop = $element.offset().top) < fullHeight && (fullHeight = 100 - offsetTop / (fullHeight / 100),
                  $element.css("min-height", fullHeight + "vh"))),
                  $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow),
                fullWidthRow(),
                fullHeightRow(),
            (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
              "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }),
                vc_initVideoBackgrounds(),
                callSkrollInit = !1,
            window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
                $(".vc_parallax-inner").remove(),
                $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),
                $("[data-vc-parallax]").each(function() {
                  var skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                  callSkrollInit = !0,
                  "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"),
                      skrollrStart = 100 * $(this).data("vcParallax"),
                      ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrStart + "%"),
                      parallaxImage = $(this).data("vcParallaxImage"),
                      (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"),
                      skrollrStart = -(skrollrStart - 100),
                      $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
                }),
            callSkrollInit && window.skrollr && (vcSkrollrOptions = {
              forceHeight: !1,
              smoothScrolling: !1,
              mobileCheck: function() {
                return !1
              }
            },
                window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions),
                window.vcParallaxSkroll)
          }
      ),
      "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
          }
      ),
      "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find; ) {
              if (el.hasClass("columns_count_" + i))
                return find = !0,
                    i;
              i++
            }
          }
      );
      var screen_size = getSizeName();
      function getSizeName() {
        var screen_w = jQuery(window).width();
        return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
      }
      "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var panel = ui.panel || ui.newPanel
                , $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)")
                , $round_charts = panel.find(".vc_round-chart")
                , $frame = panel.find(".vc_line-chart")
                , $google_maps = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(),
                vc_plugin_flexslider(panel),
            ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
              var grid = jQuery(this).data("vcGrid");
              grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }),
            panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
              var grid = jQuery(this).data("vcGrid");
              grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }),
            $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
            $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
              reload: !1
            }),
            $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({
              reload: !1
            }),
            $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"),
                $frame = panel.find(".isotope, .wpb_image_grid_ul"),
                $google_maps = panel.find(".wpb_gmaps_widget"),
            0 < $frame.length && $frame.isotope("layout"),
            $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")),
                $google_maps.addClass("map_ready")),
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
              jQuery(this).isotope("layout")
            }),
                $(document).trigger("wpb_prepare_tab_content", panel)
          }
      ),
      "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
              var $ = window.jQuery
                  , ui = {};
              ui.newPanel = $(this).data("vc.accordion").getTarget(),
                  window.wpb_prepare_tab_content(e, ui)
            })
          }
      ),
      "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = ui.newPanel.find(".vc_round-chart"),
                $line_charts = ui.newPanel.find(".vc_line-chart"),
                $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'),
            void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),
            ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
              var grid = jQuery(this).data("vcGrid");
              grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }),
                vc_carouselBehaviour(ui.newPanel),
                vc_plugin_flexslider(ui.newPanel),
            $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
            $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
              reload: !1
            }),
            $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
              reload: !1
            }),
            $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"),
            ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
              jQuery(this).isotope("layout")
            }))
          }
      ),
      "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),
                vc_initVideoBackgrounds()
          }
      ),
      "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
              var youtubeId, $element = jQuery(this);
              $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"),
              (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(),
                  insertYoutubeVideoAsBackground($element, youtubeId)),
                  jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                  })) : $element.find(".vc_video-bg").remove()
            })
          }
      ),
      "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player)
              return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
              }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0],{
              width: "100%",
              height: "100%",
              videoId: youtubeId,
              playerVars: {
                playlist: youtubeId,
                iv_load_policy: 3,
                enablejsapi: 1,
                disablekb: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                loop: 1,
                wmode: "transparent"
              },
              events: {
                onReady: function(event) {
                  event.target.mute().setLoop(!0)
                }
              }
            }),
                vcResizeVideoBackground($element),
                jQuery(window).on("resize", function() {
                  vcResizeVideoBackground($element)
                })
          }
      ),
      "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(), containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9),
                iframeH = containerH,
                marginLeft = -Math.round((iframeW - containerW) / 2) + "px",
                marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16),
                marginTop = -Math.round((iframeH - containerH) / 2) + "px",
                marginLeft = -Math.round((iframeW - containerW) / 2) + "px"),
                iframeW += "px",
                iframeH += "px",
                $element.find(".vc_video-bg iframe").css({
                  maxWidth: "1000%",
                  marginLeft: marginLeft,
                  marginTop: marginTop,
                  width: iframeW,
                  height: iframeH
                })
          }
      ),
      "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(id) {
            if (void 0 === id)
              return !1;
            id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
          }
      ),
      "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery
                , $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
              $("iframe", this).css("pointer-events", "auto")
            }),
                $wpbGmapsWidget.on("mouseleave", function() {
                  $("iframe", this).css("pointer-events", "none")
                }),
                $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
          }
      ),
      "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
              var $this = jQuery(this)
                  , perspective = 4 * $this.width() + "px";
              $this.css("perspective", perspective)
            })
          }
      ),
      "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
              var hoverBoxHeight = jQuery(this)
                  , hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
              hoverBoxInner.css("min-height", 0);
              var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight()
                  , hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight()
                  , hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
              hoverBoxHeight < 250 && (hoverBoxHeight = 250),
                  hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
          }
      ),
      "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox),
                vc_setHoverBoxPerspective(hoverBox)
          }
      ),
          jQuery(document).ready(window.vc_prepareHoverBox),
          jQuery(window).on("resize", window.vc_prepareHoverBox),
          jQuery(document).ready(function($) {
            window.vc_js()
          })
    }(window.jQuery);
