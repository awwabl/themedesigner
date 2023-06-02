(self.webpackChunk_fluentui_public_docsite_v9 = self.webpackChunk_fluentui_public_docsite_v9 || []).push([
    [6125],
    {
        "./src/Concepts/ThemeDesigner.stories.mdx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { __namedExportsOrder: () => __namedExportsOrder, __page: () => __page, default: () => ThemeDesigner_stories });
            var TestType,
                es_object_keys = __webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),
                es_array_index_of = __webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),
                es_symbol = __webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),
                es_function_bind = __webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),
                es_object_assign = __webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),
                react = __webpack_require__("../../node_modules/react/index.js"),
                esm = __webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),
                dist_esm = __webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),
                jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js"),
                compileCSS_esm = __webpack_require__("../../node_modules/@griffel/core/runtime/compileCSS.esm.js"),
                cssifyObject_esm = __webpack_require__("../../node_modules/@griffel/core/runtime/utils/cssifyObject.esm.js");
            function compileStaticCSS(property, value) {
                let cssRule = `${property} {${(0, cssifyObject_esm.U)(value)}}`;
                return (0, compileCSS_esm.Ty)(cssRule)[0];
            }
            function resolveStaticStyleRules(styles, result = {}) {
                if ("string" == typeof styles) {
                    let cssRules = (0, compileCSS_esm.Ty)(styles);
                    for (let rule of cssRules) addResolvedStyles(rule, result);
                } else
                    for (let property in styles) {
                        let value = styles[property],
                            staticCSS = compileStaticCSS(property, value);
                        addResolvedStyles(staticCSS, result);
                    }
                return result;
            }
            function addResolvedStyles(cssRule, result = {}) {
                (result.d = result.d || []), result.d.push(cssRule);
            }
            function makeStaticStyles(styles) {
                let styleCache = {},
                    stylesSet = Array.isArray(styles) ? styles : [styles];
                return function (options) {
                    let cacheKey = options.renderer.id;
                    if (!styleCache[cacheKey]) {
                        for (let styleRules of stylesSet) options.renderer.insertCSSRules(resolveStaticStyleRules(styleRules));
                        styleCache[cacheKey] = !0;
                    }
                };
            }
            var RendererContext_esm = __webpack_require__("../../node_modules/@griffel/react/RendererContext.esm.js");
            function makeStaticStyles_esm_makeStaticStyles(styles) {
                let getStyles = makeStaticStyles(styles);
                return function () {
                    let renderer = (0, RendererContext_esm.a)();
                    return getStyles({ renderer });
                };
            }
            var makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js");
            makeStaticStyles_esm_makeStaticStyles({ "#docs-root .sbdocs-content > div:last-child": { marginBottom: "0px" } });
            let useStyles = (0, makeStyles_esm.Z)({
                root: { display: "grid", gridTemplateColumns: "250px auto", gridTemplateRows: "40px auto", minHeight: "100vh" },
                nav: { gridColumnStart: 1, gridColumnEnd: 3 },
                sidebar: { gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 1, gridColumnEnd: 2 },
                content: { gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3 },
            });
            var createLightTheme = __webpack_require__("../../packages/tokens/src/utils/createLightTheme.ts");
            let brandWeb = {
                10: "#061724",
                20: "#082338",
                30: "#0A2E4A",
                40: "#0C3B5E",
                50: "#0E4775",
                60: "#0F548C",
                70: "#115EA3",
                80: "#0F6CBD",
                90: "#2886DE",
                100: "#479EF5",
                110: "#62ABF5",
                120: "#77B7F7",
                130: "#96C6FA",
                140: "#B4D6FA",
                150: "#CFE4FA",
                160: "#EBF3FC",
            };
            function isFlat(A) {
                return !Array.isArray(A[0]);
            }
            function multiplyMatrices(AMatrixOrVector, BMatrixOrVector) {
                let m = AMatrixOrVector.length,
                    A = isFlat(AMatrixOrVector) ? [AMatrixOrVector] : AMatrixOrVector,
                    B = isFlat(BMatrixOrVector) ? BMatrixOrVector.map((x) => [x]) : BMatrixOrVector,
                    p = B[0].length,
                    B_cols = B[0].map((_, i) => B.map((x) => x[i])),
                    product = A.map((row) => B_cols.map((col) => (Array.isArray(row) ? row.reduce((a, c, i) => a + c * (col[i] || 0), 0) : col.reduce((a, c) => a + c * row, 0))));
                return (1 === m && (product = product[0]), 1 === p) ? product.map((x) => x[0]) : product;
            }
            function lin_sRGB(RGB) {
                return RGB.map((val) => {
                    let abs = Math.abs(val);
                    return abs < 0.04045 ? val / 12.92 : (val < 0 ? -1 : 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
                });
            }
            function gam_sRGB(RGB) {
                return RGB.map((val) => {
                    let abs = Math.abs(val);
                    return abs > 0.0031308 ? (val < 0 ? -1 : 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055) : 12.92 * val;
                });
            }
            function lin_sRGB_to_XYZ(rgb) {
                return multiplyMatrices(
                    [
                        [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
                        [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
                        [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
                    ],
                    rgb
                );
            }
            function XYZ_to_lin_sRGB(XYZ) {
                return multiplyMatrices(
                    [
                        [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
                        [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
                        [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
                    ],
                    XYZ
                );
            }
            function D65_to_D50(XYZ) {
                return multiplyMatrices(
                    [
                        [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
                        [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
                        [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008],
                    ],
                    XYZ
                );
            }
            function D50_to_D65(XYZ) {
                return multiplyMatrices(
                    [
                        [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
                        [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
                        [0.012314001688319899, -0.020507696433477912, 1.3303659366080753],
                    ],
                    XYZ
                );
            }
            function XYZ_to_Lab(XYZ) {
                let ε = 216 / 24389,
                    κ = 24389 / 27,
                    white = [0.96422, 1, 0.82521],
                    xyz = XYZ.map((value, i) => value / white[i]),
                    f = xyz.map((value) => (value > ε ? Math.cbrt(value) : (κ * value + 16) / 116));
                return [116 * f[1] - 16, 500 * (f[0] - f[1]), 200 * (f[1] - f[2])];
            }
            function Lab_to_XYZ(Lab) {
                let κ = 24389 / 27,
                    ε = 216 / 24389,
                    white = [0.96422, 1, 0.82521],
                    f = [];
                (f[1] = (Lab[0] + 16) / 116), (f[0] = Lab[1] / 500 + f[1]), (f[2] = f[1] - Lab[2] / 200);
                let xyz = [Math.pow(f[0], 3) > ε ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ, Lab[0] > κ * ε ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ, Math.pow(f[2], 3) > ε ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ];
                return xyz.map((value, i) => value * white[i]);
            }
            function Lab_to_LCH(Lab) {
                let hue = (180 * Math.atan2(Lab[2], Lab[1])) / Math.PI;
                return [Lab[0], Math.sqrt(Math.pow(Lab[1], 2) + Math.pow(Lab[2], 2)), hue >= 0 ? hue : hue + 360];
            }
            function LCH_to_Lab(LCH) {
                return [LCH[0], LCH[1] * Math.cos((LCH[2] * Math.PI) / 180), LCH[1] * Math.sin((LCH[2] * Math.PI) / 180)];
            }
            function sRGB_to_luminance(RGB) {
                let XYZ = lin_sRGB_to_XYZ(lin_sRGB(RGB));
                return XYZ[1];
            }
            function contrast(RGB1, RGB2) {
                let L1 = sRGB_to_luminance(RGB1),
                    L2 = sRGB_to_luminance(RGB2);
                return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
            }
            function sRGB_to_LCH(RGB) {
                return Lab_to_LCH(XYZ_to_Lab(D65_to_D50(lin_sRGB_to_XYZ(lin_sRGB(RGB)))));
            }
            function LCH_to_sRGB(LCH) {
                return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
            }
            function LAB_to_sRGB(LAB) {
                return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LAB))));
            }
            function is_LCH_inside_sRGB(l, c, h) {
                let rgb = LCH_to_sRGB([+l, +c, +h]);
                return rgb.reduce((a, b) => a && b >= -0.000005 && b <= 1.000005, !0);
            }
            function snap_into_gamut(Lab) {
                let LCH = Lab_to_LCH(Lab),
                    l = LCH[0],
                    c = LCH[1],
                    h = LCH[2];
                if (is_LCH_inside_sRGB(l, c, h)) return Lab;
                let hiC = c,
                    loC = 0;
                for (c /= 2; hiC - loC > 1e-4; ) is_LCH_inside_sRGB(l, c, h) ? (loC = c) : (hiC = c), (c = (hiC + loC) / 2);
                return LCH_to_Lab([l, c, h]);
            }
            function distanceTo(v1, v2) {
                return Math.sqrt(distanceToSquared(v1, v2));
            }
            function distanceToSquared(v1, v2) {
                let dx = v1[0] - v2[0],
                    dy = v1[1] - v2[1],
                    dz = v1[2] - v2[2];
                return dx * dx + dy * dy + dz * dz;
            }
            function equals(v1, v2) {
                return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2];
            }
            function QuadraticBezierP0(t, p) {
                let k = 1 - t;
                return k * k * p;
            }
            function QuadraticBezierP1(t, p) {
                return 2 * (1 - t) * t * p;
            }
            function QuadraticBezierP2(t, p) {
                return t * t * p;
            }
            function QuadraticBezier(t, p0, p1, p2) {
                return QuadraticBezierP0(t, p0) + QuadraticBezierP1(t, p1) + QuadraticBezierP2(t, p2);
            }
            function getPointOnCurve(curve, t) {
                let [v0, v1, v2] = curve.points;
                return [QuadraticBezier(t, v0[0], v1[0], v2[0]), QuadraticBezier(t, v0[1], v1[1], v2[1]), QuadraticBezier(t, v0[2], v1[2], v2[2])];
            }
            function getPointsOnCurve(curve, divisions) {
                let points = [];
                for (let d = 0; d <= divisions; d++) points.push(getPointOnCurve(curve, d / divisions));
                return points;
            }
            function getCurveLength(curve) {
                let lengths = getCurveLengths(curve);
                return lengths[lengths.length - 1];
            }
            function getCurveLengths(curve, divisions = 128) {
                let current;
                if (curve.cacheArcLengths && curve.cacheArcLengths.length === divisions + 1) return curve.cacheArcLengths;
                let cache = [],
                    last = getPointOnCurve(curve, 0),
                    sum = 0;
                cache.push(0);
                for (let p = 1; p <= divisions; p++) cache.push((sum += distanceTo((current = getPointOnCurve(curve, p / divisions)), last))), (last = current);
                return (curve.cacheArcLengths = cache), cache;
            }
            function getPointsOnCurvePath(curvePath, divisions = 128) {
                let last;
                let points = [];
                for (let i = 0, curves = curvePath.curves; i < curves.length; i++) {
                    let curve = curves[i],
                        pts = getPointsOnCurve(curve, divisions);
                    for (let point of pts) (last && equals(last, point)) || (points.push(point), (last = point));
                }
                return points;
            }
            function hexToHue(hexColor) {
                let hue;
                let red = parseInt(hexColor.substring(1, 3), 16),
                    green = parseInt(hexColor.substring(3, 5), 16),
                    blue = parseInt(hexColor.substring(5, 7), 16),
                    r = red / 255,
                    g = green / 255,
                    b = blue / 255,
                    cmax = Math.max(r, g, b),
                    delta = cmax - Math.min(r, g, b);
                return (hue = Math.round(60 * (hue = 0 === delta ? 0 : cmax === r ? ((g - b) / delta) % 6 : cmax === g ? (b - r) / delta + 2 : (r - g) / delta + 4))) < 0 && (hue += 360), hue;
            }
            let hueToSnappingPointsMap = [
                    [0.0085504, 0.148504, 0.858504],
                    [0.00855388, 0.1485388, 0.8585388],
                    [0.0085582, 0.148582, 0.858582],
                    [0.00856192, 0.1486192, 0.8586192],
                    [0.00856644, 0.1486644, 0.8586644],
                    [0.00857184, 0.1487184, 0.8587184],
                    [0.0085802, 0.148802, 0.858802],
                    [0.00858752, 0.1488752, 0.8588752],
                    [0.00859616, 0.1489616, 0.8589616],
                    [0.00860584, 0.1490584, 0.8590584],
                    [0.00861948, 0.1491948, 0.8591948],
                    [0.00863172, 0.1493172, 0.8593172],
                    [0.00864508, 0.1494508, 0.8594508],
                    [0.00865968, 0.1495968, 0.8595968],
                    [0.00867968, 0.1497968, 0.8597968],
                    [0.00869708, 0.1499708, 0.8599708],
                    [0.00871576, 0.1501576, 0.8601576],
                    [0.0087358, 0.150358, 0.860358],
                    [0.00876272, 0.1506272, 0.8606272],
                    [0.0087858, 0.150858, 0.860858],
                    [0.00881028, 0.1511028, 0.8611028],
                    [0.0088362, 0.151362, 0.861362],
                    [0.0088706, 0.151706, 0.861706],
                    [0.0088998, 0.151998, 0.861998],
                    [0.00893052, 0.1523052, 0.8623052],
                    [0.00896272, 0.1526272, 0.8626272],
                    [0.00900516, 0.1530516, 0.8630516],
                    [0.00904084, 0.1534084, 0.8634084],
                    [0.00907812, 0.1537812, 0.8637812],
                    [0.00911704, 0.1541704, 0.8641704],
                    [0.00916792, 0.1546792, 0.8646792],
                    [0.00921048, 0.1551048, 0.8651048],
                    [0.00925472, 0.1555472, 0.8655472],
                    [0.00930064, 0.1560064, 0.8660064],
                    [0.00934824, 0.1564824, 0.8664824],
                    [0.0094102, 0.157102, 0.867102],
                    [0.00946168, 0.1576168, 0.8676168],
                    [0.00951496, 0.1581496, 0.8681496],
                    [0.00957, 0.1587, 0.8687],
                    [0.00964128, 0.1594128, 0.8694128],
                    [0.00970036, 0.1600036, 0.8700036],
                    [0.00976128, 0.1606128, 0.8706128],
                    [0.00982404, 0.1612404, 0.8712404],
                    [0.00990508, 0.1620508, 0.8720508],
                    [0.009972, 0.16272, 0.87272],
                    [0.01004084, 0.1634084, 0.8734084],
                    [0.0101296, 0.164296, 0.874296],
                    [0.01020272, 0.1650272, 0.8750272],
                    [0.01027784, 0.1657784, 0.8757784],
                    [0.01035488, 0.1665488, 0.8765488],
                    [0.01045392, 0.1675392, 0.8775392],
                    [0.0105354, 0.168354, 0.878354],
                    [0.01061892, 0.1691892, 0.8791892],
                    [0.0107044, 0.170044, 0.880044],
                    [0.01081412, 0.1711412, 0.8811412],
                    [0.0109042, 0.172042, 0.882042],
                    [0.01099636, 0.1729636, 0.8829636],
                    [0.01109056, 0.1739056, 0.8839056],
                    [0.01121124, 0.1751124, 0.8851124],
                    [0.01131016, 0.1761016, 0.8861016],
                    [0.0114112, 0.177112, 0.887112],
                    [0.01138116, 0.1768116, 0.8868116],
                    [0.01135176, 0.1765176, 0.8865176],
                    [0.01131588, 0.1761588, 0.8861588],
                    [0.01128788, 0.1758788, 0.8858788],
                    [0.01126048, 0.1756048, 0.8856048],
                    [0.01122712, 0.1752712, 0.8852712],
                    [0.01120108, 0.1750108, 0.8850108],
                    [0.01117568, 0.1747568, 0.8847568],
                    [0.01115088, 0.1745088, 0.8845088],
                    [0.01112068, 0.1742068, 0.8842068],
                    [0.0110972, 0.173972, 0.883972],
                    [0.01107428, 0.1737428, 0.8837428],
                    [0.01105196, 0.1735196, 0.8835196],
                    [0.01102488, 0.1732488, 0.8832488],
                    [0.01100384, 0.1730384, 0.8830384],
                    [0.0109834, 0.172834, 0.882834],
                    [0.01096348, 0.1726348, 0.8826348],
                    [0.01094416, 0.1724416, 0.8824416],
                    [0.01092072, 0.1722072, 0.8822072],
                    [0.01090264, 0.1720264, 0.8820264],
                    [0.01088508, 0.1718508, 0.8818508],
                    [0.01086388, 0.1716388, 0.8816388],
                    [0.01084752, 0.1714752, 0.8814752],
                    [0.01083168, 0.1713168, 0.8813168],
                    [0.01081636, 0.1711636, 0.8811636],
                    [0.010798, 0.17098, 0.88098],
                    [0.0107838, 0.170838, 0.880838],
                    [0.01077016, 0.1707016, 0.8807016],
                    [0.010757, 0.17057, 0.88057],
                    [0.01074436, 0.1704436, 0.8804436],
                    [0.01072924, 0.1702924, 0.8802924],
                    [0.01071768, 0.1701768, 0.8801768],
                    [0.01070656, 0.1700656, 0.8800656],
                    [0.010696, 0.16996, 0.87996],
                    [0.01068336, 0.1698336, 0.8798336],
                    [0.01067376, 0.1697376, 0.8797376],
                    [0.01066464, 0.1696464, 0.8796464],
                    [0.010656, 0.16956, 0.87956],
                    [0.01064572, 0.1694572, 0.8794572],
                    [0.01063804, 0.1693804, 0.8793804],
                    [0.01063076, 0.1693076, 0.8793076],
                    [0.01062224, 0.1692224, 0.8792224],
                    [0.01061588, 0.1691588, 0.8791588],
                    [0.01060996, 0.1690996, 0.8790996],
                    [0.0106044, 0.169044, 0.879044],
                    [0.0105992, 0.168992, 0.878992],
                    [0.01059328, 0.1689328, 0.8789328],
                    [0.01058892, 0.1688892, 0.8788892],
                    [0.01058496, 0.1688496, 0.8788496],
                    [0.01058132, 0.1688132, 0.8788132],
                    [0.01057728, 0.1687728, 0.8787728],
                    [0.0105744, 0.168744, 0.878744],
                    [0.01057184, 0.1687184, 0.8787184],
                    [0.01056956, 0.1686956, 0.8786956],
                    [0.01056716, 0.1686716, 0.8786716],
                    [0.01056556, 0.1686556, 0.8786556],
                    [0.0105642, 0.168642, 0.878642],
                    [0.01056284, 0.1686284, 0.8786284],
                    [0.0105618, 0.168618, 0.878618],
                    [0.0105608, 0.168608, 0.878608],
                    [0.01056112, 0.1686112, 0.8786112],
                    [0.01056148, 0.1686148, 0.8786148],
                    [0.01056196, 0.1686196, 0.8786196],
                    [0.0105624, 0.168624, 0.878624],
                    [0.01056296, 0.1686296, 0.8786296],
                    [0.0105636, 0.168636, 0.878636],
                    [0.01056452, 0.1686452, 0.8786452],
                    [0.0105654, 0.168654, 0.878654],
                    [0.0105664, 0.168664, 0.878664],
                    [0.01056748, 0.1686748, 0.8786748],
                    [0.010569, 0.16869, 0.87869],
                    [0.01057036, 0.1687036, 0.8787036],
                    [0.0105718, 0.168718, 0.878718],
                    [0.01057384, 0.1687384, 0.8787384],
                    [0.0105756, 0.168756, 0.878756],
                    [0.01057748, 0.1687748, 0.8787748],
                    [0.01057948, 0.1687948, 0.8787948],
                    [0.01058164, 0.1688164, 0.8788164],
                    [0.01058456, 0.1688456, 0.8788456],
                    [0.010587, 0.16887, 0.87887],
                    [0.01058964, 0.1688964, 0.8788964],
                    [0.0105924, 0.168924, 0.878924],
                    [0.01059604, 0.1689604, 0.8789604],
                    [0.01059916, 0.1689916, 0.8789916],
                    [0.0106024, 0.169024, 0.879024],
                    [0.01060668, 0.1690668, 0.8790668],
                    [0.01061028, 0.1691028, 0.8791028],
                    [0.01061408, 0.1691408, 0.8791408],
                    [0.010618, 0.16918, 0.87918],
                    [0.01062312, 0.1692312, 0.8792312],
                    [0.01062744, 0.1692744, 0.8792744],
                    [0.01063188, 0.1693188, 0.8793188],
                    [0.01063652, 0.1693652, 0.8793652],
                    [0.01064132, 0.1694132, 0.8794132],
                    [0.0106476, 0.169476, 0.879476],
                    [0.0106528, 0.169528, 0.879528],
                    [0.01065816, 0.1695816, 0.8795816],
                    [0.01066372, 0.1696372, 0.8796372],
                    [0.01067092, 0.1697092, 0.8797092],
                    [0.01067688, 0.1697688, 0.8797688],
                    [0.01068304, 0.1698304, 0.8798304],
                    [0.01068936, 0.1698936, 0.8798936],
                    [0.01069756, 0.1699756, 0.8799756],
                    [0.01070428, 0.1700428, 0.8800428],
                    [0.01071124, 0.1701124, 0.8801124],
                    [0.0107184, 0.170184, 0.880184],
                    [0.0107276, 0.170276, 0.880276],
                    [0.0107352, 0.170352, 0.880352],
                    [0.01074296, 0.1704296, 0.8804296],
                    [0.01075092, 0.1705092, 0.8805092],
                    [0.01076116, 0.1706116, 0.8806116],
                    [0.0107696, 0.170696, 0.880696],
                    [0.01077824, 0.1707824, 0.8807824],
                    [0.01078708, 0.1708708, 0.8808708],
                    [0.0107984, 0.170984, 0.880984],
                    [0.01080772, 0.1710772, 0.8810772],
                    [0.0108172, 0.171172, 0.881172],
                    [0.0108294, 0.171294, 0.881294],
                    [0.0108394, 0.171394, 0.881394],
                    [0.0108496, 0.171496, 0.881496],
                    [0.01074856, 0.1704856, 0.8804856],
                    [0.01064964, 0.1694964, 0.8794964],
                    [0.01052896, 0.1682896, 0.8782896],
                    [0.01043476, 0.1673476, 0.8773476],
                    [0.0103426, 0.166426, 0.876426],
                    [0.01025252, 0.1655252, 0.8755252],
                    [0.0101428, 0.164428, 0.874428],
                    [0.01005732, 0.1635732, 0.8735732],
                    [0.0099738, 0.162738, 0.872738],
                    [0.00987228, 0.1617228, 0.8717228],
                    [0.009716, 0.16016, 0.87016],
                    [0.0096412, 0.159412, 0.869412],
                    [0.009568, 0.15868, 0.86868],
                    [0.00947924, 0.1577924, 0.8677924],
                    [0.0094104, 0.157104, 0.867104],
                    [0.00934348, 0.1564348, 0.8664348],
                    [0.0092624, 0.155624, 0.865624],
                    [0.00919968, 0.1549968, 0.8649968],
                    [0.0091388, 0.154388, 0.864388],
                    [0.00907968, 0.1537968, 0.8637968],
                    [0.0090224, 0.153224, 0.863224],
                    [0.00895336, 0.1525336, 0.8625336],
                    [0.00890008, 0.1520008, 0.8620008],
                    [0.0088486, 0.151486, 0.861486],
                    [0.00878664, 0.1508664, 0.8608664],
                    [0.00873904, 0.1503904, 0.8603904],
                    [0.00869312, 0.1499312, 0.8599312],
                    [0.00864888, 0.1494888, 0.8594888],
                    [0.00860632, 0.1490632, 0.8590632],
                    [0.00855544, 0.1485544, 0.8585544],
                    [0.00851652, 0.1481652, 0.8581652],
                    [0.00851652, 0.1481652, 0.8581652],
                    [0.00847924, 0.1477924, 0.8577924],
                    [0.00844356, 0.1474356, 0.8574356],
                    [0.00840112, 0.1470112, 0.8570112],
                    [0.00836888, 0.1466888, 0.8566888],
                    [0.0083382, 0.146382, 0.856382],
                    [0.008309, 0.14609, 0.85609],
                    [0.00827456, 0.1457456, 0.8557456],
                    [0.00824868, 0.1454868, 0.8554868],
                    [0.00822416, 0.1452416, 0.8552416],
                    [0.00819556, 0.1449556, 0.8549556],
                    [0.00817416, 0.1447416, 0.8547416],
                    [0.00815416, 0.1445416, 0.8545416],
                    [0.00813544, 0.1443544, 0.8543544],
                    [0.00811804, 0.1441804, 0.8541804],
                    [0.00809808, 0.1439808, 0.8539808],
                    [0.00808348, 0.1438348, 0.8538348],
                    [0.00807012, 0.1437012, 0.8537012],
                    [0.00805504, 0.1435504, 0.8535504],
                    [0.00804424, 0.1434424, 0.8534424],
                    [0.00803456, 0.1433456, 0.8533456],
                    [0.00802592, 0.1432592, 0.8532592],
                    [0.00801832, 0.1431832, 0.8531832],
                    [0.00801024, 0.1431024, 0.8531024],
                    [0.0080048, 0.143048, 0.853048],
                    [0.00800028, 0.1430028, 0.8530028],
                    [0.00799572, 0.1429572, 0.8529572],
                    [0.00799224, 0.1429224, 0.8529224],
                    [0.0079888, 0.142888, 0.852888],
                    [0.0079898, 0.142898, 0.852898],
                    [0.00799084, 0.1429084, 0.8529084],
                    [0.0079922, 0.142922, 0.852922],
                    [0.0079936, 0.142936, 0.852936],
                    [0.0079952, 0.142952, 0.852952],
                    [0.00799704, 0.1429704, 0.8529704],
                    [0.00799984, 0.1429984, 0.8529984],
                    [0.0080024, 0.143024, 0.853024],
                    [0.00800528, 0.1430528, 0.8530528],
                    [0.00800848, 0.1430848, 0.8530848],
                    [0.00801296, 0.1431296, 0.8531296],
                    [0.00801692, 0.1431692, 0.8531692],
                    [0.00802128, 0.1432128, 0.8532128],
                    [0.0080272, 0.143272, 0.853272],
                    [0.0080324, 0.143324, 0.853324],
                    [0.00803796, 0.1433796, 0.8533796],
                    [0.00804388, 0.1434388, 0.8534388],
                    [0.00805024, 0.1435024, 0.8535024],
                    [0.0080588, 0.143588, 0.853588],
                    [0.00806604, 0.1436604, 0.8536604],
                    [0.00807372, 0.1437372, 0.8537372],
                    [0.008084, 0.14384, 0.85384],
                    [0.00809264, 0.1439264, 0.8539264],
                    [0.00810176, 0.1440176, 0.8540176],
                    [0.00811136, 0.1441136, 0.8541136],
                    [0.008124, 0.14424, 0.85424],
                    [0.0081346, 0.144346, 0.854346],
                    [0.00814568, 0.1444568, 0.8544568],
                    [0.0081572, 0.144572, 0.854572],
                    [0.00817236, 0.1447236, 0.8547236],
                    [0.008185, 0.14485, 0.85485],
                    [0.00819816, 0.1449816, 0.8549816],
                    [0.0082118, 0.145118, 0.855118],
                    [0.008226, 0.14526, 0.85526],
                    [0.0082444, 0.145444, 0.855444],
                    [0.00826, 0.1456, 0.8556],
                    [0.00827552, 0.1457552, 0.8557552],
                    [0.00829188, 0.1459188, 0.8559188],
                    [0.00831308, 0.1461308, 0.8561308],
                    [0.00833064, 0.1463064, 0.8563064],
                    [0.00834872, 0.1464872, 0.8564872],
                    [0.00837212, 0.1467212, 0.8567212],
                    [0.00839148, 0.1469148, 0.8569148],
                    [0.00841136, 0.1471136, 0.8571136],
                    [0.00843184, 0.1473184, 0.8573184],
                    [0.00845288, 0.1475288, 0.8575288],
                    [0.00848, 0.1478, 0.8578],
                    [0.00850228, 0.1480228, 0.8580228],
                    [0.0085252, 0.148252, 0.858252],
                    [0.00855464, 0.1485464, 0.8585464],
                    [0.00857884, 0.1487884, 0.8587884],
                    [0.00860368, 0.1490368, 0.8590368],
                    [0.00862908, 0.1492908, 0.8592908],
                    [0.00866172, 0.1496172, 0.8596172],
                    [0.00868848, 0.1498848, 0.8598848],
                    [0.00871588, 0.1501588, 0.8601588],
                    [0.00874388, 0.1504388, 0.8604388],
                    [0.00877976, 0.1507976, 0.8607976],
                    [0.0088092, 0.151092, 0.861092],
                    [0.0088392, 0.151392, 0.861392],
                    [0.008829, 0.15129, 0.86129],
                    [0.008819, 0.15119, 0.86119],
                    [0.0088068, 0.151068, 0.861068],
                    [0.00879732, 0.1509732, 0.8609732],
                    [0.008788, 0.15088, 0.86088],
                    [0.00877668, 0.1507668, 0.8607668],
                    [0.00876784, 0.1506784, 0.8606784],
                    [0.0087592, 0.150592, 0.860592],
                    [0.0087508, 0.150508, 0.860508],
                    [0.00874256, 0.1504256, 0.8604256],
                    [0.00873256, 0.1503256, 0.8603256],
                    [0.0087248, 0.150248, 0.860248],
                    [0.0087172, 0.150172, 0.860172],
                    [0.008708, 0.15008, 0.86008],
                    [0.00870084, 0.1500084, 0.8600084],
                    [0.00869388, 0.1499388, 0.8599388],
                    [0.00868712, 0.1498712, 0.8598712],
                    [0.00867896, 0.1497896, 0.8597896],
                    [0.00867264, 0.1497264, 0.8597264],
                    [0.00866648, 0.1496648, 0.8596648],
                    [0.00866052, 0.1496052, 0.8596052],
                    [0.00865332, 0.1495332, 0.8595332],
                    [0.00864776, 0.1494776, 0.8594776],
                    [0.0086424, 0.149424, 0.859424],
                    [0.0086372, 0.149372, 0.859372],
                    [0.00863092, 0.1493092, 0.8593092],
                    [0.00862612, 0.1492612, 0.8592612],
                    [0.00862148, 0.1492148, 0.8592148],
                    [0.008617, 0.14917, 0.85917],
                    [0.00861272, 0.1491272, 0.8591272],
                    [0.0086076, 0.149076, 0.859076],
                    [0.00860368, 0.1490368, 0.8590368],
                    [0.00859988, 0.1489988, 0.8589988],
                    [0.00859628, 0.1489628, 0.8589628],
                    [0.008592, 0.14892, 0.85892],
                    [0.00858876, 0.1488876, 0.8588876],
                    [0.00858564, 0.1488564, 0.8588564],
                    [0.00858272, 0.1488272, 0.8588272],
                    [0.00857924, 0.1487924, 0.8587924],
                    [0.0085766, 0.148766, 0.858766],
                    [0.00857416, 0.1487416, 0.8587416],
                    [0.0085718, 0.148718, 0.858718],
                    [0.00856908, 0.1486908, 0.8586908],
                    [0.00856708, 0.1486708, 0.8586708],
                    [0.0085652, 0.148652, 0.858652],
                    [0.008563, 0.14863, 0.85863],
                    [0.0085614, 0.148614, 0.858614],
                    [0.00856, 0.1486, 0.8586],
                    [0.0085586, 0.148586, 0.858586],
                    [0.00855736, 0.1485736, 0.8585736],
                    [0.008556, 0.14856, 0.85856],
                    [0.008555, 0.14855, 0.85855],
                    [0.00855412, 0.1485412, 0.8585412],
                    [0.0085532, 0.148532, 0.858532],
                    [0.00855256, 0.1485256, 0.8585256],
                    [0.008552, 0.14852, 0.85852],
                    [0.00855156, 0.1485156, 0.8585156],
                    [0.00855108, 0.1485108, 0.8585108],
                    [0.00855072, 0.1485072, 0.8585072],
                ],
                snappingPointsForKeyColor = (keyColor) => {
                    let hue = hexToHue(keyColor),
                        range = [100 * hueToSnappingPointsMap[hue][0], 100 * hueToSnappingPointsMap[hue][1], 100 * hueToSnappingPointsMap[hue][2]];
                    return range;
                },
                pointsForKeyColor = (keyColor, range, centerPoint) => {
                    let hue = hexToHue(keyColor),
                        center = 100 * hueToSnappingPointsMap[hue][1],
                        linear = linearInterpolationThroughPoint(range[0], range[1], center, 16);
                    return linear;
                };
            function linearInterpolationThroughPoint(start, end, inBetween, numSamples) {
                if (numSamples < 3) throw Error("Number of samples must be at least 3.");
                let inBetweenIndex = Math.floor((numSamples - 1) * ((inBetween - start) / (end - start))),
                    result = Array(numSamples);
                (result[0] = start), (result[inBetweenIndex] = inBetween), (result[numSamples - 1] = end);
                let stepBefore = (inBetween - start) / inBetweenIndex,
                    stepAfter = (end - inBetween) / (numSamples - 1 - inBetweenIndex);
                for (let i = 1; i < inBetweenIndex; i++) result[i] = start + i * stepBefore;
                for (let i = inBetweenIndex + 1; i < numSamples - 1; i++) result[i] = inBetween + (i - inBetweenIndex) * stepAfter;
                return result;
            }
            let getLogSpace = (min, max, n) => {
                let a = min <= 0 ? 0 : Math.log(min),
                    b = Math.log(max),
                    delta = (b - a) / n,
                    result = [Math.pow(Math.E, a)];
                for (let i = 1; i < n; i += 1) result.push(Math.pow(Math.E, a + delta * i));
                return result.push(Math.pow(Math.E, b)), result;
            };
            function paletteShadesFromCurvePoints(curvePoints, nShades, linearity = 0.75, keyColor) {
                if (curvePoints.length <= 2) return [];
                let snappingPoints = snappingPointsForKeyColor(keyColor),
                    paletteShades = [],
                    range = [snappingPoints[0], snappingPoints[2]],
                    logLightness = getLogSpace(Math.log10(0), Math.log10(100), nShades),
                    linearLightness = pointsForKeyColor(keyColor, range, snappingPoints[1]),
                    c = 0;
                for (let i = 0; i < nShades; i++) {
                    let l = Math.min(range[1], Math.max(range[0], logLightness[i] * (1 - linearity) + linearLightness[i] * linearity));
                    for (; l > curvePoints[c + 1][0]; ) c++;
                    let [l1, a1, b1] = curvePoints[c],
                        [l2, a2, b2] = curvePoints[c + 1],
                        u = (l - l1) / (l2 - l1);
                    paletteShades[i] = [l1 + (l2 - l1) * u, a1 + (a2 - a1) * u, b1 + (b2 - b1) * u];
                }
                return paletteShades.map(snap_into_gamut);
            }
            function paletteShadesFromCurve(keyColor, curve, nShades = 16, linearity = 0.75, curveDepth = 24) {
                let points = getPointsOnCurvePath(curve, Math.ceil((curveDepth * (1 + Math.abs(curve.torsion || 1))) / 2)).map((curvePoint) => getPointOnHelix(curvePoint, curve.torsion, curve.torsionT0));
                return paletteShadesFromCurvePoints(points, nShades, linearity, keyColor);
            }
            function sRGB_to_hex(rgb) {
                return `#${rgb.map((x) => (x < 0 ? 0 : Math.floor(x >= 1 ? 255 : 256 * x)).toString(16).padStart(2, "0")).join("")}`;
            }
            function Lab_to_hex(lab) {
                return sRGB_to_hex(LAB_to_sRGB(lab));
            }
            function hex_to_sRGB(hex) {
                let aRgbHex = hex.match(/#?(..)(..)(..)/);
                return aRgbHex ? [parseInt(aRgbHex[1], 16) / 255, parseInt(aRgbHex[2], 16) / 255, parseInt(aRgbHex[3], 16) / 255] : [0, 0, 0];
            }
            function hex_to_LCH(hex) {
                return sRGB_to_LCH(hex_to_sRGB(hex));
            }
            function paletteShadesToHex(paletteShades) {
                return paletteShades.map(Lab_to_hex);
            }
            function getPointOnHelix(pointOnCurve, torsion = 0, torsionT0 = 50) {
                let t = pointOnCurve[0],
                    [l, c, h] = Lab_to_LCH(pointOnCurve);
                return LCH_to_Lab([l, c, h + torsion * (t - torsionT0)]);
            }
            function curvePathFromPalette({ keyColor, darkCp, lightCp, hueTorsion }) {
                let keyColorPosition = LCH_to_Lab(keyColor),
                    [l, a, b] = keyColorPosition;
                return { curves: [{ points: [[0, 0, 0], [l * (1 - darkCp), a, b], keyColorPosition] }, { points: [keyColorPosition, [l + (100 - l) * lightCp, a, b], [100, 0, 0]] }], torsion: hueTorsion, torsionT0: l };
            }
            function hexColorsFromPalette(keyColor, palette, nShades = 16, linearity = 0.75, curveDepth = 24) {
                let curve = curvePathFromPalette(palette),
                    shades = paletteShadesFromCurve(keyColor, curve, nShades, linearity, curveDepth);
                return paletteShadesToHex(shades);
            }
            function getBrandTokensFromPalette(keyColor, options = {}) {
                let { darkCp = 2 / 3, lightCp = 1 / 3, hueTorsion = 0 } = options,
                    brandPalette = { keyColor: hex_to_LCH(keyColor), darkCp, lightCp, hueTorsion },
                    hexColors = hexColorsFromPalette(keyColor, brandPalette, 16, 1);
                return hexColors.reduce((acc, hexColor, h) => ((acc[`${(h + 1) * 10}`] = hexColor), acc), {});
            }
            var createDarkTheme = __webpack_require__("../../packages/tokens/src/utils/createDarkTheme.ts");
            let brandRamp = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
                sortOverrideableColorTokens = (overridableColorTokens) =>
                    overridableColorTokens.sort((a, b) => (a.includes("Inverted") && b.includes("Inverted") ? a.localeCompare(b) : a.includes("Inverted") ? 1 : b.includes("Inverted") ? -1 : a.localeCompare(b))),
                getOverridableTokenBrandColors = (theme, brand) => {
                    let addList = ["colorNeutralStrokeAccessibleSelected"],
                        removeList = ["colorBrandBackgroundInverted", "colorNeutralForegroundOnBrand"],
                        overridableColorTokens = Object.keys(theme).filter(
                            (color) =>
                                addList.filter((exceptionColor) => exceptionColor === color).length > 0 ||
                                (!(removeList.filter((exceptionColor) => exceptionColor === color).length > 0) &&
                                    color.startsWith("color") &&
                                    !color.includes("Palette") &&
                                    color.includes("Brand") &&
                                    !color.includes("Shadow") &&
                                    !color.includes("NeutralStroke"))
                        ),
                        sortedOverrideableColorTokens = sortOverrideableColorTokens(overridableColorTokens),
                        hexColorToBrand = brandRamp.reduce((a, c, i) => ((a[brand[c]] = c), a), {}),
                        brandColors = {};
                    for (let i = 0; i < sortedOverrideableColorTokens.length; i++) {
                        let key = sortedOverrideableColorTokens[i],
                            themeColor = theme[key];
                        brandColors[key] = hexColorToBrand[themeColor];
                    }
                    return brandColors;
                },
                createDarkThemeWithUpdatedMapping = (brand) => {
                    let darkTheme = (0, createDarkTheme.d)(brand);
                    return (darkTheme.colorBrandForeground1 = brand[110]), (darkTheme.colorBrandForeground2 = brand[120]), darkTheme;
                },
                defaultThemePlaceholderName = "myNewTheme",
                initialThemeDesignerState = {
                    themeName: defaultThemePlaceholderName,
                    keyColorHex: "#0F6CBD",
                    brand: brandWeb,
                    theme: (0, createLightTheme.f)(brandWeb),
                    themeWithOverrides: (0, createLightTheme.f)(brandWeb),
                    isDark: !1,
                    lightThemeOverrides: {},
                    darkThemeOverrides: {},
                    lightBrandOverrides: getOverridableTokenBrandColors((0, createLightTheme.f)(brandWeb), brandWeb),
                    darkBrandOverrides: getOverridableTokenBrandColors(createDarkThemeWithUpdatedMapping(brandWeb), brandWeb),
                    showExportPanel: !1,
                },
                ThemeDesignerContext = react.createContext(void 0),
                createCustomTheme = ({ hueTorsion, keyColor, vibrancy }) => getBrandTokensFromPalette(keyColor, { hueTorsion, darkCp: vibrancy, lightCp: vibrancy }),
                ThemeDesignerReducer = (state, action) => {
                    switch (action.type) {
                        case "isDark":
                            let theme = action.payload ? createDarkThemeWithUpdatedMapping(state.brand) : (0, createLightTheme.f)(state.brand);
                            return { ...state, theme, isDark: action.payload, themeWithOverrides: { ...theme, ...(action.payload ? state.darkThemeOverrides : state.lightThemeOverrides) } };
                        case "reset":
                            let resetTheme = state.isDark ? createDarkThemeWithUpdatedMapping(state.brand) : (0, createLightTheme.f)(state.brand);
                            return {
                                ...state,
                                theme: resetTheme,
                                themeWithOverrides: resetTheme,
                                lightThemeOverrides: {},
                                darkThemeOverrides: {},
                                lightBrandOverrides: getOverridableTokenBrandColors(createDarkThemeWithUpdatedMapping(state.brand), state.brand),
                                darkBrandOverrides: getOverridableTokenBrandColors(createDarkThemeWithUpdatedMapping(state.brand), state.brand),
                            };
                        case "updateThemeWithCustomerAttributes":
                            let newBrand = createCustomTheme(action.payload),
                                newTheme = state.isDark ? createDarkThemeWithUpdatedMapping(newBrand) : (0, createLightTheme.f)(newBrand);
                            return {
                                ...state,
                                keyColorHex: action.payload.keyColor,
                                brand: newBrand,
                                theme: newTheme,
                                themeWithOverrides: newTheme,
                                lightThemeOverrides: {},
                                darkThemeOverrides: {},
                                lightBrandOverrides: getOverridableTokenBrandColors((0, createLightTheme.f)(newBrand), newBrand),
                                darkBrandOverrides: getOverridableTokenBrandColors(createDarkThemeWithUpdatedMapping(newBrand), newBrand),
                            };
                        case "addOverride":
                            if (state.isDark) {
                                let overrides = { ...state.darkThemeOverrides, [action.payload.colorToken]: action.payload.newColor };
                                return {
                                    ...state,
                                    darkBrandOverrides: { ...state.darkBrandOverrides, [action.payload.colorToken]: action.payload.brand },
                                    darkThemeOverrides: overrides,
                                    themeWithOverrides: { ...createDarkThemeWithUpdatedMapping(state.brand), ...overrides },
                                };
                            }
                            {
                                let overrides = { ...state.lightThemeOverrides, [action.payload.colorToken]: action.payload.newColor };
                                return {
                                    ...state,
                                    lightBrandOverrides: { ...state.lightBrandOverrides, [action.payload.colorToken]: action.payload.brand },
                                    lightThemeOverrides: overrides,
                                    themeWithOverrides: { ...(0, createLightTheme.f)(state.brand), ...overrides },
                                };
                            }
                        case "themeName":
                            return { ...state, themeName: action.payload };
                        case "showExportPanel":
                            return { ...state, showExportPanel: action.payload };
                        default:
                            return { ...state };
                    }
                },
                useThemeDesigner = () => {
                    let context = react.useContext(ThemeDesignerContext);
                    if (void 0 === context) throw Error("useThemeDesigner must be used within a ThemeProvider Context");
                    return context;
                },
                ThemeDesignerContextProvider = ({ children }) => {
                    let [state, dispatch] = react.useReducer(ThemeDesignerReducer, initialThemeDesignerState),
                        value = { state, dispatch };
                    return (0, jsx_runtime.jsx)(ThemeDesignerContext.Provider, { value: value, children: children });
                };
            try {
                (ThemeDesignerContextProvider.displayName = "ThemeDesignerContextProvider"),
                    (ThemeDesignerContextProvider.__docgenInfo = { description: "", displayName: "ThemeDesignerContextProvider", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/Context/ThemeDesignerContext.tsx#ThemeDesignerContextProvider"] = {
                            docgenInfo: ThemeDesignerContextProvider.__docgenInfo,
                            name: "ThemeDesignerContextProvider",
                            path: "../../packages/react-components/theme-designer/src/Context/ThemeDesignerContext.tsx#ThemeDesignerContextProvider",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var FluentProvider = __webpack_require__("../../packages/react-components/react-provider/src/components/FluentProvider/FluentProvider.tsx"),
                lightTheme = __webpack_require__("../../packages/tokens/src/themes/web/lightTheme.ts"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                darkTheme = __webpack_require__("../../packages/tokens/src/themes/web/darkTheme.ts"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                Text = __webpack_require__("../../packages/react-components/react-text/src/components/Text/Text.tsx"),
                Button = __webpack_require__("../../packages/react-components/react-button/src/components/Button/Button.tsx"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js");
            let MFSTLogo = () =>
                    (0, jsx_runtime.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 256 256",
                        children: [
                            (0, jsx_runtime.jsx)("path", { fill: "#F1511B", d: "M121.666 121.666H0V0h121.666z" }),
                            (0, jsx_runtime.jsx)("path", { fill: "#80CC28", d: "M256 121.666H134.335V0H256z" }),
                            (0, jsx_runtime.jsx)("path", { fill: "#00ADEF", d: "M121.663 256.002H0V134.336h121.663z" }),
                            (0, jsx_runtime.jsx)("path", { fill: "#FBBC09", d: "M256 256.002H134.335V134.336H256z" }),
                        ],
                    }),
                Header_useStyles = (0, makeStyles_esm.Z)({
                    root: { display: "flex", alignItems: "center", width: "100%", height: "40px" },
                    logo: { alignItems: "center", display: "flex", justifyContent: "start", paddingLeft: tokens.T.spacingHorizontalL, ...index_esm.q5.gap(tokens.T.spacingHorizontalS) },
                    text: { width: "300px" },
                    header: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" },
                    link: { paddingRight: tokens.T.spacingHorizontalL },
                }),
                Header = (props) => {
                    let styles = Header_useStyles(),
                        handleClick = () => {
                            window.open("https://github.com/microsoft/fluentui/discussions", "_blank");
                        };
                    return (0, jsx_runtime.jsx)(FluentProvider.r, {
                        theme: darkTheme._,
                        className: (0, mergeClasses_esm.z)(styles.root, props.className),
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: styles.header,
                            children: [
                                (0, jsx_runtime.jsxs)("div", { className: styles.logo, children: [(0, jsx_runtime.jsx)(MFSTLogo, {}), (0, jsx_runtime.jsx)(Text.x, { className: styles.text, children: "Theme Designer" })] }),
                                (0, jsx_runtime.jsx)("div", { className: styles.link, children: (0, jsx_runtime.jsx)(Button.z, { size: "small", appearance: "outline", onClick: handleClick, children: "Give Feedback" }) }),
                            ],
                        }),
                    });
                };
            try {
                (Header.displayName = "Header"),
                    (Header.__docgenInfo = { description: "", displayName: "Header", props: { className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } } } }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Header/Header.tsx#Header"] = {
                            docgenInfo: Header.__docgenInfo,
                            name: "Header",
                            path: "../../packages/react-components/theme-designer/src/components/Header/Header.tsx#Header",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var useId = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                Accordion = __webpack_require__("../../packages/react-components/react-accordion/src/components/Accordion/Accordion.tsx"),
                AccordionItem = __webpack_require__("../../packages/react-components/react-accordion/src/components/AccordionItem/AccordionItem.tsx"),
                AccordionHeader = __webpack_require__("../../packages/react-components/react-accordion/src/components/AccordionHeader/AccordionHeader.tsx"),
                Caption1Stronger = __webpack_require__("../../packages/react-components/react-text/src/components/presets/Caption1Stronger/Caption1Stronger.tsx"),
                AccordionPanel = __webpack_require__("../../packages/react-components/react-accordion/src/components/AccordionPanel/AccordionPanel.tsx"),
                Field = __webpack_require__("../../packages/react-components/react-field/src/components/Field/Field.tsx"),
                Input = __webpack_require__("../../packages/react-components/react-input/src/components/Input/Input.tsx"),
                Slider = __webpack_require__("../../packages/react-components/react-slider/src/components/Slider/Slider.tsx"),
                Switch = __webpack_require__("../../packages/react-components/react-switch/src/components/Switch/Switch.tsx");
            let accessiblePairs = { colorBrandForeground1: [["colorNeutralBackground1", 4.5]], colorBrandForeground2: [["colorBrandBackground2", 4.5]] },
                lightnessPairs = {
                    colorCompoundBrandBackground: [
                        ["colorCompoundBrandBackgroundHover", -5],
                        ["colorCompoundBrandBackgroundPressed", -10],
                    ],
                    colorBrandBackground: [
                        ["colorBrandBackgroundHover", -5],
                        ["colorBrandBackgroundPressed", -20],
                        ["colorBrandBackgroundSelected", -10],
                    ],
                    colorBrandForegroundLink: [
                        ["colorBrandForegroundLinkHover", -5],
                        ["colorBrandForegroundLinkPressed", -15],
                    ],
                };
            !(function (TestType) {
                (TestType.contrastRatio = "contrastRatio"), (TestType.luminosity = "luminosity");
            })(TestType || (TestType = {}));
            let calculateContrastRatio = (currTheme, currToken, compToken, desiredRatio) => {
                    let currHex = currTheme[currToken],
                        compHex = currTheme[compToken];
                    if (!currHex || !compHex || "transparent" === currHex || "transparent" === compHex)
                        return { isPass: !0, testType: "contrastRatio", testInfo: { currToken, compToken, currHex, compHex, ratio: desiredRatio, desiredRatio } };
                    let currSRGB = hex_to_sRGB(currHex),
                        compSRGB = hex_to_sRGB(compHex),
                        contrastRatio = contrast(currSRGB, compSRGB),
                        roundedContrastRatio = Math.round(10 * contrastRatio) / 10;
                    return { isPass: roundedContrastRatio >= desiredRatio, testType: "contrastRatio", testInfo: { currToken, compToken, currHex, compHex, ratio: roundedContrastRatio, desiredRatio } };
                },
                getAccessibilityChecker = (theme) => {
                    let testPercentDiff = (currToken, compToken, desiredPercentDiff) => {
                            let currLCH = hex_to_LCH(theme[currToken]),
                                compLCH = hex_to_LCH(theme[compToken]),
                                value1 = currLCH[0],
                                value2 = compLCH[0],
                                percentDiff = ((value2 - value1) / value1) * 100,
                                roundedPercentDiff = Math.floor(10 * percentDiff) / 10,
                                isPass = !1;
                            return (
                                (isPass = desiredPercentDiff < 0 ? roundedPercentDiff <= desiredPercentDiff : roundedPercentDiff >= desiredPercentDiff),
                                { isPass, testType: "luminosity", testInfo: { currToken, compToken, currHex: theme[currToken], compHex: theme[compToken], percentDiff: roundedPercentDiff, desiredPercentDiff } }
                            );
                        },
                        checkLuminosityDifferences = () => {
                            let tests = [];
                            return (
                                Object.keys(lightnessPairs).forEach((token) => {
                                    for (let i = 0; i < lightnessPairs[token].length; i++) {
                                        let [compToken, ratio] = lightnessPairs[token][i],
                                            { isPass, testInfo } = testPercentDiff(token, compToken, ratio);
                                        tests.push({ isPass, testType: "luminosity", testInfo });
                                    }
                                }),
                                tests
                            );
                        },
                        checkContrastRatios = () => {
                            let tests = [],
                                added = [];
                            return (
                                Object.keys(accessiblePairs).forEach((token) => {
                                    for (let i = 0; i < accessiblePairs[token].length; i++) {
                                        let [compToken, ratio] = accessiblePairs[token][i],
                                            { isPass, testInfo } = calculateContrastRatio(theme, token, compToken, ratio);
                                        added.includes(testInfo.compHex) || (tests.push({ isPass, testType: "contrastRatio", testInfo }), added.push(testInfo.compHex));
                                    }
                                }),
                                tests
                            );
                        },
                        contrastTests = checkContrastRatios(),
                        luminosityTests = checkLuminosityDifferences(),
                        failedLuminosityTests = luminosityTests.filter((test) => !test.isPass),
                        failedContrastTests = contrastTests.filter((test) => !test.isPass),
                        all = Object.keys(accessiblePairs);
                    return { all, failedLuminosityTests, failedContrastTests };
                };
            var Badge_Badge = __webpack_require__("../../packages/react-components/react-badge/src/components/Badge/Badge.tsx"),
                MenuItemRadio = __webpack_require__("../../packages/react-components/react-menu/src/components/MenuItemRadio/MenuItemRadio.tsx"),
                createColumn = __webpack_require__("../../packages/react-components/react-table/src/hooks/createColumn.ts"),
                useTableFeatures = __webpack_require__("../../packages/react-components/react-table/src/hooks/useTableFeatures.ts"),
                useTableColumnSizing = __webpack_require__("../../packages/react-components/react-table/src/hooks/useTableColumnSizing.tsx"),
                Table = __webpack_require__("../../packages/react-components/react-table/src/components/Table/Table.tsx"),
                TableHeader = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeader/TableHeader.tsx"),
                TableRow = __webpack_require__("../../packages/react-components/react-table/src/components/TableRow/TableRow.tsx"),
                TableHeaderCell = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeaderCell/TableHeaderCell.tsx"),
                TableBody = __webpack_require__("../../packages/react-components/react-table/src/components/TableBody/TableBody.tsx"),
                TableCell = __webpack_require__("../../packages/react-components/react-table/src/components/TableCell/TableCell.tsx"),
                Subtitle2 = __webpack_require__("../../packages/react-components/react-text/src/components/presets/Subtitle2/Subtitle2.tsx"),
                Menu = __webpack_require__("../../packages/react-components/react-menu/src/components/Menu/Menu.tsx"),
                MenuTrigger = __webpack_require__("../../packages/react-components/react-menu/src/components/MenuTrigger/MenuTrigger.tsx"),
                MenuButton = __webpack_require__("../../packages/react-components/react-button/src/components/MenuButton/MenuButton.tsx"),
                MenuPopover = __webpack_require__("../../packages/react-components/react-menu/src/components/MenuPopover/MenuPopover.tsx"),
                MenuList = __webpack_require__("../../packages/react-components/react-menu/src/components/MenuList/MenuList.tsx"),
                chunk_1 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-1.js");
            let usageList = {
                    colorNeutralForeground2BrandHover: "Button subtle hover, Button transparent hover",
                    colorNeutralForeground2BrandPressed: "Button subtle pressed, Button transparent pressed",
                    colorNeutralForeground2BrandSelected: "Button subtle selected, Button transparent selected",
                    colorNeutralForeground3BrandHover: "Unused",
                    colorNeutralForeground3BrandPressed: "Unused",
                    colorNeutralForeground3BrandSelected: "Unused",
                    colorBrandForegroundLink: "Link default",
                    colorBrandForegroundLinkHover: "Link hover",
                    colorBrandForegroundLinkPressed: "Link pressed",
                    colorBrandForegroundLinkSelected: "Link selected",
                    colorCompoundBrandForeground1: `Checkbox mixed icon, Menu custom icon active, Menu custom icon, RadioGroup checked
  filled rest, Tab transparent selected icon rest, Tab subtle selected icon rest`,
                    colorCompoundBrandForeground1Hover: `Checkbox mixed icon hover, Menu custom icon hover, RadioGroup checked filled
    hover, Tab transparent selected icon hover, Tab subtle selected icon hover`,
                    colorCompoundBrandForeground1Pressed: `Checkbox mixed icon pressed, Menu custom icon pressed, RadioGroup checked
    filled pressed, Tab transparent selected icon pressed, Tab subtle selected icon pressed`,
                    colorBrandForeground1: "Badge outline, Badge ghost, Divider brand content",
                    colorBrandForeground2: "Badge tint",
                    colorBrandForegroundInverted: "Unused",
                    colorBrandForegroundInvertedHover: "Unused",
                    colorBrandForegroundInvertedPressed: "Unused",
                    colorBrandForegroundOnLight: "Unused",
                    colorBrandForegroundOnLightHover: "Unused",
                    colorBrandForegroundOnLightPressed: "Unused",
                    colorBrandForegroundOnLightSelected: "Unused",
                    colorBrandBackground: "Badge filled, Button primary, Link over brand rest, Link over brand, Popover brand",
                    colorBrandBackgroundHover: "Button primary hover",
                    colorBrandBackgroundPressed: "Button primary pressed",
                    colorBrandBackgroundSelected: "Button primary selected",
                    colorCompoundBrandBackground: "Checkbox checked icon, Checkbox checked base, Slider rail rest, Slider thumb rest, Switch checked rest",
                    colorCompoundBrandBackgroundHover: `Checkbox checked icon hover, Checkbox checked base hover, Slider rail hover,
    Slider thumb hover, Switch checked hover`,
                    colorCompoundBrandBackgroundPressed: `Checkbox checked icon pressed, Checkbox checked base pressed, Slider rail
    pressed, Slider thumb pressed, Switch checked pressed`,
                    colorBrandBackgroundStatic: "Avatar brand",
                    colorBrandBackground2: "Badge tint",
                    colorBrandBackgroundInvertedHover: "Unused",
                    colorBrandBackgroundInvertedPressed: "Unused",
                    colorBrandBackgroundInvertedSelected: "Unused",
                    colorNeutralStrokeAccessibleSelected: "Unused",
                    colorBrandStroke1: "Avatar active, Divider brand base, Spinner primary track",
                    colorBrandStroke2: "Unused",
                    colorCompoundBrandStroke: `Checkbox mixed border, Input filled darker in focus, Input filled lighter in focus, Input
    underline in focus, Input outline in focus, RadioGroup checked rest, TabList transparent selected indicator rest,
    TabList subtle selected indicator rest, TextArea filled darker in focus, TextArea filled lighter in focus, TextArea
    outline in focus`,
                    colorCompoundBrandStrokeHover: `Checkbox mixed border hover, RadioGroup checked hover, TabList transparent selected
    indicator hover, Tablist subtle selected indicator hover`,
                    colorCompoundBrandStrokePressed: `Checkbox mixed border pressed, RadioGroup checked pressed, TabList transparent
    selected indicator pressed, Tablist subtle selected indicator pressed`,
                },
                TokenList_style_useStyles = (0, makeStyles_esm.Z)({
                    colorLabel: { color: tokens.T.colorBrandForeground1 },
                    selected: { fontWeight: "bold" },
                    cellRow: { paddingTop: tokens.T.spacingVerticalS, paddingBottom: tokens.T.spacingVerticalS },
                    badge: { marginRight: tokens.T.spacingHorizontalS },
                    colorPreview: { display: "inline", paddingLeft: "5px", paddingRight: "5px", ...index_esm.q5.borderRadius("10px") },
                    menu: { marginTop: tokens.T.spacingVerticalXS },
                    output: { fontSize: tokens.T.fontSizeBase200 },
                }),
                ColorTokenCol = (props) => {
                    let styles = TokenList_style_useStyles(),
                        { brand, brandValue, brandValueString, selected, token, showContrast } = props,
                        {
                            state: { themeName, themeWithOverrides },
                        } = useThemeDesigner(),
                        calculateContrast = () => {
                            let theme = { ...themeWithOverrides, [token]: brand[brandValue] };
                            return Math.min(
                                ...accessiblePairs[token].map((tokenPair) => {
                                    let [compToken, ratio] = tokenPair,
                                        { testInfo } = calculateContrastRatio(theme, token, compToken, ratio);
                                    return testInfo.ratio;
                                })
                            );
                        },
                        generateContrast = () => (showContrast ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [" - Contrast: ", calculateContrast()] }) : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {}));
                    return (0, jsx_runtime.jsx)(MenuItemRadio.t, {
                        icon: (0, jsx_runtime.jsx)(chunk_1.MW6, { primaryFill: brand[brandValue] }),
                        name: brandValueString,
                        value: brandValueString,
                        children: (0, jsx_runtime.jsxs)("span", { className: selected ? styles.selected : "", children: [themeName, " ", brandValueString, " ", generateContrast()] }),
                    });
                },
                columnsDef = [
                    (0, createColumn.p)({ columnId: "colorTokens", renderHeaderCell: () => (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: "Token" }) }),
                    (0, createColumn.p)({ columnId: "check", renderHeaderCell: () => (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: "Check" }) }),
                    (0, createColumn.p)({ columnId: "usageExample", renderHeaderCell: () => (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: "Usage example" }) }),
                ],
                constructRowParameters = (colorOverrides, token, onNewOverride, themeOverrides) => {
                    let colorValue = colorOverrides[token],
                        usage = usageList[token],
                        handleColorChange = (e, data) => {
                            let newColor = parseInt(data.checkedItems[0], 10);
                            null == onNewOverride || onNewOverride(token, newColor);
                        },
                        overridenTokens = Object.keys(themeOverrides);
                    return { colorValue, usage, handleColorChange, overridenTokens };
                },
                TokenIssueList = (props) => {
                    let styles = TokenList_style_useStyles(),
                        [columns] = react.useState(columnsDef),
                        [columnSizingOptions] = react.useState({ colorTokens: { minWidth: 320 }, check: { minWidth: 330 }, usageExample: {} }),
                        { brand, coveredTokens, tests, colorOverrides, onNewOverride, themeOverrides, themeName, testType } = props,
                        { getRows, columnSizing_unstable, tableRef } = (0, useTableFeatures.S)({ columns, items: coveredTokens }, [(0, useTableColumnSizing.v)({ columnSizingOptions })]);
                    return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: (0, jsx_runtime.jsxs)(Table.i, {
                            size: "medium",
                            "aria-label": "Table with color token and description",
                            ref: tableRef,
                            children: [
                                (0, jsx_runtime.jsx)(TableHeader.x, {
                                    children: (0, jsx_runtime.jsx)(TableRow.S, {
                                        children: columns.map((column) => (0, jsx_runtime.jsx)(TableHeaderCell.x, { ...columnSizing_unstable.getTableHeaderCellProps(column.columnId), children: column.renderHeaderCell() }, column.columnId)),
                                    }),
                                }),
                                (0, jsx_runtime.jsx)(TableBody.R, {
                                    children: getRows().map((rowData) => {
                                        let token = rowData.item,
                                            { colorValue, usage, handleColorChange, overridenTokens } = constructRowParameters(colorOverrides, token, onNewOverride, themeOverrides);
                                        return (0, jsx_runtime.jsxs)(
                                            TableRow.S,
                                            {
                                                children: [
                                                    (0, jsx_runtime.jsxs)(TableCell.p, {
                                                        className: styles.cellRow,
                                                        children: [
                                                            (0, jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    overridenTokens.includes(token)
                                                                        ? (0, jsx_runtime.jsx)(Badge_Badge.C, { className: styles.badge, appearance: "filled", color: "success", size: "tiny" })
                                                                        : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: " " }),
                                                                    (0, jsx_runtime.jsx)(Subtitle2.T, { className: styles.colorLabel, children: token }),
                                                                ],
                                                            }),
                                                            (0, jsx_runtime.jsx)("div", {
                                                                className: styles.menu,
                                                                children: (0, jsx_runtime.jsxs)(Menu.v, {
                                                                    children: [
                                                                        (0, jsx_runtime.jsx)(MenuTrigger.b, {
                                                                            disableButtonEnhancement: !0,
                                                                            children: (0, jsx_runtime.jsxs)(MenuButton.j, {
                                                                                size: "small",
                                                                                shape: "circular",
                                                                                icon: (0, jsx_runtime.jsx)(chunk_1.MW6, { primaryFill: brand[colorValue] }),
                                                                                children: [themeName, " ", colorValue],
                                                                            }),
                                                                        }),
                                                                        (0, jsx_runtime.jsx)(MenuPopover.Y, {
                                                                            children: (0, jsx_runtime.jsx)(MenuList.q, {
                                                                                onCheckedValueChange: handleColorChange,
                                                                                children: brandRamp.map((brandValue) => {
                                                                                    let selected = colorValue === brandValue,
                                                                                        brandValueString = brandValue.toString();
                                                                                    return (0, jsx_runtime.jsx)(
                                                                                        "div",
                                                                                        {
                                                                                            children: (0, jsx_runtime.jsx)(ColorTokenCol, {
                                                                                                token: token,
                                                                                                brand: brand,
                                                                                                showContrast: testType === TestType.contrastRatio,
                                                                                                brandValue: brandValue,
                                                                                                brandValueString: brandValueString,
                                                                                                selected: selected,
                                                                                            }),
                                                                                        },
                                                                                        brandValueString
                                                                                    );
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, jsx_runtime.jsx)(TableCell.p, {
                                                        className: styles.cellRow,
                                                        children: tests
                                                            .filter((o) => o.testInfo.currToken === token)
                                                            .map((testResult) => {
                                                                var _testResult_testInfo;
                                                                let output, desiredOutput;
                                                                let hex = "",
                                                                    testUnits = testType === TestType.contrastRatio ? "ratio" : "% dif",
                                                                    compToken = null == (_testResult_testInfo = testResult.testInfo) ? void 0 : _testResult_testInfo.compToken;
                                                                if (testType === TestType.contrastRatio) {
                                                                    let testInfo = testResult.testInfo;
                                                                    (hex = testInfo.compHex), (output = testInfo.ratio), (desiredOutput = testInfo.desiredRatio);
                                                                } else if (testType === TestType.luminosity) {
                                                                    let testInfo = testResult.testInfo;
                                                                    (hex = testInfo.compHex), (output = testInfo.percentDiff), (desiredOutput = testInfo.desiredPercentDiff);
                                                                }
                                                                return (0, jsx_runtime.jsxs)(
                                                                    "div",
                                                                    {
                                                                        children: [
                                                                            compToken,
                                                                            " \xa0",
                                                                            (0, jsx_runtime.jsx)("div", {
                                                                                className: styles.colorPreview,
                                                                                style: { backgroundColor: brand[colorValue], color: 4.5 >= contrast(hex_to_sRGB(hex), hex_to_sRGB("#FFFFFF")) ? "black" : "white" },
                                                                                children: hex.toUpperCase(),
                                                                            }),
                                                                            (0, jsx_runtime.jsx)("br", {}),
                                                                            (0, jsx_runtime.jsx)("div", { className: styles.output, children: `${testUnits}: ${output}, expected: ${desiredOutput}` }),
                                                                        ],
                                                                    },
                                                                    token + " " + hex
                                                                );
                                                            }),
                                                    }),
                                                    (0, jsx_runtime.jsx)(TableCell.p, { className: styles.cellRow, children: (0, jsx_runtime.jsx)("div", { children: usage }) }),
                                                ],
                                            },
                                            token
                                        );
                                    }),
                                }),
                            ],
                        }),
                    });
                };
            try {
                (TokenIssueList.displayName = "TokenIssueList"),
                    (TokenIssueList.__docgenInfo = {
                        description: "",
                        displayName: "TokenIssueList",
                        props: {
                            brand: { defaultValue: null, description: "", name: "brand", required: !0, type: { name: "BrandVariants" } },
                            themeName: { defaultValue: null, description: "", name: "themeName", required: !0, type: { name: "string" } },
                            themeOverrides: { defaultValue: null, description: "", name: "themeOverrides", required: !0, type: { name: "Partial<Theme>" } },
                            colorOverrides: { defaultValue: null, description: "", name: "colorOverrides", required: !0, type: { name: "ColorOverrideBrands" } },
                            testType: { defaultValue: null, description: "", name: "testType", required: !0, type: { name: "enum", value: [{ value: '"contrastRatio"' }, { value: '"luminosity"' }] } },
                            coveredTokens: { defaultValue: null, description: "", name: "coveredTokens", required: !0, type: { name: "string[]" } },
                            tests: { defaultValue: null, description: "", name: "tests", required: !0, type: { name: "TestResult[]" } },
                            onNewOverride: { defaultValue: null, description: "", name: "onNewOverride", required: !0, type: { name: "(color: string, newColor: Brands) => void" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/ColorTokens/TokenIssueList.tsx#TokenIssueList"] = {
                            docgenInfo: TokenIssueList.__docgenInfo,
                            name: "TokenIssueList",
                            path: "../../packages/react-components/theme-designer/src/components/ColorTokens/TokenIssueList.tsx#TokenIssueList",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            let TokenList_ColorTokenCol = (props) => {
                    let styles = TokenList_style_useStyles(),
                        { brand, brandValue, brandValueString, selected } = props,
                        {
                            state: { themeName },
                        } = useThemeDesigner();
                    return (0, jsx_runtime.jsx)(MenuItemRadio.t, {
                        icon: (0, jsx_runtime.jsx)(chunk_1.MW6, { primaryFill: brand[brandValue] }),
                        name: brandValueString,
                        value: brandValueString,
                        children: (0, jsx_runtime.jsxs)("span", { className: selected ? styles.selected : "", children: [themeName, " ", brandValueString] }),
                    });
                },
                TokenList_columnsDef = [
                    (0, createColumn.p)({ columnId: "colorTokens", renderHeaderCell: () => (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: "Token" }) }),
                    (0, createColumn.p)({ columnId: "usageExample", renderHeaderCell: () => (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: "Usage example" }) }),
                ],
                TokenList = (props) => {
                    let styles = TokenList_style_useStyles(),
                        [columns] = react.useState(TokenList_columnsDef),
                        [columnSizingOptions] = react.useState({ colorTokens: { minWidth: 320 }, usageExample: { minWidth: 240 } }),
                        { brand, coveredTokens, colorOverrides, onNewOverride, themeOverrides, themeName } = props,
                        { columnSizing_unstable, tableRef, getRows } = (0, useTableFeatures.S)({ columns, items: coveredTokens }, [(0, useTableColumnSizing.v)({ columnSizingOptions })]);
                    return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: (0, jsx_runtime.jsxs)(Table.i, {
                            size: "medium",
                            "aria-label": "Table with color token and description",
                            ref: tableRef,
                            children: [
                                (0, jsx_runtime.jsx)(TableHeader.x, {
                                    children: (0, jsx_runtime.jsx)(TableRow.S, {
                                        children: columns.map((column) => (0, jsx_runtime.jsx)(TableHeaderCell.x, { ...columnSizing_unstable.getTableHeaderCellProps(column.columnId), children: column.renderHeaderCell() }, column.columnId)),
                                    }),
                                }),
                                (0, jsx_runtime.jsx)(TableBody.R, {
                                    children: getRows().map((row) => {
                                        let token = row.item,
                                            { colorValue, usage, handleColorChange, overridenTokens } = constructRowParameters(colorOverrides, token, onNewOverride, themeOverrides);
                                        return (0, jsx_runtime.jsxs)(
                                            TableRow.S,
                                            {
                                                children: [
                                                    (0, jsx_runtime.jsxs)(TableCell.p, {
                                                        className: styles.cellRow,
                                                        children: [
                                                            (0, jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    overridenTokens.includes(token)
                                                                        ? (0, jsx_runtime.jsx)(Badge_Badge.C, { className: styles.badge, appearance: "filled", color: "success", size: "tiny" })
                                                                        : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children: " " }),
                                                                    (0, jsx_runtime.jsx)(Subtitle2.T, { className: styles.colorLabel, children: token }),
                                                                ],
                                                            }),
                                                            (0, jsx_runtime.jsx)("div", {
                                                                className: styles.menu,
                                                                children: (0, jsx_runtime.jsxs)(Menu.v, {
                                                                    children: [
                                                                        (0, jsx_runtime.jsx)(MenuTrigger.b, {
                                                                            disableButtonEnhancement: !0,
                                                                            children: (0, jsx_runtime.jsxs)(MenuButton.j, {
                                                                                size: "small",
                                                                                shape: "circular",
                                                                                icon: (0, jsx_runtime.jsx)(chunk_1.MW6, { primaryFill: brand[colorValue] }),
                                                                                children: [themeName, " ", colorValue],
                                                                            }),
                                                                        }),
                                                                        (0, jsx_runtime.jsx)(MenuPopover.Y, {
                                                                            children: (0, jsx_runtime.jsx)(MenuList.q, {
                                                                                onCheckedValueChange: handleColorChange,
                                                                                children: brandRamp.map((brandValue) => {
                                                                                    let selected = colorValue === brandValue,
                                                                                        brandValueString = brandValue.toString();
                                                                                    return (0, jsx_runtime.jsx)(
                                                                                        "div",
                                                                                        {
                                                                                            children: (0, jsx_runtime.jsx)(TokenList_ColorTokenCol, {
                                                                                                token: token,
                                                                                                brand: brand,
                                                                                                brandValue: brandValue,
                                                                                                brandValueString: brandValueString,
                                                                                                selected: selected,
                                                                                            }),
                                                                                        },
                                                                                        brandValueString
                                                                                    );
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, jsx_runtime.jsx)(TableCell.p, { className: styles.cellRow, children: (0, jsx_runtime.jsx)("div", { children: usage }) }),
                                                ],
                                            },
                                            token
                                        );
                                    }),
                                }),
                            ],
                        }),
                    });
                };
            try {
                (TokenList.displayName = "TokenList"),
                    (TokenList.__docgenInfo = {
                        description: "",
                        displayName: "TokenList",
                        props: {
                            brand: { defaultValue: null, description: "", name: "brand", required: !0, type: { name: "BrandVariants" } },
                            themeName: { defaultValue: null, description: "", name: "themeName", required: !0, type: { name: "string" } },
                            themeOverrides: { defaultValue: null, description: "", name: "themeOverrides", required: !0, type: { name: "Partial<Theme>" } },
                            colorOverrides: { defaultValue: null, description: "", name: "colorOverrides", required: !0, type: { name: "ColorOverrideBrands" } },
                            coveredTokens: { defaultValue: null, description: "", name: "coveredTokens", required: !0, type: { name: "string[]" } },
                            onNewOverride: { defaultValue: null, description: "", name: "onNewOverride", required: !0, type: { name: "(color: string, newColor: Brands) => void" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/ColorTokens/TokenList.tsx#TokenList"] = {
                            docgenInfo: TokenList.__docgenInfo,
                            name: "TokenList",
                            path: "../../packages/react-components/theme-designer/src/components/ColorTokens/TokenList.tsx#TokenList",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var chunk_3 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-3.js"),
                chunk_8 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-8.js");
            let AccessibilityList_useStyles = (0, makeStyles_esm.Z)({ icon: { marginRight: "0.5em" } }),
                AccessibilityContrastChip = (props) => {
                    let styles = AccessibilityList_useStyles(),
                        { failKeys, testType } = props,
                        detailText = () =>
                            0 === failKeys.length
                                ? `All ${testType === TestType.contrastRatio ? "contrast requirements" : "luminosity suggestions"} met`
                                : testType === TestType.contrastRatio
                                ? `${failKeys.length} contrast issue${failKeys.length > 1 ? "s" : ""}`
                                : `${failKeys.length} luminosity warning${failKeys.length > 1 ? "s" : ""}`;
                    return (0, jsx_runtime.jsx)(Badge_Badge.C, {
                        appearance: "outline",
                        color: "important",
                        style: { justifyContent: "unset" },
                        children:
                            failKeys.length > 0
                                ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                      children: [
                                          testType === TestType.contrastRatio
                                              ? (0, jsx_runtime.jsx)(chunk_3.tzZ, { className: styles.icon, color: tokens.T.colorPaletteRedForeground1 })
                                              : (0, jsx_runtime.jsx)(chunk_8.wsM, { className: styles.icon, color: tokens.T.colorPaletteRedForeground1 }),
                                          detailText(),
                                      ],
                                  })
                                : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0, jsx_runtime.jsx)(chunk_1.rrV, { className: styles.icon, color: tokens.T.colorPaletteGreenForeground1 }), detailText()] }),
                    });
                },
                AccessibilityList = (props) => {
                    let { brand, theme, colorOverride, onNewOverride, themeOverrides, themeName } = props,
                        { all, failedContrastTests } = getAccessibilityChecker(theme),
                        failedContrastKeys = Array.from(new Set(failedContrastTests.map((test) => test.testInfo.currToken)).values());
                    return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: (0, jsx_runtime.jsxs)(Accordion.U, {
                            multiple: !0,
                            children: [
                                failedContrastKeys.length > 0
                                    ? (0, jsx_runtime.jsxs)(AccordionItem.Q, {
                                          value: "FailContrast",
                                          children: [
                                              (0, jsx_runtime.jsxs)(AccordionHeader._, {
                                                  children: ["Contrast Tests \xa0", " ", (0, jsx_runtime.jsx)(AccessibilityContrastChip, { failKeys: failedContrastKeys, testType: TestType.contrastRatio })],
                                              }),
                                              (0, jsx_runtime.jsx)(AccordionPanel.H, {
                                                  children: (0, jsx_runtime.jsx)(TokenIssueList, {
                                                      brand: brand,
                                                      testType: TestType.contrastRatio,
                                                      themeName: themeName,
                                                      colorOverrides: colorOverride,
                                                      themeOverrides: themeOverrides,
                                                      onNewOverride: onNewOverride,
                                                      coveredTokens: sortOverrideableColorTokens(failedContrastKeys),
                                                      tests: failedContrastTests,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, jsx_runtime.jsxs)(AccordionItem.Q, {
                                    value: "All Tokens",
                                    children: [
                                        (0, jsx_runtime.jsx)(AccordionHeader._, { children: "All Tokens" }),
                                        (0, jsx_runtime.jsx)(AccordionPanel.H, {
                                            children: (0, jsx_runtime.jsx)(TokenList, {
                                                brand: brand,
                                                themeName: themeName,
                                                themeOverrides: themeOverrides,
                                                colorOverrides: colorOverride,
                                                onNewOverride: onNewOverride,
                                                coveredTokens: sortOverrideableColorTokens(all),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
            try {
                (AccessibilityContrastChip.displayName = "AccessibilityContrastChip"),
                    (AccessibilityContrastChip.__docgenInfo = {
                        description: "",
                        displayName: "AccessibilityContrastChip",
                        props: {
                            failKeys: { defaultValue: null, description: "", name: "failKeys", required: !0, type: { name: "string[]" } },
                            testType: { defaultValue: null, description: "", name: "testType", required: !0, type: { name: "enum", value: [{ value: '"contrastRatio"' }, { value: '"luminosity"' }] } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/ColorTokens/AccessibilityList.tsx#AccessibilityContrastChip"] = {
                            docgenInfo: AccessibilityContrastChip.__docgenInfo,
                            name: "AccessibilityContrastChip",
                            path: "../../packages/react-components/theme-designer/src/components/ColorTokens/AccessibilityList.tsx#AccessibilityContrastChip",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (AccessibilityList.displayName = "AccessibilityList"),
                    (AccessibilityList.__docgenInfo = {
                        description: "",
                        displayName: "AccessibilityList",
                        props: {
                            brand: { defaultValue: null, description: "", name: "brand", required: !0, type: { name: "BrandVariants" } },
                            colorOverride: { defaultValue: null, description: "", name: "colorOverride", required: !0, type: { name: "ColorOverrideBrands" } },
                            themeOverrides: { defaultValue: null, description: "", name: "themeOverrides", required: !0, type: { name: "Partial<Theme>" } },
                            onNewOverride: { defaultValue: null, description: "", name: "onNewOverride", required: !0, type: { name: "(color: string, newColor: Brands) => void" } },
                            theme: { defaultValue: null, description: "", name: "theme", required: !0, type: { name: "Theme" } },
                            themeName: { defaultValue: null, description: "", name: "themeName", required: !0, type: { name: "string" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/ColorTokens/AccessibilityList.tsx#AccessibilityList"] = {
                            docgenInfo: AccessibilityList.__docgenInfo,
                            name: "AccessibilityList",
                            path: "../../packages/react-components/theme-designer/src/components/ColorTokens/AccessibilityList.tsx#AccessibilityList",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var Label = __webpack_require__("../../packages/react-components/react-label/src/components/Label/Label.tsx");
            let AccessibilityPanel = (props) => {
                let { lightThemeOverrides, darkThemeOverrides, brand } = props,
                    { failedContrastTests: failLight } = getAccessibilityChecker({ ...(0, createLightTheme.f)(brand), ...lightThemeOverrides }),
                    { failedContrastTests: failDark } = getAccessibilityChecker({ ...createDarkThemeWithUpdatedMapping(brand), ...darkThemeOverrides });
                return (0, jsx_runtime.jsxs)("div", {
                    style: { display: "flex", flexDirection: "column", gap: tokens.T.spacingVerticalM },
                    children: [
                        (0, jsx_runtime.jsx)(Label._, { children: "Light mode" }),
                        (0, jsx_runtime.jsx)(AccessibilityContrastChip, { failKeys: Object.keys(failLight), testType: TestType.contrastRatio }),
                        (0, jsx_runtime.jsx)(Label._, { style: { paddingTop: tokens.T.spacingVerticalXS }, children: "Dark mode" }),
                        (0, jsx_runtime.jsx)(AccessibilityContrastChip, { failKeys: Object.keys(failDark), testType: TestType.contrastRatio }),
                    ],
                });
            };
            try {
                (AccessibilityPanel.displayName = "AccessibilityPanel"),
                    (AccessibilityPanel.__docgenInfo = {
                        description: "",
                        displayName: "AccessibilityPanel",
                        props: {
                            lightThemeOverrides: { defaultValue: null, description: "", name: "lightThemeOverrides", required: !0, type: { name: "Partial<Theme>" } },
                            darkThemeOverrides: { defaultValue: null, description: "", name: "darkThemeOverrides", required: !0, type: { name: "Partial<Theme>" } },
                            brand: { defaultValue: null, description: "", name: "brand", required: !0, type: { name: "BrandVariants" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Sidebar/AccessibilityPanel.tsx#AccessibilityPanel"] = {
                            docgenInfo: AccessibilityPanel.__docgenInfo,
                            name: "AccessibilityPanel",
                            path: "../../packages/react-components/theme-designer/src/components/Sidebar/AccessibilityPanel.tsx#AccessibilityPanel",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            function useDebounce(value, delay) {
                let [debouncedValue, setDebouncedValue] = (0, react.useState)(value);
                return (
                    (0, react.useEffect)(() => {
                        var _document_defaultView;
                        let handler =
                            null == (_document_defaultView = document.defaultView)
                                ? void 0
                                : _document_defaultView.setTimeout(() => {
                                      setDebouncedValue(value);
                                  }, delay);
                        return () => {
                            clearTimeout(handler);
                        };
                    }, [value, delay]),
                    debouncedValue
                );
            }
            let Form_useStyles = (0, makeStyles_esm.Z)({
                    root: { backgroundColor: tokens.T.colorNeutralBackground3 },
                    inputs: { display: "flex", flexDirection: "column", alignItems: "flex-start" },
                    accordionContainer: { display: "flex", flexDirection: "column", rowGap: tokens.T.spacingVerticalL, minWidth: "200px" },
                    keyColor: { paddingLeft: "0px" },
                    labels: { display: "grid", gridTemplateColumns: "135px 30px", columnGap: tokens.T.spacingVerticalL },
                    colorPicker: { ...index_esm.q5.border("1px", "solid", tokens.T.colorNeutralStroke1), ...index_esm.q5.borderRadius("25px"), height: "30px", width: "30px", ...index_esm.q5.overflow("hidden") },
                    color: { ...index_esm.q5.padding("0px"), ...index_esm.q5.border("0px"), opacity: "0" },
                    slider: { display: "grid", gridTemplateColumns: "115px 50px", columnGap: "15px" },
                    element: { alignItems: "center", display: "flex", justifyContent: "center" },
                    labelName: { display: "flex", flexDirection: "column", ...index_esm.q5.gap("2px"), maxWidth: "400px" },
                    export: { alignItems: "center", display: "flex", justifyContent: "flex-end", paddingRight: "20px" },
                }),
                Form = () => {
                    let styles = Form_useStyles(),
                        sidebarId = (0, useId.Me)(),
                        {
                            dispatch,
                            state: { isDark, themeName, darkThemeOverrides, lightThemeOverrides, brand, keyColorHex },
                        } = useThemeDesigner(),
                        themeNameInputId = (0, useId.Me)("themeNameInputId"),
                        handleIsDarkChange = () => {
                            dispatch({ type: "isDark", payload: !isDark });
                        },
                        [keyColor, setKeyColor] = react.useState(keyColorHex),
                        [hueTorsion, setHueTorsion] = react.useState(0),
                        [vibrancy, setVibrancy] = react.useState(0),
                        debounceKeyColor = useDebounce(keyColor, 20),
                        debounceHueTorsion = useDebounce(hueTorsion, 20),
                        debounceVibrancy = useDebounce(vibrancy, 20);
                    react.useEffect(() => {
                        dispatch({ type: "updateThemeWithCustomerAttributes", payload: { keyColor: debounceKeyColor.padEnd(7, "0"), hueTorsion: debounceHueTorsion / 100, vibrancy: debounceVibrancy / 100 } });
                    }, [dispatch, debounceKeyColor, debounceHueTorsion, debounceVibrancy]);
                    let generateHexColor = (e) => "#" + e.target.value.replace(/\W/g, "").toUpperCase(),
                        handleKeyColorChange = (e) => {
                            let newHexColor = generateHexColor(e);
                            setKeyColor(newHexColor);
                        },
                        handleKeyColorBlur = () => {
                            setKeyColor(keyColorHex.padEnd(6, "0"));
                        },
                        handleHueTorsionChange = (e) => {
                            setHueTorsion(parseInt(e.target.value || "0", 10));
                        },
                        handleVibrancyChange = (e) => {
                            setVibrancy(parseInt(e.target.value || "0", 10));
                        },
                        handleThemeNameChange = (e) => {
                            let newName = e.target.value;
                            if (0 === newName.length) dispatch({ type: "themeName", payload: defaultThemePlaceholderName });
                            else {
                                let camelizeName = e.target.value
                                    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => (0 === idx ? ltr.toLowerCase() : ltr.toUpperCase()))
                                    .replace(/\s+/g, "")
                                    .replace(/[^A-Za-z0-9@]*/g, "");
                                dispatch({ type: "themeName", payload: camelizeName });
                            }
                        },
                        showExportButton = () => {
                            dispatch({ type: "showExportPanel", payload: !0 });
                        };
                    return (0, jsx_runtime.jsx)("div", {
                        className: styles.root,
                        role: "tabpanel",
                        "aria-labelledby": "Edit",
                        children: (0, jsx_runtime.jsxs)(Accordion.U, {
                            defaultOpenItems: ["1", "2", "3"],
                            multiple: !0,
                            children: [
                                (0, jsx_runtime.jsxs)(AccordionItem.Q, {
                                    value: "1",
                                    children: [
                                        (0, jsx_runtime.jsx)(AccordionHeader._, { children: (0, jsx_runtime.jsx)(Caption1Stronger.x, { children: "Step 1 - Color settings" }) }),
                                        (0, jsx_runtime.jsxs)(AccordionPanel.H, {
                                            className: styles.accordionContainer,
                                            children: [
                                                (0, jsx_runtime.jsx)("div", {
                                                    className: styles.inputs,
                                                    children: (0, jsx_runtime.jsxs)("div", {
                                                        className: styles.labels,
                                                        children: [
                                                            (0, jsx_runtime.jsx)(Field.g, {
                                                                label: "Key color value",
                                                                children: (0, jsx_runtime.jsx)(Input.I, {
                                                                    className: styles.keyColor,
                                                                    size: "large",
                                                                    appearance: "underline",
                                                                    value: keyColor,
                                                                    onChange: handleKeyColorChange,
                                                                    maxLength: 7,
                                                                    onBlur: handleKeyColorBlur,
                                                                }),
                                                            }),
                                                            (0, jsx_runtime.jsx)("div", {
                                                                className: styles.colorPicker,
                                                                style: { backgroundColor: keyColor },
                                                                children: (0, jsx_runtime.jsx)("input", { className: styles.color, type: "color", id: sidebarId + "keyColor Color", onChange: handleKeyColorChange }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, jsx_runtime.jsx)("div", {
                                                    children: (0, jsx_runtime.jsx)(Field.g, {
                                                        label: "Hue Torsion",
                                                        children: (0, jsx_runtime.jsxs)("div", {
                                                            className: styles.slider,
                                                            children: [
                                                                (0, jsx_runtime.jsx)(Slider.i, { size: "small", min: -50, max: 50, value: hueTorsion, onChange: handleHueTorsionChange }),
                                                                (0, jsx_runtime.jsx)(Input.I, { size: "small", type: "number", min: -50, max: 50, appearance: "outline", value: hueTorsion.toString(), onChange: handleHueTorsionChange }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, jsx_runtime.jsx)("div", {
                                                    children: (0, jsx_runtime.jsx)(Field.g, {
                                                        label: "Vibrancy",
                                                        children: (0, jsx_runtime.jsxs)("div", {
                                                            className: styles.slider,
                                                            children: [
                                                                (0, jsx_runtime.jsx)(Slider.i, { size: "small", min: -50, max: 50, value: vibrancy, onChange: handleVibrancyChange }),
                                                                (0, jsx_runtime.jsx)(Input.I, { size: "small", type: "number", min: -50, max: 50, appearance: "outline", value: vibrancy.toString(), onChange: handleVibrancyChange }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, jsx_runtime.jsxs)(AccordionItem.Q, {
                                    value: "2",
                                    children: [
                                        (0, jsx_runtime.jsx)(AccordionHeader._, { children: (0, jsx_runtime.jsx)(Caption1Stronger.x, { children: "Step 2 - Accessibility checks" }) }),
                                        (0, jsx_runtime.jsxs)(AccordionPanel.H, {
                                            className: styles.accordionContainer,
                                            children: [
                                                (0, jsx_runtime.jsx)(Switch.r, { checked: isDark, onChange: handleIsDarkChange, label: "Dark theme" }),
                                                (0, jsx_runtime.jsx)(AccessibilityPanel, { darkThemeOverrides: darkThemeOverrides, brand: brand, lightThemeOverrides: lightThemeOverrides }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, jsx_runtime.jsxs)(AccordionItem.Q, {
                                    value: "3",
                                    children: [
                                        (0, jsx_runtime.jsx)(AccordionHeader._, { children: (0, jsx_runtime.jsx)(Caption1Stronger.x, { children: "Step 3 - Export" }) }),
                                        (0, jsx_runtime.jsxs)(AccordionPanel.H, {
                                            className: styles.accordionContainer,
                                            children: [
                                                (0, jsx_runtime.jsx)("div", {
                                                    className: styles.labelName,
                                                    children: (0, jsx_runtime.jsx)(Field.g, {
                                                        label: "Theme name",
                                                        children: (0, jsx_runtime.jsx)(Input.I, {
                                                            appearance: "outline",
                                                            id: themeNameInputId,
                                                            onChange: handleThemeNameChange,
                                                            placeholder: defaultThemePlaceholderName,
                                                            value: themeName === defaultThemePlaceholderName ? "" : themeName,
                                                        }),
                                                    }),
                                                }),
                                                (0, jsx_runtime.jsx)(Button.z, { size: "small", appearance: "primary", onClick: showExportButton, children: "Export" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
            try {
                (Form.displayName = "Form"),
                    (Form.__docgenInfo = { description: "", displayName: "Form", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Sidebar/Form.tsx#Form"] = {
                            docgenInfo: Form.__docgenInfo,
                            name: "Form",
                            path: "../../packages/react-components/theme-designer/src/components/Sidebar/Form.tsx#Form",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            let Sidebar_useStyles = (0, makeStyles_esm.Z)({
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        ...index_esm.q5.borderRight("1px", "solid", tokens.T.colorNeutralStroke1),
                        ...index_esm.q5.gap(tokens.T.spacingVerticalXXL, tokens.T.spacingHorizontalXXL),
                        backgroundColor: tokens.T.colorNeutralBackground3,
                    },
                }),
                Sidebar = (props) => {
                    let styles = Sidebar_useStyles();
                    return (0, jsx_runtime.jsx)("div", { className: (0, mergeClasses_esm.z)(styles.root, props.className), children: (0, jsx_runtime.jsx)(Form, {}) });
                };
            try {
                (Sidebar.displayName = "Sidebar"),
                    (Sidebar.__docgenInfo = { description: "", displayName: "Sidebar", props: { className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } } } }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Sidebar/Sidebar.tsx#Sidebar"] = {
                            docgenInfo: Sidebar.__docgenInfo,
                            name: "Sidebar",
                            path: "../../packages/react-components/theme-designer/src/components/Sidebar/Sidebar.tsx#Sidebar",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var Divider = __webpack_require__("../../packages/react-components/react-divider/src/components/Divider/Divider.tsx"),
                Caption1 = __webpack_require__("../../packages/react-components/react-text/src/components/presets/Caption1/Caption1.tsx"),
                Persona = __webpack_require__("../../packages/react-components/react-persona/src/components/Persona/Persona.tsx"),
                TabList = __webpack_require__("../../packages/react-components/react-tabs/src/components/TabList/TabList.tsx"),
                Tab = __webpack_require__("../../packages/react-components/react-tabs/src/components/Tab/Tab.tsx"),
                Dropdown = __webpack_require__("../../packages/react-components/react-combobox/src/components/Dropdown/Dropdown.tsx"),
                Option = __webpack_require__("../../packages/react-components/react-combobox/src/components/Option/Option.tsx"),
                Checkbox = __webpack_require__("../../packages/react-components/react-checkbox/src/components/Checkbox/Checkbox.tsx"),
                RadioGroup = __webpack_require__("../../packages/react-components/react-radio/src/components/RadioGroup/RadioGroup.tsx"),
                Radio = __webpack_require__("../../packages/react-components/react-radio/src/components/Radio/Radio.tsx"),
                Link = __webpack_require__("../../packages/react-components/react-link/src/components/Link/Link.tsx"),
                chunk_6 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-6.js");
            let Demo_useStyles = (0, makeStyles_esm.Z)({
                    root: { display: "flex", justifyContent: "space-between" },
                    column: { display: "flex", flexDirection: "column", justifyContent: "start", boxSizing: "border-box", ...index_esm.q5.gap(tokens.T.spacingVerticalL) },
                    controlRow: { display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "center", ...index_esm.q5.gap(tokens.T.spacingHorizontalL) },
                    controlColumn: { display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" },
                    inputLabel: { display: "flex", flexDirection: "column", alignItems: "start", ...index_esm.q5.gap(tokens.T.spacingVerticalS) },
                    icons: { display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto", gridRowGap: tokens.T.spacingVerticalS, gridColumnGap: tokens.T.spacingHorizontalS, justifyContent: "center" },
                    avatar: { display: "flex", ...index_esm.q5.gap(tokens.T.spacingVerticalL) },
                    avatarText: { display: "flex", flexDirection: "column", justifyContent: "left" },
                }),
                Column1 = () => {
                    let styles = Demo_useStyles(),
                        dropdownId = (0, useId.Me)("dropdown-default");
                    return (0, jsx_runtime.jsxs)("div", {
                        className: styles.column,
                        children: [
                            (0, jsx_runtime.jsx)("div", {
                                className: styles.avatar,
                                children: (0, jsx_runtime.jsx)(Persona.I, { name: "Cameron Evans", secondaryText: "Senior Researcher at Contoso", avatar: { color: "brand", badge: { status: "available" } } }),
                            }),
                            (0, jsx_runtime.jsxs)(TabList.t, {
                                defaultSelectedValue: "tab1",
                                children: [
                                    (0, jsx_runtime.jsx)(Tab.O, { value: "tab1", children: "Home" }),
                                    (0, jsx_runtime.jsx)(Tab.O, { value: "tab2", children: "Pages" }),
                                    (0, jsx_runtime.jsx)(Tab.O, { value: "tab3", children: "Documents" }),
                                ],
                            }),
                            (0, jsx_runtime.jsx)(Field.g, {
                                children: (0, jsx_runtime.jsx)(Input.I, {
                                    placeholder: "Find",
                                    contentAfter: (0, jsx_runtime.jsx)(Button.z, { "aria-label": "Find", appearance: "transparent", icon: (0, jsx_runtime.jsx)(chunk_6.dOe, {}), size: "small" }),
                                }),
                            }),
                            (0, jsx_runtime.jsxs)(Dropdown.L, {
                                "aria-labelledby": dropdownId,
                                placeholder: "Select",
                                inlinePopup: !0,
                                children: [
                                    (0, jsx_runtime.jsx)(Option.W, { value: "Action 1", children: "Action 1" }),
                                    (0, jsx_runtime.jsx)(Option.W, { value: "Action 2", children: "Action 2 " }),
                                    (0, jsx_runtime.jsx)(Option.W, { value: "Action 3", children: "Action 3" }),
                                ],
                            }),
                        ],
                    });
                },
                Column2 = () => {
                    let styles = Demo_useStyles();
                    return (0, jsx_runtime.jsxs)("div", {
                        className: styles.column,
                        children: [
                            (0, jsx_runtime.jsxs)("div", {
                                className: styles.controlRow,
                                children: [
                                    (0, jsx_runtime.jsx)(Button.z, { appearance: "primary", children: "Text" }),
                                    (0, jsx_runtime.jsxs)("div", { className: styles.controlColumn, children: [(0, jsx_runtime.jsx)(Switch.r, { defaultChecked: !0, label: "On" }), (0, jsx_runtime.jsx)(Switch.r, { label: "Off" })] }),
                                ],
                            }),
                            (0, jsx_runtime.jsx)(Slider.i, { defaultValue: 50 }),
                            (0, jsx_runtime.jsxs)("div", {
                                className: styles.controlRow,
                                children: [
                                    (0, jsx_runtime.jsxs)("div", {
                                        className: styles.controlColumn,
                                        children: [(0, jsx_runtime.jsx)(Checkbox.X, { defaultChecked: !0, label: "Option 1" }), (0, jsx_runtime.jsx)(Checkbox.X, { label: "Option 2" })],
                                    }),
                                    (0, jsx_runtime.jsx)("div", {
                                        className: styles.controlColumn,
                                        children: (0, jsx_runtime.jsxs)(RadioGroup.E, { children: [(0, jsx_runtime.jsx)(Radio.Y, { defaultChecked: !0, label: "Option 1" }), (0, jsx_runtime.jsx)(Radio.Y, { label: "Option 2" })] }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Column3 = () => {
                    let styles = Demo_useStyles();
                    return (0, jsx_runtime.jsxs)("div", {
                        className: styles.column,
                        children: [
                            (0, jsx_runtime.jsx)("div", {
                                className: styles.inputLabel,
                                children: (0, jsx_runtime.jsx)(Field.g, { label: "Description", required: !0, children: (0, jsx_runtime.jsx)(Input.I, { placeholder: "Example Text", appearance: "filled-darker" }) }),
                            }),
                            (0, jsx_runtime.jsx)(Link.r, { href: "https://www.microsoft.com", children: "Example link - www.microsoft.com" }),
                        ],
                    });
                },
                Demo = (props) => {
                    let styles = Demo_useStyles();
                    return (0, jsx_runtime.jsx)("div", {
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: (0, mergeClasses_esm.z)(styles.root, props.className),
                            children: [(0, jsx_runtime.jsx)(Column1, {}), (0, jsx_runtime.jsx)(Column2, {}), (0, jsx_runtime.jsx)(Column3, {})],
                        }),
                    });
                };
            try {
                (Demo.displayName = "Demo"),
                    (Demo.__docgenInfo = { description: "", displayName: "Demo", props: { className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } } } }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Demo/Demo.tsx#Demo"] = {
                            docgenInfo: Demo.__docgenInfo,
                            name: "Demo",
                            path: "../../packages/react-components/theme-designer/src/components/Demo/Demo.tsx#Demo",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var utils_bundleIcon = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/utils/bundleIcon.js"),
                chunk_2 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-2.js");
            let hexCopyClassName = "hexCopy",
                Palette_useStyles = (0, makeStyles_esm.Z)({
                    root: { display: "flex", height: "150px", justifyContent: "space-evenly" },
                    block: { display: "grid", gridTemplateColumns: "0.5em auto", gridTemplateRows: "0.5em 1fr 1fr 0.5em", flexGrow: 1, flexShrink: 0, ":hover": { flexShrink: 1 }, [`:hover .${hexCopyClassName}`]: { display: "flex" } },
                    hexCopy: { display: "none", justifyContent: "space-between", gridColumnStart: 2, gridRowStart: 2 },
                    brandKey: { justifyContent: "left", display: "flex", alignItems: "flex-end", gridColumnStart: 2, gridRowStart: 3 },
                }),
                getBrands = (colors) => Object.keys(colors).map((color) => parseInt(color, 10)),
                Palette = (props) => {
                    let styles = Palette_useStyles(),
                        {
                            state: { brand },
                        } = useThemeDesigner(),
                        CopyIcon = (0, utils_bundleIcon.Z)(chunk_2.rIV, chunk_2.cv$);
                    return (0, jsx_runtime.jsxs)("div", {
                        children: [
                            (0, jsx_runtime.jsx)(Caption1.d, { children: "Generated palette" }),
                            (0, jsx_runtime.jsx)("div", {
                                className: (0, mergeClasses_esm.z)(styles.root, props.className),
                                children: getBrands(brand).map((brandKey) => {
                                    let brandColor = brand[brandKey].toUpperCase(),
                                        textColor = 4.5 >= contrast(hex_to_sRGB(brandColor), hex_to_sRGB("#FFFFFF")) ? "black" : "white";
                                    return (0, jsx_runtime.jsxs)(
                                        "div",
                                        {
                                            className: styles.block,
                                            style: { backgroundColor: brandColor, color: textColor },
                                            onClick: () => {
                                                navigator.clipboard.writeText(brandColor);
                                            },
                                            children: [
                                                (0, jsx_runtime.jsxs)("div", {
                                                    className: `${styles.hexCopy} ${hexCopyClassName}`,
                                                    children: [
                                                        (0, jsx_runtime.jsx)(Text.x, { children: brandColor }),
                                                        (0, jsx_runtime.jsx)(Button.z, {
                                                            size: "small",
                                                            appearance: "transparent",
                                                            icon: (0, jsx_runtime.jsx)(CopyIcon, { color: textColor }),
                                                            onClick: () => navigator.clipboard.writeText(brandColor),
                                                        }),
                                                    ],
                                                }),
                                                (0, jsx_runtime.jsx)(Text.x, { className: styles.brandKey, children: brandKey }),
                                            ],
                                        },
                                        brandKey
                                    );
                                }),
                            }),
                        ],
                    });
                };
            try {
                (Palette.displayName = "Palette"),
                    (Palette.__docgenInfo = { description: "", displayName: "Palette", props: { className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } } } }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Palette/Palette.tsx#Palette"] = {
                            docgenInfo: Palette.__docgenInfo,
                            name: "Palette",
                            path: "../../packages/react-components/theme-designer/src/components/Palette/Palette.tsx#Palette",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            let ColorTokens = (props) => {
                let {
                        state: { brand, isDark, themeWithOverrides, darkBrandOverrides, lightBrandOverrides, lightThemeOverrides, darkThemeOverrides, themeName },
                        dispatch,
                    } = useThemeDesigner(),
                    brandColorOverrides = isDark ? darkBrandOverrides : lightBrandOverrides,
                    themeOverrides = isDark ? darkThemeOverrides : lightThemeOverrides,
                    onNewOverride = (color, newColor) => {
                        dispatch({ type: "addOverride", payload: { colorToken: color, newColor: brand[newColor], brand: newColor } });
                    },
                    handleResetClick = () => {
                        dispatch({ type: "reset" });
                    };
                return (0, jsx_runtime.jsxs)("div", {
                    children: [
                        (0, jsx_runtime.jsx)(Button.z, { size: "small", onClick: handleResetClick, children: "Reset Customizations" }),
                        (0, jsx_runtime.jsx)(AccessibilityList, { themeOverrides: themeOverrides, brand: brand, themeName: themeName, colorOverride: brandColorOverrides, onNewOverride: onNewOverride, theme: themeWithOverrides }),
                    ],
                });
            };
            try {
                (ColorTokens.displayName = "ColorTokens"),
                    (ColorTokens.__docgenInfo = { description: "", displayName: "ColorTokens", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/ColorTokens/ColorTokens.tsx#ColorTokens"] = {
                            docgenInfo: ColorTokens.__docgenInfo,
                            name: "ColorTokens",
                            path: "../../packages/react-components/theme-designer/src/components/ColorTokens/ColorTokens.tsx#ColorTokens",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var dedent = __webpack_require__("../../node_modules/dedent/dist/dedent.js"),
                Body1 = __webpack_require__("../../packages/react-components/react-text/src/components/presets/Body1/Body1.tsx"),
                Textarea = __webpack_require__("../../packages/react-components/react-textarea/src/components/Textarea/Textarea.tsx"),
                sizedIcons_chunk_8 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-8.js");
            let getBrandValues = (brand, overrideList, name, spacer) => {
                    let hexToBrand = {};
                    return (
                        brandRamp.map((i) => {
                            hexToBrand[brand[i]] = name + "[" + `${i}` + "]";
                        }),
                        Object.keys(overrideList).map((token) => "\n" + spacer + token + ": " + hexToBrand[overrideList[token]]) + "\n"
                    );
                },
                objectToString = (input, spacer) => Object.keys(input).map((key) => "\n" + spacer + key + ': "' + input[key].toUpperCase() + '"') + "\n";
            var api_define = __webpack_require__("../../node_modules/codesandbox-import-utils/lib/api/define.js");
            let defaultFileToPreview = encodeURIComponent("/index.tsx"),
                ExportLink = () => {
                    let {
                            state: { themeName, brand, darkThemeOverrides, lightThemeOverrides },
                        } = useThemeDesigner(),
                        content = dedent`
  import * as React from "react";
  import {
    makeStaticStyles,
    makeStyles,
    shorthands,
    tokens,
    Avatar,
    Badge,
    Body1,
    Button,
    Caption1,
    Caption2,
    Checkbox,
    FluentProvider,
    Input,
    Menu,
    MenuButton,
    MenuItemCheckbox,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    Tab,
    TabList,
    Title3,
    useId,
    Dropdown, 
    Option 
  } from "@fluentui/react-components";
  import type { Theme } from "@fluentui/react-components";
  import {
    bundleIcon,
    CalendarLtrFilled,
    CalendarLtrRegular,
    ChevronRightRegular,
    MeetNowFilled,
    MeetNowRegular,
    SearchRegular,
  } from "@fluentui/react-icons";

  export interface ContentProps {
    lightTheme: Theme;
    darkTheme: Theme;
  }

  const useStaticStyles = makeStaticStyles({
    body: {
      position: "fixed",
      margin: "0px",
      top: "0px",
      left: "0px",
      height: "100vh"
    }
  });

  const useStyles = makeStyles({
    root: {
      display: "grid",
      gridTemplateRows: "50vh 50vh"
    },
    row: {
      height: "50vh",
      display: "grid",
      alignItems: "start",
      justifyContent: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto",
      gridColumnGap: tokens.spacingHorizontalXXXL
    },
    col2: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...shorthands.gap(tokens.spacingVerticalL),
    },
    col3: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(4, auto)',
      gridRowGap: tokens.spacingVerticalS,
      gridColumnGap: tokens.spacingHorizontalS,
      justifyContent: 'center',
      alignItems: 'center',
    },
    twoCol: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    controls: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'auto auto',
      gridRowGap: tokens.spacingVerticalS,
      gridColumnGap: tokens.spacingHorizontalS,
      justifyContent: 'center',
    },
    avatar: {
      display: 'flex',
      ...shorthands.gap(tokens.spacingVerticalL),
    },
    avatarText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
    },
  });

  export const Column1 = () => {
    const styles = useStyles();
    return (
      <div className={styles.col1}>
        <Title3 block>Make an impression</Title3>
        <Body1 block>
          Make a big impression with this clean, modern, and mobile-friendly site. Use it to communicate information to
          people inside or outside your team. Share your ideas, results, and more in this visually compelling format.
        </Body1>
        <div className={styles.avatar}>
          <Avatar
            color="brand"
            initials="CE"
            badge={{
              status: 'available',
              'aria-label': 'available',
            }}
          />
          <div className={styles.avatarText}>
            Cameron Evans
            <Caption2>Senior Researcher at Contoso</Caption2>
          </div>
        </div>
      </div>
    );
  };

  export const DemoMenu = () => {
    const CutIcon = bundleIcon(CutFilled, CutRegular);
    const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
    const EditIcon = bundleIcon(EditFilled, EditRegular);
    return (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton>Select </MenuButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
              Cut
            </MenuItemCheckbox>
            <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste">
              Paste
            </MenuItemCheckbox>
            <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit">
              Edit
            </MenuItemCheckbox>
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  };

  export const Column2 = () => {
    const styles = useStyles();
    const dropdownId = useId('dropdown-default');
    return (
      <div className={styles.col2}>
        <TabList defaultSelectedValue="tab1">
          <Tab value="tab1">Home</Tab>
          <Tab value="tab2">Pages</Tab>
          <Tab value="tab3">Documents</Tab>
        </TabList>
        <Input
          placeholder="Find"
          contentAfter={<Button aria-label="Find" appearance="transparent" icon={<SearchRegular />} size="small" />}
        />
        <Dropdown aria-labelledby={dropdownId} placeholder="Select" inlinePopup>
          <Option value="Action 1">Action 1</Option>
          <Option value="Action 2">Action 2 </Option>
          <Option value="Action 3">Action 3</Option>
        </Dropdown>
      </div>
    );
  };

  export const DemoIcons = () => {
    const styles = useStyles();
    const MeetNowIcon = bundleIcon(MeetNowFilled, MeetNowRegular);
    const CalendarLtrIcon = bundleIcon(CalendarLtrFilled, CalendarLtrRegular);
    return (
      <div className={styles.icons}>
        <Badge size="medium" appearance="filled" icon={<CalendarLtrIcon />} />
        <Badge size="medium" appearance="ghost" icon={<CalendarLtrIcon />} />
        <Badge size="medium" appearance="outline" icon={<MeetNowIcon />} />
        <Badge size="medium" appearance="tint" icon={<MeetNowIcon />} />
      </div>
    );
  };

  export const Column3 = () => {
    const styles = useStyles();
    return (
      <div className={styles.col3}>
        <Button appearance="primary">Sign Up</Button>
        <Button
          appearance="transparent"
          icon={<ChevronRightRegular />}
          iconPosition="after"
        >
          Learn More
        </Button>
        <Slider className={styles.twoCol} defaultValue={50} />
        <DemoIcons />
        <div className={styles.controls}>
          <Switch defaultChecked={true} label="On" />
          <Switch label="Off" />
        </div>
        <div className={styles.controls}>
          <Checkbox defaultChecked={true} label="Option 1" />
          <Checkbox label="Option 2" />
        </div>
        <div className={styles.controls}>
          <RadioGroup>
            <Radio defaultChecked={true} label="Option 1" />
            <Radio label="Option 2" />
          </RadioGroup>
        </div>
      </div>
    );
  };

  export const Example: React.FC<ContentProps> = (props) => {
    const styles = useStyles();
    useStaticStyles();
    return (
      <div className={styles.root}>
        <FluentProvider theme={props.lightTheme}>
          <Caption1>Light Theme</Caption1>
          <div className={styles.row}>
            <Column1 />
            <Column2 />
            <Column3 />
          </div>
        </FluentProvider>
        <FluentProvider theme={props.darkTheme}>
          <Caption1>Dark Theme</Caption1>
          <div className={styles.row}>
            <Column1 />
            <Column2 />
            <Column3 />
          </div>
        </FluentProvider>
      </div>
    );
  };
  `,
                        createIndexContent = dedent`
  import * as ReactDOM from 'react-dom';
  import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

  import type { BrandVariants, Theme } from '@fluentui/react-components';
  import { Example } from './example';

  const ${themeName}: BrandVariants = { ${objectToString(brand, "\xa0\xa0")} };

  const lightTheme: Theme = {
    ...createLightTheme(${themeName}), ${getBrandValues(brand, lightThemeOverrides, themeName, "\xa0\xa0")} };

  const darkTheme: Theme = {
    ...createDarkTheme(${themeName}), ${getBrandValues(brand, darkThemeOverrides, themeName, "\xa0\xa0")} };

  darkTheme.colorBrandForeground1 = ${themeName}[110]; // use brand[110] instead of brand[100]
  darkTheme.colorBrandForeground2 = ${themeName}[120]; // use brand[120] instead of brand[110]

  ReactDOM.render(
    <Example lightTheme={lightTheme} darkTheme={darkTheme} />,
    document.getElementById('root'),
  );
  `,
                        packageContent = dedent`
  {"dependencies":{"@fluentui/react-components":"^9","react":"^17","react-dom":"^17","react-scripts":"latest"}}
  `,
                        link = react.useMemo(() => {
                            let codeSandboxParameters = (0, api_define.Z)({
                                files: {
                                    "example.tsx": { isBinary: !1, content },
                                    "index.html": { isBinary: !1, content: '<div id="root"></div>' },
                                    "index.tsx": { isBinary: !1, content: createIndexContent },
                                    "package.json": { isBinary: !1, content: packageContent },
                                },
                            });
                            return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${codeSandboxParameters}&query=file%3D${defaultFileToPreview}`;
                        }, [content, createIndexContent, packageContent]);
                    return (0, jsx_runtime.jsx)("div", { children: (0, jsx_runtime.jsx)(Link.r, { href: link, target: "_blank", children: "Preview theme in CodeSandbox" }) });
                },
                ExportPanel_useStyles = (0, makeStyles_esm.Z)({
                    root: { alignItems: "center", display: "flex", justifyContent: "flex-end", paddingRight: "20px" },
                    exportHeader: { display: "grid", gridTemplateColumns: "350px 50px", alignItems: "center" },
                    popover: { width: "300px" },
                    text: { display: "flex", height: "50vh" },
                    textarea: { height: "100%", boxSizing: "border-box" },
                }),
                ExportPanel = () => {
                    let {
                            dispatch,
                            state: { showExportPanel, themeName, brand, lightThemeOverrides, darkThemeOverrides },
                        } = useThemeDesigner(),
                        onCloseExportPanel = () => {
                            dispatch({ type: "showExportPanel", payload: !1 });
                        },
                        styles = ExportPanel_useStyles(),
                        [selectedValue, setSelectedValue] = react.useState("Code"),
                        onTabSelect = (event, data) => {
                            setSelectedValue(data.value);
                        },
                        codeValue = dedent`
  const ${themeName}: BrandVariants = { ${objectToString(brand, "\xa0\xa0")} };

  const lightTheme: Theme = {
    ...createLightTheme(${themeName}), ${getBrandValues(brand, lightThemeOverrides, themeName, "\xa0\xa0")} };

  const darkTheme: Theme = {
    ...createDarkTheme(${themeName}), ${getBrandValues(brand, darkThemeOverrides, themeName, "\xa0\xa0")} };
  

  darkTheme.colorBrandForeground1 = ${themeName}[110];
  darkTheme.colorBrandForeground2 = ${themeName}[120];
  `,
                        jsonLightValue = dedent`
   ${JSON.stringify({ ...(0, createLightTheme.f)(brand), ...lightThemeOverrides }, null, "	")}`,
                        jsonDarkValue = dedent`
     ${JSON.stringify({ ...(0, createDarkTheme.d)(brand), colorBrandForeground1: brand[110], colorBrandForeground2: brand[120], ...darkThemeOverrides }, null, "	")} 
  `,
                        exportedValue = react.useMemo(() => {
                            switch (selectedValue) {
                                case "Code":
                                    return codeValue;
                                case "JSONLight":
                                    return jsonLightValue;
                                case "JSONDark":
                                    return jsonDarkValue;
                                default:
                                    return "";
                            }
                        }, [codeValue, jsonLightValue, jsonDarkValue, selectedValue]),
                        onClickCopyToClipboard = () => {
                            navigator.clipboard.writeText(exportedValue);
                        };
                    return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children:
                            showExportPanel &&
                            (0, jsx_runtime.jsx)(FluentProvider.r, {
                                theme: lightTheme.w,
                                children: (0, jsx_runtime.jsx)("div", {
                                    style: {
                                        zIndex: 100,
                                        position: "absolute",
                                        top: "0px",
                                        right: "0px",
                                        width: "400px",
                                        border: `1px solid ${tokens.T.colorNeutralStroke1}`,
                                        borderRadius: tokens.T.borderRadiusXLarge,
                                        backgroundColor: tokens.T.colorNeutralBackground1,
                                        boxShadow: tokens.T.shadow64,
                                    },
                                    children: (0, jsx_runtime.jsxs)("div", {
                                        style: { margin: "16px" },
                                        children: [
                                            (0, jsx_runtime.jsxs)("div", {
                                                className: styles.exportHeader,
                                                children: [
                                                    (0, jsx_runtime.jsx)(Text.x, { as: "h1", id: "headingID", size: 500, children: "Export Theme" }),
                                                    (0, jsx_runtime.jsx)(Button.z, { size: "small", appearance: "subtle", icon: (0, jsx_runtime.jsx)(sizedIcons_chunk_8.bhb, {}), onClick: onCloseExportPanel }),
                                                ],
                                            }),
                                            (0, jsx_runtime.jsx)("br", {}),
                                            (0, jsx_runtime.jsx)(Body1.m, {
                                                children: "Passing this theme to a FluentProvider will automatically apply it to any Fluent components below it. You can also export this to CodeSandbox with a few component examples below.",
                                            }),
                                            (0, jsx_runtime.jsx)("br", {}),
                                            (0, jsx_runtime.jsxs)(TabList.t, {
                                                defaultSelectedValue: "Code",
                                                selectedValue: selectedValue,
                                                onTabSelect: onTabSelect,
                                                children: [
                                                    (0, jsx_runtime.jsx)(Tab.O, { value: "Code", children: "Code" }),
                                                    (0, jsx_runtime.jsx)(Tab.O, { value: "JSONLight", children: "JSON (light)" }),
                                                    (0, jsx_runtime.jsx)(Tab.O, { value: "JSONDark", children: "JSON (dark)" }),
                                                ],
                                            }),
                                            (0, jsx_runtime.jsx)(Textarea.g, { className: styles.text, size: "small", value: exportedValue, id: "textArea", textarea: { className: styles.textarea }, readOnly: !0 }),
                                            (0, jsx_runtime.jsx)("br", {}),
                                            (0, jsx_runtime.jsx)(ExportLink, {}),
                                            (0, jsx_runtime.jsx)("br", {}),
                                            (0, jsx_runtime.jsx)(Button.z, { appearance: "primary", onClick: onClickCopyToClipboard, children: "Copy to clipboard" }),
                                        ],
                                    }),
                                }),
                            }),
                    });
                },
                Content_useStyles = (0, makeStyles_esm.Z)({
                    root: { display: "flex", alignItems: "stretch", flexDirection: "column", minWidth: "750px", ...index_esm.q5.padding("40px", "10%"), ...index_esm.q5.margin("0", "auto"), gridRowGap: tokens.T.spacingVerticalXXXL },
                    sickerSheet: { display: "flex", flexDirection: "column", gridRowGap: tokens.T.spacingVerticalM },
                }),
                Content = (props) => {
                    let styles = Content_useStyles(),
                        {
                            state: { themeWithOverrides },
                        } = useThemeDesigner();
                    return (0, jsx_runtime.jsxs)(FluentProvider.r, {
                        theme: themeWithOverrides,
                        children: [
                            (0, jsx_runtime.jsx)(ExportPanel, {}),
                            (0, jsx_runtime.jsxs)("div", {
                                className: (0, mergeClasses_esm.z)(styles.root, props.className),
                                children: [
                                    (0, jsx_runtime.jsx)("h1", { style: { marginBottom: 0 }, children: "Fluent Theme Designer" }),
                                    (0, jsx_runtime.jsx)(Text.x, {
                                        children:
                                            "Welcome to the Fluent Theme Designer tool. This tool offers a step-by-step process to help you implement your organization’s brand colors within Microsoft products using Fluent 2. Inputting your organization’s key color value will output a 16-color ramp that passes contrast checks when used in tokens and implemented with Fluent 2 components.",
                                    }),
                                    (0, jsx_runtime.jsx)(Palette, {}),
                                    (0, jsx_runtime.jsxs)("div", { className: styles.sickerSheet, children: [(0, jsx_runtime.jsx)(Divider.i, {}), (0, jsx_runtime.jsx)(Caption1.d, { children: "Sticker sheet" })] }),
                                    (0, jsx_runtime.jsx)(Demo, {}),
                                    (0, jsx_runtime.jsx)(Divider.i, {}),
                                    (0, jsx_runtime.jsx)(ColorTokens, {}),
                                ],
                            }),
                        ],
                    });
                };
            try {
                (Content.displayName = "Content"),
                    (Content.__docgenInfo = { description: "", displayName: "Content", props: { className: { defaultValue: null, description: "", name: "className", required: !1, type: { name: "string" } } } }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/components/Content/Content.tsx#Content"] = {
                            docgenInfo: Content.__docgenInfo,
                            name: "Content",
                            path: "../../packages/react-components/theme-designer/src/components/Content/Content.tsx#Content",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            let ThemeDesigner = (props) => {
                let styles = useStyles();
                return (0, jsx_runtime.jsx)(FluentProvider.r, {
                    theme: lightTheme.w,
                    children: (0, jsx_runtime.jsx)(ThemeDesignerContextProvider, {
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: styles.root,
                            children: [(0, jsx_runtime.jsx)(Header, { className: styles.nav }), (0, jsx_runtime.jsx)(Sidebar, { className: styles.sidebar }), (0, jsx_runtime.jsx)(Content, { className: styles.content })],
                        }),
                    }),
                });
            };
            try {
                (ThemeDesigner.displayName = "ThemeDesigner"),
                    (ThemeDesigner.__docgenInfo = { description: "", displayName: "ThemeDesigner", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/theme-designer/src/ThemeDesigner.tsx#ThemeDesigner"] = {
                            docgenInfo: ThemeDesigner.__docgenInfo,
                            name: "ThemeDesigner",
                            path: "../../packages/react-components/theme-designer/src/ThemeDesigner.tsx#ThemeDesigner",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var _excluded = ["components"];
            function _extends() {
                return (_extends = Object.assign
                    ? Object.assign.bind()
                    : function (target) {
                          for (var i = 1; i < arguments.length; i++) {
                              var source = arguments[i];
                              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                          }
                          return target;
                      }).apply(this, arguments);
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = _objectWithoutPropertiesLoose(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++) (key = sourceSymbolKeys[i]), !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = {},
                    sourceKeys = Object.keys(source);
                for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                return target;
            }
            var layoutProps = {},
                MDXLayout = "wrapper";
            function MDXContent(_ref) {
                var components = _ref.components,
                    props = _objectWithoutProperties(_ref, _excluded);
                return (0, esm.kt)(
                    MDXLayout,
                    _extends({}, layoutProps, props, { components: components, mdxType: "MDXLayout" }),
                    (0, esm.kt)(dist_esm.h_, { title: "Theme/Theme Designer", mdxType: "Meta" }),
                    (0, esm.kt)(ThemeDesigner, { mdxType: "ThemeDesigner" })
                );
            }
            (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
            var __page = function () {
                throw Error("Docs-only story");
            };
            __page.parameters = { docsOnly: !0 };
            var componentMeta = { title: "Theme/Theme Designer", includeStories: ["__page"] },
                mdxStoryNameToKey = {};
            (componentMeta.parameters = componentMeta.parameters || {}),
                (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
                    page: function () {
                        return (0, esm.kt)(dist_esm.aT, { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentAnnotations: componentMeta }, (0, esm.kt)(MDXContent, null));
                    },
                }));
            let ThemeDesigner_stories = componentMeta;
            var __namedExportsOrder = ["__page"];
        },
        "../../node_modules/core-js/modules/es.array.index-of.js": (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__("../../node_modules/core-js/internals/export.js"),
                $indexOf = __webpack_require__("../../node_modules/core-js/internals/array-includes.js").indexOf,
                arrayMethodIsStrict = __webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js"),
                nativeIndexOf = [].indexOf,
                NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0,
                STRICT_METHOD = arrayMethodIsStrict("indexOf");
            $(
                { target: "Array", proto: !0, forced: NEGATIVE_ZERO || !STRICT_METHOD },
                {
                    indexOf: function (searchElement) {
                        return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            );
        },
        "../../node_modules/core-js/modules/es.function.bind.js": (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__("../../node_modules/core-js/internals/export.js")({ target: "Function", proto: !0 }, { bind: __webpack_require__("../../node_modules/core-js/internals/function-bind.js") });
        },
        "../../packages/react-components/react-badge/src/components/Badge/Badge.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { C: () => Badge });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-badge/src/components/Badge/useBadge.ts"),
                _useBadgeStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-badge/src/components/Badge/useBadgeStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts"),
                _renderBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-badge/src/components/Badge/renderBadge.tsx");
            let Badge = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useBadge__WEBPACK_IMPORTED_MODULE_1__.m)(props, ref);
                return (
                    (0, _useBadgeStyles_styles__WEBPACK_IMPORTED_MODULE_2__.n)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useBadgeStyles_unstable")(state),
                    (0, _renderBadge__WEBPACK_IMPORTED_MODULE_4__.a)(state)
                );
            });
            Badge.displayName = "Badge";
            try {
                (Badge.displayName = "Badge"),
                    (Badge.__docgenInfo = {
                        description: "Define a styled Badge, using the `useBadge_unstable` hook.",
                        displayName: "Badge",
                        props: {
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            icon: {
                                defaultValue: null,
                                description: "",
                                name: "icon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            appearance: {
                                defaultValue: null,
                                description: "A Badge can be filled, outline, ghost, inverted\n@defaultvalue filled",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"outline"' }, { value: '"filled"' }, { value: '"ghost"' }, { value: '"tint"' }] },
                            },
                            color: {
                                defaultValue: null,
                                description: "A Badge can be one of preset colors\n@defaultvalue brand",
                                name: "color",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: '"brand"' }, { value: '"subtle"' }, { value: '"warning"' }, { value: '"success"' }, { value: '"danger"' }, { value: '"important"' }, { value: '"informative"' }, { value: '"severe"' }],
                                },
                            },
                            iconPosition: {
                                defaultValue: null,
                                description: "A Badge can position the icon before or after the content.\n@defaultvalue before",
                                name: "iconPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }] },
                            },
                            shape: {
                                defaultValue: null,
                                description: "A Badge can be square, circular or rounded.\n@defaultvalue circular",
                                name: "shape",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"circular"' }, { value: '"square"' }, { value: '"rounded"' }] },
                            },
                            size: {
                                defaultValue: null,
                                description: "A Badge can be on of several preset sizes.\n@defaultvalue medium",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }, { value: '"extra-small"' }, { value: '"extra-large"' }, { value: '"tiny"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-badge/src/components/Badge/Badge.tsx#Badge"] = {
                            docgenInfo: Badge.__docgenInfo,
                            name: "Badge",
                            path: "../../packages/react-components/react-badge/src/components/Badge/Badge.tsx#Badge",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-badge/src/components/Badge/useBadgeStyles.styles.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { n: () => useBadgeStyles_unstable });
            var _griffel_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@griffel/react/makeResetStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let badgeClassNames = { root: "fui-Badge", icon: "fui-Badge__icon" },
                textPadding = _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXXS,
                useRootClassName = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_1__.h)({
                    display: "inline-flex",
                    boxSizing: "border-box",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    ..._fluentui_react_theme__WEBPACK_IMPORTED_MODULE_2__.w.caption1Strong,
                    height: "20px",
                    width: "20px",
                    minWidth: "max-content",
                    padding: `0 calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS} + ${textPadding})`,
                    borderRadius: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusCircular,
                    borderColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorTransparentStroke,
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        borderStyle: "solid",
                        borderColor: "inherit",
                        borderWidth: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.strokeWidthThin,
                        borderRadius: "inherit",
                    },
                }),
                useRootStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.Z)({
                    fontSmallToTiny: { ..._fluentui_react_theme__WEBPACK_IMPORTED_MODULE_2__.w.caption2Strong },
                    tiny: { width: "6px", height: "6px", fontSize: "4px", lineHeight: "4px", minWidth: "unset", ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.padding("unset") },
                    "extra-small": { width: "10px", height: "10px", fontSize: "6px", lineHeight: "6px", minWidth: "unset", ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.padding("unset") },
                    small: { width: "16px", height: "16px", ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.padding(0, `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXXS} + ${textPadding})`) },
                    medium: {},
                    large: { width: "24px", height: "24px", ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.padding(0, `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS} + ${textPadding})`) },
                    "extra-large": { width: "32px", height: "32px", ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.padding(0, `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalSNudge} + ${textPadding})`) },
                    square: { ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusNone) },
                    rounded: { ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusMedium) },
                    roundedSmallToTiny: { ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall) },
                    circular: {},
                    borderGhost: { "::after": { display: "none" } },
                    filled: {},
                    "filled-brand": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandBackground, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundOnBrand },
                    "filled-danger": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedBackground3, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundOnBrand },
                    "filled-important": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1 },
                    "filled-informative": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground5, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3 },
                    "filled-severe": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeBackground3, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundOnBrand },
                    "filled-subtle": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1 },
                    "filled-success": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenBackground3, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundOnBrand },
                    "filled-warning": { backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowBackground3, color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1Static },
                    ghost: {},
                    "ghost-brand": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1 },
                    "ghost-danger": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedForeground3 },
                    "ghost-important": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1 },
                    "ghost-informative": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3 },
                    "ghost-severe": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground3 },
                    "ghost-subtle": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundStaticInverted },
                    "ghost-success": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground3 },
                    "ghost-warning": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowForeground2 },
                    outline: { ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor("currentColor") },
                    "outline-brand": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1 },
                    "outline-danger": {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedBorder2),
                    },
                    "outline-important": {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralStrokeAccessible),
                    },
                    "outline-informative": {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralStroke2),
                    },
                    "outline-severe": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground3 },
                    "outline-subtle": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForegroundStaticInverted },
                    "outline-success": {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenBorder2),
                    },
                    "outline-warning": { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowForeground2 },
                    tint: {},
                    "tint-brand": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandBackground2,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandStroke2),
                    },
                    "tint-danger": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedBackground1,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedForeground1,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteRedBorder1),
                    },
                    "tint-important": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorTransparentStroke),
                    },
                    "tint-informative": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground4,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralStroke2),
                    },
                    "tint-severe": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeBackground1,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeBorder1),
                    },
                    "tint-subtle": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralStroke2),
                    },
                    "tint-success": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenBackground1,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenBorder1),
                    },
                    "tint-warning": {
                        backgroundColor: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowBackground1,
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowForeground1,
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_4__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteYellowBorder1),
                    },
                }),
                useIconRootClassName = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_1__.h)({ display: "flex", lineHeight: "1", margin: `0 calc(-1 * ${textPadding})`, fontSize: "12px" }),
                useIconStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.Z)({
                    beforeText: { marginRight: `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXXS} + ${textPadding})` },
                    afterText: { marginLeft: `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXXS} + ${textPadding})` },
                    beforeTextXL: { marginRight: `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS} + ${textPadding})` },
                    afterTextXL: { marginLeft: `calc(${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS} + ${textPadding})` },
                    tiny: { fontSize: "6px" },
                    "extra-small": { fontSize: "10px" },
                    small: { fontSize: "12px" },
                    medium: {},
                    large: { fontSize: "16px" },
                    "extra-large": { fontSize: "20px" },
                }),
                useBadgeStyles_unstable = (state) => {
                    let rootClassName = useRootClassName(),
                        rootStyles = useRootStyles(),
                        smallToTiny = "small" === state.size || "extra-small" === state.size || "tiny" === state.size;
                    state.root.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_5__.z)(
                        badgeClassNames.root,
                        rootClassName,
                        smallToTiny && rootStyles.fontSmallToTiny,
                        rootStyles[state.size],
                        rootStyles[state.shape],
                        "rounded" === state.shape && smallToTiny && rootStyles.roundedSmallToTiny,
                        "ghost" === state.appearance && rootStyles.borderGhost,
                        rootStyles[state.appearance],
                        rootStyles[`${state.appearance}-${state.color}`],
                        state.root.className
                    );
                    let iconRootClassName = useIconRootClassName(),
                        iconStyles = useIconStyles();
                    if (state.icon) {
                        let iconPositionClass;
                        state.root.children &&
                            (iconPositionClass =
                                "extra-large" === state.size ? ("after" === state.iconPosition ? iconStyles.afterTextXL : iconStyles.beforeTextXL) : "after" === state.iconPosition ? iconStyles.afterText : iconStyles.beforeText),
                            (state.icon.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_5__.z)(badgeClassNames.icon, iconRootClassName, iconPositionClass, iconStyles[state.size], state.icon.className));
                    }
                    return state;
                };
        },
        "../../packages/react-components/react-combobox/src/components/Dropdown/Dropdown.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { L: () => Dropdown });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js"),
                useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                chunk_1 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-1.js"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                useTimeout = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useTimeout.ts"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                mergeCallbacks = __webpack_require__("../../packages/react-components/react-utilities/src/utils/mergeCallbacks.ts"),
                dropdownKeyActions = __webpack_require__("../../packages/react-components/react-combobox/src/utils/dropdownKeyActions.ts"),
                useComboboxBaseState = __webpack_require__("../../packages/react-components/react-combobox/src/utils/useComboboxBaseState.ts"),
                useComboboxPopup = __webpack_require__("../../packages/react-components/react-combobox/src/utils/useComboboxPopup.ts"),
                useTriggerListboxSlots = __webpack_require__("../../packages/react-components/react-combobox/src/utils/useTriggerListboxSlots.ts"),
                Listbox = __webpack_require__("../../packages/react-components/react-combobox/src/components/Listbox/Listbox.tsx"),
                useMergedRefs = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useMergedRefs.ts");
            let useDropdown_unstable = (props, ref) => {
                let triggerSlot, listboxSlot;
                props = (0, useFieldControlProps.k)(props, { supportsLabelFor: !0, supportsSize: !0 });
                let baseState = (0, useComboboxBaseState.x)(props),
                    { activeOption, getIndexOfId, getOptionsMatchingText, open, setActiveOption, setFocusVisible, setOpen } = baseState,
                    { primary: triggerNativeProps, root: rootNativeProps } = (0, getNativeElementProps.$)({ props, primarySlotTagName: "button", excludedPropNames: ["children"] }),
                    rootRef = react.useRef(null),
                    [popupWidth, setPopupWidth] = react.useState();
                react.useEffect(() => {
                    var _rootRef_current;
                    let width = open ? `${null == (_rootRef_current = rootRef.current) ? void 0 : _rootRef_current.clientWidth}px` : void 0;
                    setPopupWidth(width);
                }, [open]);
                let searchString = react.useRef(""),
                    [setKeyTimeout, clearKeyTimeout] = (0, useTimeout.K)(),
                    getNextMatchingOption = () => {
                        var _matches_;
                        let matcher = (optionText) => 0 === optionText.toLowerCase().indexOf(searchString.current),
                            matches = getOptionsMatchingText(matcher),
                            startIndex = activeOption ? getIndexOfId(activeOption.id) : 0;
                        if ((open && 1 === searchString.current.length && startIndex++, !matches.length)) {
                            let letters = searchString.current.split(""),
                                allSameLetter = letters.length && letters.every((letter) => letter === letters[0]);
                            allSameLetter && (startIndex++, (matches = getOptionsMatchingText((matcher = (optionText) => 0 === optionText.toLowerCase().indexOf(letters[0])))));
                        }
                        if (matches.length > 1 && activeOption) {
                            let nextMatch = matches.find((option) => getIndexOfId(option.id) >= startIndex);
                            return null != nextMatch ? nextMatch : matches[0];
                        }
                        return null != (_matches_ = matches[0]) ? _matches_ : void 0;
                    },
                    onTriggerKeyDown = (ev) => {
                        if ((clearKeyTimeout(), "Type" === (0, dropdownKeyActions.I)(ev))) {
                            (searchString.current += ev.key.toLowerCase()),
                                setKeyTimeout(() => {
                                    searchString.current = "";
                                }, 500),
                                open || setOpen(ev, !0);
                            let nextOption = getNextMatchingOption();
                            setActiveOption(nextOption), setFocusVisible(!0);
                        }
                    };
                ((triggerSlot = (0, resolveShorthand.O)(props.button, { required: !0, defaultProps: { type: "button", children: baseState.value || props.placeholder, ...triggerNativeProps } })).onKeyDown = (0, mergeCallbacks.E)(
                    onTriggerKeyDown,
                    triggerSlot.onKeyDown
                )),
                    (listboxSlot = baseState.open || baseState.hasFocus ? (0, resolveShorthand.O)(props.listbox, { required: !0, defaultProps: { children: props.children, style: { width: popupWidth } } }) : void 0),
                    ([triggerSlot, listboxSlot] = (0, useComboboxPopup.o)(props, triggerSlot, listboxSlot)),
                    ([triggerSlot, listboxSlot] = (0, useTriggerListboxSlots.e)(props, baseState, ref, triggerSlot, listboxSlot));
                let state = {
                    components: { root: "div", button: "button", expandIcon: "span", listbox: Listbox.R },
                    root: (0, resolveShorthand.O)(props.root, { required: !0, defaultProps: { "aria-owns": props.inlinePopup ? void 0 : null == listboxSlot ? void 0 : listboxSlot.id, children: props.children, ...rootNativeProps } }),
                    button: triggerSlot,
                    listbox: listboxSlot,
                    expandIcon: (0, resolveShorthand.O)(props.expandIcon, { required: !0, defaultProps: { children: (0, jsx_runtime.jsx)(chunk_1.X9O, {}) } }),
                    placeholderVisible: !baseState.value && !!props.placeholder,
                    ...baseState,
                };
                return (state.root.ref = (0, useMergedRefs.r)(state.root.ref, rootRef)), state;
            };
            try {
                (useDropdown_unstable.displayName = "useDropdown_unstable"),
                    (useDropdown_unstable.__docgenInfo = {
                        description: "Create the state required to render Dropdown.\n\nThe returned state can be modified with hooks such as useDropdownStyles_unstable,\nbefore being passed to renderDropdown_unstable.",
                        displayName: "useDropdown_unstable",
                        props: {
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            button: {
                                defaultValue: null,
                                description: "",
                                name: "button",
                                required: !1,
                                type: {
                                    name: 'WithSlotShorthandValue<{ as?: "button"; } & Pick<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof ButtonHTMLAttributes<...>> & { ...; } & { ...; }>',
                                },
                            },
                            listbox: {
                                defaultValue: null,
                                description: "",
                                name: "listbox",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ListboxSlots, "root"> & Omit<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }, "ref"> & SelectionProps & RefAttributes<...>>> | null',
                                },
                            },
                            expandIcon: {
                                defaultValue: null,
                                description: "",
                                name: "expandIcon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"button"' }] } },
                            defaultSelectedOptions: {
                                defaultValue: null,
                                description: "For an uncontrolled component, sets the initial selection.\nIf this is set, the `defaultValue` prop MUST also be set.",
                                name: "defaultSelectedOptions",
                                required: !1,
                                type: { name: "string[]" },
                            },
                            multiselect: {
                                defaultValue: { value: "false" },
                                description: "Sets the selection type to multiselect.\nSet this to true for multiselect, even if fully controlling selection state.\nThis enables styles and accessibility properties to be set.",
                                name: "multiselect",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            onOptionSelect: { defaultValue: null, description: "", name: "onOptionSelect", required: !1, type: { name: "((event: SelectionEvents, data: OptionOnSelectData) => void)" } },
                            selectedOptions: {
                                defaultValue: null,
                                description: "An array of selected option keys.\nUse this with `onOptionSelect` to directly control the selected option(s)\nIf this is set, the `value` prop MUST also be controlled.",
                                name: "selectedOptions",
                                required: !1,
                                type: { name: "string[]" },
                            },
                            appearance: {
                                defaultValue: { value: "'outline'" },
                                description: "Controls the colors and borders of the combobox trigger.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"outline"' }, { value: '"underline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }] },
                            },
                            defaultOpen: { defaultValue: null, description: "The default open state when open is uncontrolled", name: "defaultOpen", required: !1, type: { name: "boolean" } },
                            inlinePopup: {
                                defaultValue: null,
                                description: "Render the combobox's popup inline in the DOM.\nThis has accessibility benefits, particularly for touch screen readers.",
                                name: "inlinePopup",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            onOpenChange: {
                                defaultValue: null,
                                description: "Callback when the open/closed state of the dropdown changes",
                                name: "onOpenChange",
                                required: !1,
                                type: { name: "((e: ComboboxBaseOpenEvents, data: ComboboxBaseOpenChangeData) => void)" },
                            },
                            open: {
                                defaultValue: null,
                                description: "Sets the open/closed state of the dropdown.\nUse together with onOpenChange to fully control the dropdown's visibility",
                                name: "open",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            positioning: { defaultValue: null, description: "Configure the positioning of the combobox dropdown\n@defaultvalue below", name: "positioning", required: !1, type: { name: "PositioningShorthand" } },
                            size: {
                                defaultValue: { value: "'medium'" },
                                description: "Controls the size of the combobox faceplate",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-combobox/src/components/Dropdown/useDropdown.tsx#useDropdown_unstable"] = {
                            docgenInfo: useDropdown_unstable.__docgenInfo,
                            name: "useDropdown_unstable",
                            path: "../../packages/react-components/react-combobox/src/components/Dropdown/useDropdown.tsx#useDropdown_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var Portal = __webpack_require__("../../packages/react-components/react-portal/src/components/Portal/Portal.tsx"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts"),
                ComboboxContext = __webpack_require__("../../packages/react-components/react-combobox/src/contexts/ComboboxContext.ts");
            let renderDropdown_unstable = (state, contextValues) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(
                    slots.root,
                    slotProps.root,
                    (0, createElement.a)(
                        ComboboxContext.c.Provider,
                        { value: contextValues.combobox },
                        (0, createElement.a)(slots.button, slotProps.button, slotProps.button.children, slots.expandIcon && (0, createElement.a)(slots.expandIcon, slotProps.expandIcon)),
                        slots.listbox && (state.inlinePopup ? (0, createElement.a)(slots.listbox, slotProps.listbox) : (0, createElement.a)(Portal.h, null, (0, createElement.a)(slots.listbox, slotProps.listbox)))
                    )
                );
            };
            try {
                (renderDropdown_unstable.displayName = "renderDropdown_unstable"),
                    (renderDropdown_unstable.__docgenInfo = { description: "Render the final JSX of Dropdown", displayName: "renderDropdown_unstable", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-combobox/src/components/Dropdown/renderDropdown.tsx#renderDropdown_unstable"] = {
                            docgenInfo: renderDropdown_unstable.__docgenInfo,
                            name: "renderDropdown_unstable",
                            path: "../../packages/react-components/react-combobox/src/components/Dropdown/renderDropdown.tsx#renderDropdown_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                internalTokens = __webpack_require__("../../packages/react-components/react-combobox/src/utils/internalTokens.ts");
            let dropdownClassNames = { root: "fui-Dropdown", button: "fui-Dropdown__button", expandIcon: "fui-Dropdown__expandIcon", listbox: "fui-Dropdown__listbox" },
                useStyles = (0, makeStyles_esm.Z)({
                    root: {
                        ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
                        boxSizing: "border-box",
                        display: "inline-block",
                        minWidth: "250px",
                        position: "relative",
                        ":focus-within": { outlineWidth: "2px", outlineStyle: "solid", outlineColor: "transparent" },
                        "::after": {
                            boxSizing: "border-box",
                            content: '""',
                            position: "absolute",
                            left: "-1px",
                            bottom: "-1px",
                            right: "-1px",
                            height: `max(${tokens.T.strokeWidthThick}, ${tokens.T.borderRadiusMedium})`,
                            borderBottomLeftRadius: tokens.T.borderRadiusMedium,
                            borderBottomRightRadius: tokens.T.borderRadiusMedium,
                            ...index_esm.q5.borderBottom(tokens.T.strokeWidthThick, "solid", tokens.T.colorCompoundBrandStroke),
                            clipPath: "inset(calc(100% - 2px) 0 0 0)",
                            transform: "scaleX(0)",
                            transitionProperty: "transform",
                            transitionDuration: tokens.T.durationUltraFast,
                            transitionDelay: tokens.T.curveAccelerateMid,
                            "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                        },
                        ":focus-within::after": {
                            transform: "scaleX(1)",
                            transitionProperty: "transform",
                            transitionDuration: tokens.T.durationNormal,
                            transitionDelay: tokens.T.curveDecelerateMid,
                            "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                        },
                        ":focus-within:active::after": { borderBottomColor: tokens.T.colorCompoundBrandStrokePressed },
                    },
                    listbox: { boxShadow: `${tokens.T.shadow16}`, ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium), maxHeight: "80vh" },
                    listboxCollapsed: { display: "none" },
                    button: {
                        alignItems: "center",
                        backgroundColor: tokens.T.colorTransparentBackground,
                        ...index_esm.q5.border("0"),
                        boxSizing: "border-box",
                        color: tokens.T.colorNeutralForeground1,
                        columnGap: tokens.T.spacingHorizontalXXS,
                        cursor: "pointer",
                        display: "grid",
                        fontFamily: tokens.T.fontFamilyBase,
                        gridTemplateColumns: "[content] 1fr [icon] auto [end]",
                        justifyContent: "space-between",
                        textAlign: "left",
                        width: "100%",
                        "&:focus": { outlineStyle: "none" },
                    },
                    placeholder: { color: tokens.T.colorNeutralForeground4 },
                    small: { ...typographyStyles.w.caption1, ...index_esm.q5.padding("3px", tokens.T.spacingHorizontalSNudge, "3px", `calc(${tokens.T.spacingHorizontalSNudge} + ${tokens.T.spacingHorizontalXXS})`) },
                    medium: { ...typographyStyles.w.body1, ...index_esm.q5.padding("5px", tokens.T.spacingHorizontalMNudge, "5px", `calc(${tokens.T.spacingHorizontalMNudge} + ${tokens.T.spacingHorizontalXXS})`) },
                    large: {
                        columnGap: tokens.T.spacingHorizontalSNudge,
                        ...typographyStyles.w.body2,
                        ...index_esm.q5.padding("7px", tokens.T.spacingHorizontalM, "7px", `calc(${tokens.T.spacingHorizontalM} + ${tokens.T.spacingHorizontalSNudge})`),
                    },
                    outline: { backgroundColor: tokens.T.colorNeutralBackground1, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStroke1), borderBottomColor: tokens.T.colorNeutralStrokeAccessible },
                    outlineInteractive: {
                        "&:hover": { ...index_esm.q5.borderColor(tokens.T.colorNeutralStroke1Hover), borderBottomColor: tokens.T.colorNeutralStrokeAccessible },
                        "&:active": { ...index_esm.q5.borderColor(tokens.T.colorNeutralStroke1Pressed), borderBottomColor: tokens.T.colorNeutralStrokeAccessible },
                    },
                    underline: { backgroundColor: tokens.T.colorTransparentBackground, ...index_esm.q5.borderBottom(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStrokeAccessible), ...index_esm.q5.borderRadius(0) },
                    "filled-lighter": { backgroundColor: tokens.T.colorNeutralBackground1, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", "transparent") },
                    "filled-darker": { backgroundColor: tokens.T.colorNeutralBackground3, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", "transparent") },
                    invalid: { ":not(:focus-within),:hover:not(:focus-within)": { ...index_esm.q5.borderColor(tokens.T.colorPaletteRedBorder2) } },
                    invalidUnderline: { ":not(:focus-within),:hover:not(:focus-within)": { borderBottomColor: tokens.T.colorPaletteRedBorder2 } },
                    disabled: {
                        cursor: "not-allowed",
                        backgroundColor: tokens.T.colorTransparentBackground,
                        ...index_esm.q5.borderColor(tokens.T.colorNeutralStrokeDisabled),
                        "@media (forced-colors: active)": { ...index_esm.q5.borderColor("GrayText") },
                    },
                    disabledText: { color: tokens.T.colorNeutralForegroundDisabled, cursor: "not-allowed" },
                }),
                useIconStyles = (0, makeStyles_esm.Z)({
                    icon: { boxSizing: "border-box", color: tokens.T.colorNeutralStrokeAccessible, display: "block", fontSize: tokens.T.fontSizeBase500, gridColumnStart: "icon", gridColumnEnd: "end", "& svg": { display: "block" } },
                    small: { fontSize: internalTokens._.small, marginLeft: tokens.T.spacingHorizontalXXS },
                    medium: { fontSize: internalTokens._.medium, marginLeft: tokens.T.spacingHorizontalXXS },
                    large: { fontSize: internalTokens._.large, marginLeft: tokens.T.spacingHorizontalSNudge },
                    disabled: { color: tokens.T.colorNeutralForegroundDisabled },
                }),
                useDropdownStyles_unstable = (state) => {
                    let { appearance, open, placeholderVisible, size } = state,
                        invalid = "true" == `${state.button["aria-invalid"]}`,
                        disabled = state.button.disabled,
                        styles = useStyles(),
                        iconStyles = useIconStyles();
                    return (
                        (state.root.className = (0, mergeClasses_esm.z)(
                            dropdownClassNames.root,
                            styles.root,
                            styles[appearance],
                            !disabled && "outline" === appearance && styles.outlineInteractive,
                            invalid && "underline" !== appearance && styles.invalid,
                            invalid && "underline" === appearance && styles.invalidUnderline,
                            disabled && styles.disabled,
                            state.root.className
                        )),
                        (state.button.className = (0, mergeClasses_esm.z)(dropdownClassNames.button, styles.button, styles[size], placeholderVisible && styles.placeholder, disabled && styles.disabledText, state.button.className)),
                        state.listbox && (state.listbox.className = (0, mergeClasses_esm.z)(dropdownClassNames.listbox, styles.listbox, !open && styles.listboxCollapsed, state.listbox.className)),
                        state.expandIcon && (state.expandIcon.className = (0, mergeClasses_esm.z)(dropdownClassNames.expandIcon, iconStyles.icon, iconStyles[size], disabled && iconStyles.disabled, state.expandIcon.className)),
                        state
                    );
                };
            var useComboboxContextValues = __webpack_require__("../../packages/react-components/react-combobox/src/contexts/useComboboxContextValues.ts"),
                CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Dropdown = react.forwardRef((props, ref) => {
                let state = useDropdown_unstable(props, ref),
                    contextValues = (0, useComboboxContextValues.l)(state);
                return useDropdownStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useDropdownStyles_unstable")(state), renderDropdown_unstable(state, contextValues);
            });
            Dropdown.displayName = "Dropdown";
            try {
                (Dropdown.displayName = "Dropdown"),
                    (Dropdown.__docgenInfo = {
                        description: "Dropdown component: a selection control that allows users to choose from a set of possible options",
                        displayName: "Dropdown",
                        props: {
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            button: {
                                defaultValue: null,
                                description: "",
                                name: "button",
                                required: !1,
                                type: {
                                    name: 'WithSlotShorthandValue<{ as?: "button"; } & Pick<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof ButtonHTMLAttributes<...>> & { ...; } & { ...; }>',
                                },
                            },
                            listbox: {
                                defaultValue: null,
                                description: "",
                                name: "listbox",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ListboxSlots, "root"> & Omit<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }, "ref"> & SelectionProps & RefAttributes<...>>> | null',
                                },
                            },
                            expandIcon: {
                                defaultValue: null,
                                description: "",
                                name: "expandIcon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"button"' }] } },
                            defaultSelectedOptions: {
                                defaultValue: null,
                                description: "For an uncontrolled component, sets the initial selection.\nIf this is set, the `defaultValue` prop MUST also be set.",
                                name: "defaultSelectedOptions",
                                required: !1,
                                type: { name: "string[]" },
                            },
                            multiselect: {
                                defaultValue: { value: "false" },
                                description: "Sets the selection type to multiselect.\nSet this to true for multiselect, even if fully controlling selection state.\nThis enables styles and accessibility properties to be set.",
                                name: "multiselect",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            onOptionSelect: { defaultValue: null, description: "", name: "onOptionSelect", required: !1, type: { name: "((event: SelectionEvents, data: OptionOnSelectData) => void)" } },
                            selectedOptions: {
                                defaultValue: null,
                                description: "An array of selected option keys.\nUse this with `onOptionSelect` to directly control the selected option(s)\nIf this is set, the `value` prop MUST also be controlled.",
                                name: "selectedOptions",
                                required: !1,
                                type: { name: "string[]" },
                            },
                            appearance: {
                                defaultValue: { value: "'outline'" },
                                description: "Controls the colors and borders of the combobox trigger.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"outline"' }, { value: '"underline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }] },
                            },
                            defaultOpen: { defaultValue: null, description: "The default open state when open is uncontrolled", name: "defaultOpen", required: !1, type: { name: "boolean" } },
                            inlinePopup: {
                                defaultValue: null,
                                description: "Render the combobox's popup inline in the DOM.\nThis has accessibility benefits, particularly for touch screen readers.",
                                name: "inlinePopup",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            onOpenChange: {
                                defaultValue: null,
                                description: "Callback when the open/closed state of the dropdown changes",
                                name: "onOpenChange",
                                required: !1,
                                type: { name: "((e: ComboboxBaseOpenEvents, data: ComboboxBaseOpenChangeData) => void)" },
                            },
                            open: {
                                defaultValue: null,
                                description: "Sets the open/closed state of the dropdown.\nUse together with onOpenChange to fully control the dropdown's visibility",
                                name: "open",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            positioning: { defaultValue: null, description: "Configure the positioning of the combobox dropdown\n@defaultvalue below", name: "positioning", required: !1, type: { name: "PositioningShorthand" } },
                            size: {
                                defaultValue: { value: "'medium'" },
                                description: "Controls the size of the combobox faceplate",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-combobox/src/components/Dropdown/Dropdown.tsx#Dropdown"] = {
                            docgenInfo: Dropdown.__docgenInfo,
                            name: "Dropdown",
                            path: "../../packages/react-components/react-combobox/src/components/Dropdown/Dropdown.tsx#Dropdown",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-divider/src/components/Divider/Divider.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { i: () => Divider });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _renderDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-divider/src/components/Divider/renderDivider.tsx"),
                _useDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-divider/src/components/Divider/useDivider.ts"),
                _useDividerStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-divider/src/components/Divider/useDividerStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Divider = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useDivider__WEBPACK_IMPORTED_MODULE_1__.R)(props, ref);
                return (
                    (0, _useDividerStyles_styles__WEBPACK_IMPORTED_MODULE_2__.K)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useDividerStyles_unstable")(state),
                    (0, _renderDivider__WEBPACK_IMPORTED_MODULE_4__.D)(state)
                );
            });
            Divider.displayName = "Divider";
            try {
                (Divider.displayName = "Divider"),
                    (Divider.__docgenInfo = {
                        description: "A divider visually segments content into groups.",
                        displayName: "Divider",
                        props: {
                            wrapper: {
                                defaultValue: null,
                                description: "Accessibility wrapper for content when presented.",
                                name: "wrapper",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            alignContent: {
                                defaultValue: { value: "'center'" },
                                description: "Determines the alignment of the content within the divider.",
                                name: "alignContent",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"end"' }] },
                            },
                            appearance: {
                                defaultValue: { value: "'default'" },
                                description: "A divider can have one of the preset appearances.\nWhen not specified, the divider has its default appearance.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"strong"' }, { value: '"brand"' }, { value: '"subtle"' }, { value: '"default"' }] },
                            },
                            inset: { defaultValue: { value: "false" }, description: "Adds padding to the beginning and end of the divider.", name: "inset", required: !1, type: { name: "boolean" } },
                            vertical: { defaultValue: { value: "false" }, description: "A divider can be horizontal (default) or vertical.", name: "vertical", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-divider/src/components/Divider/Divider.tsx#Divider"] = {
                            docgenInfo: Divider.__docgenInfo,
                            name: "Divider",
                            path: "../../packages/react-components/react-divider/src/components/Divider/Divider.tsx#Divider",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-divider/src/components/Divider/renderDivider.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { D: () => renderDivider_unstable });
            var _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderDivider_unstable = (state) => {
                let { slots, slotProps } = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.D)(state);
                return (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.a)(
                    slots.root,
                    slotProps.root,
                    void 0 !== slotProps.root.children && (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.a)(slots.wrapper, slotProps.wrapper, slotProps.root.children)
                );
            };
            try {
                (renderDivider_unstable.displayName = "renderDivider_unstable"),
                    (renderDivider_unstable.__docgenInfo = {
                        description: "Renders a Divider component by passing the slot props (defined in `state`) to the appropriate slots.",
                        displayName: "renderDivider_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | ComponentType<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; wrapper: "div" | ComponentType<...>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "Root of the component that renders as a `<div>` tag.",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            wrapper: {
                                defaultValue: null,
                                description: "Accessibility wrapper for content when presented.",
                                name: "wrapper",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            appearance: {
                                defaultValue: { value: "'default'" },
                                description: "A divider can have one of the preset appearances.\nWhen not specified, the divider has its default appearance.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"strong"' }, { value: '"brand"' }, { value: '"subtle"' }, { value: '"default"' }] },
                            },
                            vertical: { defaultValue: { value: "false" }, description: "A divider can be horizontal (default) or vertical.", name: "vertical", required: !1, type: { name: "boolean" } },
                            alignContent: {
                                defaultValue: { value: "'center'" },
                                description: "Determines the alignment of the content within the divider.",
                                name: "alignContent",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"end"' }] },
                            },
                            inset: { defaultValue: { value: "false" }, description: "Adds padding to the beginning and end of the divider.", name: "inset", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-divider/src/components/Divider/renderDivider.tsx#renderDivider_unstable"] = {
                            docgenInfo: renderDivider_unstable.__docgenInfo,
                            name: "renderDivider_unstable",
                            path: "../../packages/react-components/react-divider/src/components/Divider/renderDivider.tsx#renderDivider_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-divider/src/components/Divider/useDivider.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { R: () => useDivider_unstable });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts");
            let useDivider_unstable = (props, ref) => {
                let { alignContent = "center", appearance = "default", inset = !1, vertical = !1, wrapper } = props,
                    dividerId = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.Me)("divider-");
                return {
                    alignContent,
                    appearance,
                    inset,
                    vertical,
                    components: { root: "div", wrapper: "div" },
                    root: (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__.n)("div", {
                        role: "separator",
                        "aria-orientation": vertical ? "vertical" : "horizontal",
                        "aria-labelledby": props.children ? dividerId : void 0,
                        ...props,
                        ref,
                    }),
                    wrapper: (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_3__.O)(wrapper, { required: !0, defaultProps: { id: dividerId, children: props.children } }),
                };
            };
        },
        "../../packages/react-components/react-divider/src/components/Divider/useDividerStyles.styles.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { K: () => useDividerStyles_unstable });
            var _griffel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/tokens/src/tokens.ts");
            let dividerClassNames = { root: "fui-Divider", wrapper: "fui-Divider__wrapper" },
                contentSpacing = "12px",
                insetSpacing = "12px",
                minStartEndLength = "8px;",
                useBaseStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    base: {
                        alignItems: "center",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "row",
                        flexGrow: 1,
                        position: "relative",
                        fontFamily: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontFamilyBase,
                        fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase200,
                        fontWeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontWeightRegular,
                        lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase200,
                        textAlign: "center",
                        "::before": { boxSizing: "border-box", display: "flex", flexGrow: 1 },
                        "::after": { boxSizing: "border-box", display: "flex", flexGrow: 1 },
                    },
                    childless: { "::before": { marginBottom: 0, marginRight: 0 }, "::after": { marginLeft: 0, marginTop: 0 } },
                    start: { "::after": { content: '""' } },
                    center: { "::before": { content: '""' }, "::after": { content: '""' } },
                    end: { "::before": { content: '""' } },
                    brand: {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorBrandForeground1,
                        "::before": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorBrandStroke1) },
                        "::after": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorBrandStroke1) },
                    },
                    default: {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralForeground2,
                        "::before": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke2) },
                        "::after": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke2) },
                    },
                    subtle: {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralForeground2,
                        "::before": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke3) },
                        "::after": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke3) },
                    },
                    strong: {
                        color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralForeground2,
                        "::before": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke1) },
                        "::after": { ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.borderColor(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralStroke1) },
                    },
                }),
                useHorizontalStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    base: {
                        width: "100%",
                        "::before": { borderTopStyle: "solid", borderTopWidth: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.strokeWidthThin, minWidth: minStartEndLength },
                        "::after": { borderTopStyle: "solid", borderTopWidth: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.strokeWidthThin, minWidth: minStartEndLength },
                    },
                    inset: { paddingLeft: insetSpacing, paddingRight: insetSpacing },
                    start: { "::before": { content: '""', marginRight: contentSpacing, maxWidth: "8px" }, "::after": { marginLeft: contentSpacing } },
                    center: { "::before": { marginRight: contentSpacing }, "::after": { marginLeft: contentSpacing } },
                    end: { "::before": { marginRight: contentSpacing }, "::after": { content: '""', marginLeft: contentSpacing, maxWidth: "8px" } },
                }),
                useVerticalStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    base: {
                        flexDirection: "column",
                        minHeight: "20px",
                        "::before": { borderRightStyle: "solid", borderRightWidth: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.strokeWidthThin, minHeight: minStartEndLength },
                        "::after": { borderRightStyle: "solid", borderRightWidth: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.strokeWidthThin, minHeight: minStartEndLength },
                    },
                    inset: { marginTop: insetSpacing, marginBottom: insetSpacing },
                    withChildren: { minHeight: "84px" },
                    start: { "::before": { content: '""', marginBottom: contentSpacing, maxHeight: "8px" }, "::after": { marginTop: contentSpacing } },
                    center: { "::before": { marginBottom: contentSpacing }, "::after": { marginTop: contentSpacing } },
                    end: { "::before": { marginBottom: contentSpacing }, "::after": { content: '""', marginTop: contentSpacing, maxHeight: "8px" } },
                }),
                useDividerStyles_unstable = (state) => {
                    let baseStyles = useBaseStyles(),
                        horizontalStyles = useHorizontalStyles(),
                        verticalStyles = useVerticalStyles(),
                        { alignContent, appearance, inset, vertical } = state;
                    return (
                        (state.root.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.z)(
                            dividerClassNames.root,
                            baseStyles.base,
                            baseStyles[alignContent],
                            appearance && baseStyles[appearance],
                            !vertical && horizontalStyles.base,
                            !vertical && inset && horizontalStyles.inset,
                            !vertical && horizontalStyles[alignContent],
                            vertical && verticalStyles.base,
                            vertical && inset && verticalStyles.inset,
                            vertical && verticalStyles[alignContent],
                            vertical && void 0 !== state.root.children && verticalStyles.withChildren,
                            void 0 === state.root.children && baseStyles.childless,
                            state.root.className
                        )),
                        state.wrapper && (state.wrapper.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.z)(dividerClassNames.wrapper, state.wrapper.className)),
                        state
                    );
                };
        },
        "../../packages/react-components/react-field/src/components/Field/Field.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { g: () => Field });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _renderField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-field/src/components/Field/renderField.tsx"),
                _useField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-field/src/components/Field/useField.tsx"),
                _useFieldStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-field/src/components/Field/useFieldStyles.styles.ts"),
                _contexts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldContextValues.ts");
            let Field = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useField__WEBPACK_IMPORTED_MODULE_1__.R)(props, ref);
                (0, _useFieldStyles_styles__WEBPACK_IMPORTED_MODULE_2__._)(state);
                let context = (0, _contexts_index__WEBPACK_IMPORTED_MODULE_3__.D)(state);
                return (0, _renderField__WEBPACK_IMPORTED_MODULE_4__.w)(state, context);
            });
            Field.displayName = "Field";
            try {
                (Field.displayName = "Field"),
                    (Field.__docgenInfo = {
                        description: "",
                        displayName: "Field",
                        props: {
                            label: {
                                defaultValue: null,
                                description: "The label associated with the field.",
                                name: "label",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<LabelSlots, "root">, "required"> & { disabled?: boolean; required?: boolean | WithSlotShorthandValue<{ as?: "span"; } & Pick<...> & { ...; } & { ...; }> | null | undefined; size?: "small" | ... 2 more ... | undefined; weight?: ...',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            validationMessage: {
                                defaultValue: null,
                                description: "A message about the validation state. By default, this is an error message, but it can be a success, warning,\nor custom message by setting `validationState`.",
                                name: "validationMessage",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            validationMessageIcon: {
                                defaultValue: null,
                                description:
                                    "The icon associated with the `validationMessage`. This will only be displayed if `validationMessage` is set.\n\nThe default depends on `validationState`:\n* error: `<ErrorCircle12Filled />`\n* warning: `<Warning12Filled />`\n* success: `<CheckmarkCircle12Filled />`\n* none: `null`",
                                name: "validationMessageIcon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            hint: {
                                defaultValue: null,
                                description: "Additional hint text below the field.",
                                name: "hint",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            children: {
                                defaultValue: null,
                                description:
                                    "The Field's child can be a single form control, or a render function that takes the props that should be spread on\na form control.\n\nAll form controls in this library can be used directly as children (such as `<Input>` or `<RadioGroup>`).\n\nFor other controls, there are two options:\n1. The child of Field can be a render function that is given the props that should be spread on the control.\n   `<Field>{(props) => <MyInput {...props} />}</Field>`\n2. The control itself can merge props from field with useFieldControlProps_unstable().\n   `props = useFieldControlProps_unstable(props);`",
                                name: "children",
                                required: !1,
                                type: { name: "ReactNode | ((props: FieldControlProps) => ReactNode)" },
                            },
                            orientation: {
                                defaultValue: { value: "vertical" },
                                description: "The orientation of the label relative to the field component.\nThis only affects the label, and not the validationMessage or hint (which always appear below the field component).",
                                name: "orientation",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"horizontal"' }, { value: '"vertical"' }] },
                            },
                            validationState: {
                                defaultValue: { value: "error when validationMessage is set; none otherwise." },
                                description:
                                    'The `validationState` affects the display of the `validationMessage` and `validationMessageIcon`.\n\n* error: (default) The validation message has a red error icon and red text, with `role="alert"` so it is\n    announced by screen readers. Additionally, the control inside the field has `aria-invalid` set, which adds a\n    red border to some field components (such as `Input`).\n* success: The validation message has a green checkmark icon and gray text.\n* warning: The validation message has a yellow exclamation icon and gray text.\n* none: The validation message has no icon and gray text.',
                                name: "validationState",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"error"' }, { value: '"warning"' }, { value: '"success"' }] },
                            },
                            required: {
                                defaultValue: null,
                                description: "Marks the Field as required. If `true`, an asterisk will be appended to the label, and `aria-required` will be set\non the Field's child.",
                                name: "required",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "The size of the Field's label.",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-field/src/components/Field/Field.tsx#Field"] = {
                            docgenInfo: Field.__docgenInfo,
                            name: "Field",
                            path: "../../packages/react-components/react-field/src/components/Field/Field.tsx#Field",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-field/src/components/Field/renderField.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { w: () => renderField_unstable });
            var _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts"),
                _contexts_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                _contexts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-field/src/contexts/FieldContext.ts");
            let renderField_unstable = (state, contextValues) => {
                let { slots, slotProps } = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.D)(state),
                    { children } = state;
                return (
                    "function" == typeof children && (children = children((0, _contexts_index__WEBPACK_IMPORTED_MODULE_1__.M)(contextValues.field) || {})),
                    (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(
                        _contexts_index__WEBPACK_IMPORTED_MODULE_3__.A,
                        { value: null == contextValues ? void 0 : contextValues.field },
                        (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(
                            slots.root,
                            slotProps.root,
                            slots.label && (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(slots.label, slotProps.label),
                            children,
                            slots.validationMessage &&
                                (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(
                                    slots.validationMessage,
                                    slotProps.validationMessage,
                                    slots.validationMessageIcon && (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(slots.validationMessageIcon, slotProps.validationMessageIcon),
                                    slotProps.validationMessage.children
                                ),
                            slots.hint && (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(slots.hint, slotProps.hint)
                        )
                    )
                );
            };
            try {
                (renderField_unstable.displayName = "renderField_unstable"),
                    (renderField_unstable.__docgenInfo = { description: "Render the final JSX of Field", displayName: "renderField_unstable", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-field/src/components/Field/renderField.tsx#renderField_unstable"] = {
                            docgenInfo: renderField_unstable.__docgenInfo,
                            name: "renderField_unstable",
                            path: "../../packages/react-components/react-field/src/components/Field/renderField.tsx#renderField_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-field/src/components/Field/useField.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { R: () => useField_unstable });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-runtime.js"),
                react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js"),
                _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-10.js"),
                _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-25.js"),
                _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-5.js"),
                _fluentui_react_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../packages/react-components/react-label/src/components/Label/Label.tsx"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts");
            let validationMessageIcons = {
                    error: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.m8j, {}),
                    warning: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.mwk, {}),
                    success: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.BGp, {}),
                    none: void 0,
                },
                useField_unstable = (props, ref) => {
                    let { children, orientation = "vertical", required = !1, validationState = props.validationMessage ? "error" : "none", size = "medium" } = props,
                        baseId = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_5__.Me)("field-"),
                        generatedControlId = baseId + "__control",
                        root = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_6__.n)("div", { ...props, ref }, ["children"]),
                        label = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__.O)(props.label, { defaultProps: { htmlFor: generatedControlId, id: baseId + "__label", required, size } }),
                        validationMessage = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__.O)(props.validationMessage, {
                            defaultProps: { id: baseId + "__validationMessage", role: "error" === validationState ? "alert" : void 0 },
                        }),
                        hint = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__.O)(props.hint, { defaultProps: { id: baseId + "__hint" } }),
                        defaultIcon = validationMessageIcons[validationState],
                        validationMessageIcon = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__.O)(props.validationMessageIcon, { required: !!defaultIcon, defaultProps: { children: defaultIcon } });
                    return {
                        children,
                        generatedControlId,
                        orientation,
                        required,
                        size,
                        validationState,
                        components: { root: "div", label: _fluentui_react_label__WEBPACK_IMPORTED_MODULE_8__._, validationMessage: "div", validationMessageIcon: "span", hint: "div" },
                        root,
                        label,
                        validationMessageIcon,
                        validationMessage,
                        hint,
                    };
                };
            try {
                (useField_unstable.displayName = "useField_unstable"),
                    (useField_unstable.__docgenInfo = {
                        description: "Create the state required to render Field.\n\nThe returned state can be modified with hooks such as useFieldStyles_unstable,\nbefore being passed to renderField_unstable.",
                        displayName: "useField_unstable",
                        props: {
                            label: {
                                defaultValue: null,
                                description: "The label associated with the field.",
                                name: "label",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<LabelSlots, "root">, "required"> & { disabled?: boolean; required?: boolean | WithSlotShorthandValue<{ as?: "span"; } & Pick<...> & { ...; } & { ...; }> | null | undefined; size?: "small" | ... 2 more ... | undefined; weight?: ...',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            validationMessage: {
                                defaultValue: null,
                                description: "A message about the validation state. By default, this is an error message, but it can be a success, warning,\nor custom message by setting `validationState`.",
                                name: "validationMessage",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            validationMessageIcon: {
                                defaultValue: null,
                                description:
                                    "The icon associated with the `validationMessage`. This will only be displayed if `validationMessage` is set.\n\nThe default depends on `validationState`:\n* error: `<ErrorCircle12Filled />`\n* warning: `<Warning12Filled />`\n* success: `<CheckmarkCircle12Filled />`\n* none: `null`",
                                name: "validationMessageIcon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            hint: {
                                defaultValue: null,
                                description: "Additional hint text below the field.",
                                name: "hint",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            children: {
                                defaultValue: null,
                                description:
                                    "The Field's child can be a single form control, or a render function that takes the props that should be spread on\na form control.\n\nAll form controls in this library can be used directly as children (such as `<Input>` or `<RadioGroup>`).\n\nFor other controls, there are two options:\n1. The child of Field can be a render function that is given the props that should be spread on the control.\n   `<Field>{(props) => <MyInput {...props} />}</Field>`\n2. The control itself can merge props from field with useFieldControlProps_unstable().\n   `props = useFieldControlProps_unstable(props);`",
                                name: "children",
                                required: !1,
                                type: { name: "ReactNode | ((props: FieldControlProps) => ReactNode)" },
                            },
                            orientation: {
                                defaultValue: { value: "vertical" },
                                description: "The orientation of the label relative to the field component.\nThis only affects the label, and not the validationMessage or hint (which always appear below the field component).",
                                name: "orientation",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"horizontal"' }, { value: '"vertical"' }] },
                            },
                            validationState: {
                                defaultValue: { value: "error when validationMessage is set; none otherwise." },
                                description:
                                    'The `validationState` affects the display of the `validationMessage` and `validationMessageIcon`.\n\n* error: (default) The validation message has a red error icon and red text, with `role="alert"` so it is\n    announced by screen readers. Additionally, the control inside the field has `aria-invalid` set, which adds a\n    red border to some field components (such as `Input`).\n* success: The validation message has a green checkmark icon and gray text.\n* warning: The validation message has a yellow exclamation icon and gray text.\n* none: The validation message has no icon and gray text.',
                                name: "validationState",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"error"' }, { value: '"warning"' }, { value: '"success"' }] },
                            },
                            required: {
                                defaultValue: null,
                                description: "Marks the Field as required. If `true`, an asterisk will be appended to the label, and `aria-required` will be set\non the Field's child.",
                                name: "required",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "The size of the Field's label.",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-field/src/components/Field/useField.tsx#useField_unstable"] = {
                            docgenInfo: useField_unstable.__docgenInfo,
                            name: "useField_unstable",
                            path: "../../packages/react-components/react-field/src/components/Field/useField.tsx#useField_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-field/src/components/Field/useFieldStyles.styles.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { _: () => useFieldStyles_unstable });
            var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@griffel/react/makeResetStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js");
            let fieldClassNames = { root: "fui-Field", label: "fui-Field__label", validationMessage: "fui-Field__validationMessage", validationMessageIcon: "fui-Field__validationMessageIcon", hint: "fui-Field__hint" },
                iconSize = "12px",
                useRootStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    base: { display: "grid" },
                    horizontal: { gridTemplateColumns: "33% 1fr", gridTemplateRows: "auto auto auto 1fr" },
                    horizontalNoLabel: { paddingLeft: "33%", gridTemplateColumns: "1fr" },
                }),
                useLabelStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    base: { paddingTop: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingVerticalXXS, paddingBottom: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingVerticalXXS },
                    large: { paddingTop: "1px", paddingBottom: "1px" },
                    vertical: { marginBottom: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingVerticalXXS },
                    verticalLarge: { marginBottom: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingVerticalXS },
                    horizontal: { marginRight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingHorizontalM, gridRowStart: "1", gridRowEnd: "-1" },
                }),
                useSecondaryTextBaseClassName = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.h)({
                    marginTop: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingVerticalXXS,
                    color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorNeutralForeground3,
                    ..._fluentui_react_theme__WEBPACK_IMPORTED_MODULE_3__.w.caption1,
                }),
                useSecondaryTextStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    error: { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorPaletteRedForeground1 },
                    withIcon: { paddingLeft: `calc(${iconSize} + ${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingHorizontalXS})` },
                }),
                useValidationMessageIconBaseClassName = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.h)({
                    display: "inline-block",
                    fontSize: iconSize,
                    marginLeft: `calc(-${iconSize} - ${_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingHorizontalXS})`,
                    marginRight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.spacingHorizontalXS,
                    lineHeight: "0",
                    verticalAlign: "-1px",
                }),
                useValidationMessageIconStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    error: { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorPaletteRedForeground1 },
                    warning: { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorPaletteDarkOrangeForeground1 },
                    success: { color: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.colorPaletteGreenForeground1 },
                }),
                useFieldStyles_unstable = (state) => {
                    let { validationState } = state,
                        horizontal = "horizontal" === state.orientation,
                        rootStyles = useRootStyles();
                    state.root.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_4__.z)(
                        fieldClassNames.root,
                        rootStyles.base,
                        horizontal && rootStyles.horizontal,
                        horizontal && !state.label && rootStyles.horizontalNoLabel,
                        state.root.className
                    );
                    let labelStyles = useLabelStyles();
                    state.label &&
                        (state.label.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_4__.z)(
                            fieldClassNames.label,
                            labelStyles.base,
                            horizontal && labelStyles.horizontal,
                            !horizontal && labelStyles.vertical,
                            "large" === state.label.size && labelStyles.large,
                            !horizontal && "large" === state.label.size && labelStyles.verticalLarge,
                            state.label.className
                        ));
                    let validationMessageIconBaseClassName = useValidationMessageIconBaseClassName(),
                        validationMessageIconStyles = useValidationMessageIconStyles();
                    state.validationMessageIcon &&
                        (state.validationMessageIcon.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_4__.z)(
                            fieldClassNames.validationMessageIcon,
                            validationMessageIconBaseClassName,
                            "none" !== validationState && validationMessageIconStyles[validationState],
                            state.validationMessageIcon.className
                        ));
                    let secondaryTextBaseClassName = useSecondaryTextBaseClassName(),
                        secondaryTextStyles = useSecondaryTextStyles();
                    state.validationMessage &&
                        (state.validationMessage.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_4__.z)(
                            fieldClassNames.validationMessage,
                            secondaryTextBaseClassName,
                            "error" === validationState && secondaryTextStyles.error,
                            !!state.validationMessageIcon && secondaryTextStyles.withIcon,
                            state.validationMessage.className
                        )),
                        state.hint && (state.hint.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_4__.z)(fieldClassNames.hint, secondaryTextBaseClassName, state.hint.className));
                };
        },
        "../../packages/react-components/react-field/src/contexts/useFieldContextValues.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { D: () => useFieldContextValues_unstable });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
            let useFieldContextValues_unstable = (state) => {
                var _state_label, _state_label1, _state_validationMessage, _state_hint;
                let { generatedControlId, orientation, required, size, validationState } = state,
                    labelFor = null == (_state_label = state.label) ? void 0 : _state_label.htmlFor,
                    labelId = null == (_state_label1 = state.label) ? void 0 : _state_label1.id,
                    validationMessageId = null == (_state_validationMessage = state.validationMessage) ? void 0 : _state_validationMessage.id,
                    hintId = null == (_state_hint = state.hint) ? void 0 : _state_hint.id,
                    field = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ generatedControlId, hintId, labelFor, labelId, orientation, required, size, validationMessageId, validationState }), [
                        generatedControlId,
                        hintId,
                        labelFor,
                        labelId,
                        orientation,
                        required,
                        size,
                        validationMessageId,
                        validationState,
                    ]);
                return { field };
            };
        },
        "../../packages/react-components/react-input/src/components/Input/Input.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { I: () => Input });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                useControllableState = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useControllableState.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                useEventCallback = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useEventCallback.ts"),
                OverridesContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/OverridesContext/OverridesContext.ts");
            let useInput_unstable = (props, ref) => {
                var _overrides_inputDefaultAppearance;
                props = (0, useFieldControlProps.k)(props, { supportsLabelFor: !0, supportsRequired: !0, supportsSize: !0 });
                let overrides = (0, OverridesContext.QG)(),
                    { size = "medium", appearance = null != (_overrides_inputDefaultAppearance = overrides.inputDefaultAppearance) ? _overrides_inputDefaultAppearance : "outline", onChange } = props,
                    [value, setValue] = (0, useControllableState.T)({ state: props.value, defaultState: props.defaultValue, initialState: "" }),
                    nativeProps = (0, getNativeElementProps.$)({ props, primarySlotTagName: "input", excludedPropNames: ["size", "onChange", "value", "defaultValue"] }),
                    state = {
                        size,
                        appearance,
                        components: { root: "span", input: "input", contentBefore: "span", contentAfter: "span" },
                        input: (0, resolveShorthand.O)(props.input, { required: !0, defaultProps: { type: "text", ref, ...nativeProps.primary } }),
                        contentAfter: (0, resolveShorthand.O)(props.contentAfter),
                        contentBefore: (0, resolveShorthand.O)(props.contentBefore),
                        root: (0, resolveShorthand.O)(props.root, { required: !0, defaultProps: nativeProps.root }),
                    };
                return (
                    (state.input.value = value),
                    (state.input.onChange = (0, useEventCallback.$)((ev) => {
                        let newValue = ev.target.value;
                        null == onChange || onChange(ev, { value: newValue }), setValue(newValue);
                    })),
                    state
                );
            };
            var createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderInput_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(
                    slots.root,
                    slotProps.root,
                    slots.contentBefore && (0, createElement.a)(slots.contentBefore, slotProps.contentBefore),
                    (0, createElement.a)(slots.input, slotProps.input),
                    slots.contentAfter && (0, createElement.a)(slots.contentAfter, slotProps.contentAfter)
                );
            };
            try {
                (renderInput_unstable.displayName = "renderInput_unstable"),
                    (renderInput_unstable.__docgenInfo = {
                        description: "Render the final JSX of Input",
                        displayName: "renderInput_unstable",
                        props: {
                            appearance: {
                                defaultValue: { value: "'outline'\n\nNote: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future." },
                                description: "Controls the colors and borders of the input.",
                                name: "appearance",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: '"outline"' }, { value: '"underline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }, { value: '"filled-darker-shadow"' }, { value: '"filled-lighter-shadow"' }],
                                },
                            },
                            size: {
                                defaultValue: { value: "'medium'" },
                                description: "Size of the input (changes the font size and spacing).",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "span" | ComponentType<{ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; input: "input" | ComponentType<...>; contentBefore: "span" | ComponentType<...>; contentAfter: "span" | ComponentType<...>...',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description:
                                    "Wrapper element which visually appears to be the input and is used for borders, focus styling, etc.\n(A wrapper is needed to properly position `contentBefore` and `contentAfter` relative to `input`.)\n\nThe root slot receives the `className` and `style` specified directly on the `<Input>`.\nAll other top-level native props will be applied to the primary slot, `input`.",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    'The actual `<input>` element. `type="text"` will be automatically applied unless overridden.\n\nThis is the "primary" slot, so native props specified directly on the `<Input>` will go here\n(except `className` and `style`, which go to the `root` slot). The top-level `ref` will\nalso go here.',
                                name: "input",
                                required: !0,
                                type: {
                                    name: '{ as?: "input" | undefined; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; }',
                                },
                            },
                            contentBefore: {
                                defaultValue: null,
                                description: "Element before the input text, within the input border",
                                name: "contentBefore",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                            contentAfter: {
                                defaultValue: null,
                                description: "Element after the input text, within the input border",
                                name: "contentAfter",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-input/src/components/Input/renderInput.tsx#renderInput_unstable"] = {
                            docgenInfo: renderInput_unstable.__docgenInfo,
                            name: "renderInput_unstable",
                            path: "../../packages/react-components/react-input/src/components/Input/renderInput.tsx#renderInput_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts"),
                makeResetStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeResetStyles.esm.js"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js");
            let inputClassNames = { root: "fui-Input", input: "fui-Input__input", contentBefore: "fui-Input__contentBefore", contentAfter: "fui-Input__contentAfter" },
                fieldHeights = { small: "24px", medium: "32px", large: "40px" },
                useRootClassName = (0, makeResetStyles_esm.h)({
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: tokens.T.spacingHorizontalXXS,
                    borderRadius: tokens.T.borderRadiusMedium,
                    position: "relative",
                    boxSizing: "border-box",
                    minHeight: fieldHeights.medium,
                    padding: `0 ${tokens.T.spacingHorizontalMNudge}`,
                    ...typographyStyles.w.body1,
                    backgroundColor: tokens.T.colorNeutralBackground1,
                    border: `1px solid ${tokens.T.colorNeutralStroke1}`,
                    borderBottomColor: tokens.T.colorNeutralStrokeAccessible,
                    "::after": {
                        boxSizing: "border-box",
                        content: '""',
                        position: "absolute",
                        left: "-1px",
                        bottom: "-1px",
                        right: "-1px",
                        height: `max(2px, ${tokens.T.borderRadiusMedium})`,
                        borderBottomLeftRadius: tokens.T.borderRadiusMedium,
                        borderBottomRightRadius: tokens.T.borderRadiusMedium,
                        borderBottom: `2px solid ${tokens.T.colorCompoundBrandStroke}`,
                        clipPath: "inset(calc(100% - 2px) 0 0 0)",
                        transform: "scaleX(0)",
                        transitionProperty: "transform",
                        transitionDuration: tokens.T.durationUltraFast,
                        transitionDelay: tokens.T.curveAccelerateMid,
                        "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                    },
                    ":focus-within::after": {
                        transform: "scaleX(1)",
                        transitionProperty: "transform",
                        transitionDuration: tokens.T.durationNormal,
                        transitionDelay: tokens.T.curveDecelerateMid,
                        "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                    },
                    ":focus-within:active::after": { borderBottomColor: tokens.T.colorCompoundBrandStrokePressed },
                    ":focus-within": { outline: "2px solid transparent" },
                }),
                useRootStyles = (0, makeStyles_esm.Z)({
                    small: { minHeight: fieldHeights.small, paddingLeft: tokens.T.spacingHorizontalSNudge, paddingRight: tokens.T.spacingHorizontalSNudge, ...typographyStyles.w.caption1 },
                    medium: {},
                    large: { minHeight: fieldHeights.large, paddingLeft: tokens.T.spacingHorizontalM, paddingRight: tokens.T.spacingHorizontalM, ...typographyStyles.w.body2, ...index_esm.q5.gap(tokens.T.spacingHorizontalSNudge) },
                    outline: {},
                    outlineInteractive: {
                        ":hover": { ...index_esm.q5.borderColor(tokens.T.colorNeutralStroke1Hover), borderBottomColor: tokens.T.colorNeutralStrokeAccessibleHover },
                        ":active,:focus-within": { ...index_esm.q5.borderColor(tokens.T.colorNeutralStroke1Pressed), borderBottomColor: tokens.T.colorNeutralStrokeAccessiblePressed },
                    },
                    underline: { backgroundColor: tokens.T.colorTransparentBackground, ...index_esm.q5.borderRadius(0), borderTopStyle: "none", borderRightStyle: "none", borderLeftStyle: "none", "::after": { left: 0, right: 0 } },
                    underlineInteractive: {
                        ":hover": { borderBottomColor: tokens.T.colorNeutralStrokeAccessibleHover },
                        ":active,:focus-within": { borderBottomColor: tokens.T.colorNeutralStrokeAccessiblePressed },
                        "::after": index_esm.q5.borderRadius(0),
                    },
                    filled: { ...index_esm.q5.borderColor(tokens.T.colorTransparentStroke) },
                    filledInteractive: { ":hover,:focus-within": { ...index_esm.q5.borderColor(tokens.T.colorTransparentStrokeInteractive) } },
                    invalid: { ":not(:focus-within),:hover:not(:focus-within)": { ...index_esm.q5.borderColor(tokens.T.colorPaletteRedBorder2) } },
                    "filled-darker": { backgroundColor: tokens.T.colorNeutralBackground3 },
                    "filled-lighter": { backgroundColor: tokens.T.colorNeutralBackground1 },
                    "filled-darker-shadow": { backgroundColor: tokens.T.colorNeutralBackground3, boxShadow: tokens.T.shadow2 },
                    "filled-lighter-shadow": { backgroundColor: tokens.T.colorNeutralBackground1, boxShadow: tokens.T.shadow2 },
                    disabled: {
                        cursor: "not-allowed",
                        backgroundColor: tokens.T.colorTransparentBackground,
                        ...index_esm.q5.borderColor(tokens.T.colorNeutralStrokeDisabled),
                        "@media (forced-colors: active)": { ...index_esm.q5.borderColor("GrayText") },
                        "::after": { content: "unset" },
                        ":focus-within": { outlineStyle: "none" },
                    },
                }),
                useInputClassName = (0, makeResetStyles_esm.h)({
                    boxSizing: "border-box",
                    flexGrow: 1,
                    minWidth: 0,
                    borderStyle: "none",
                    padding: `0 ${tokens.T.spacingHorizontalXXS}`,
                    color: tokens.T.colorNeutralForeground1,
                    backgroundColor: "transparent",
                    "::placeholder": { color: tokens.T.colorNeutralForeground4, opacity: 1 },
                    outlineStyle: "none",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                }),
                useInputElementStyles = (0, makeStyles_esm.Z)({
                    large: { paddingLeft: tokens.T.spacingHorizontalSNudge, paddingRight: tokens.T.spacingHorizontalSNudge },
                    disabled: { color: tokens.T.colorNeutralForegroundDisabled, backgroundColor: tokens.T.colorTransparentBackground, cursor: "not-allowed", "::placeholder": { color: tokens.T.colorNeutralForegroundDisabled } },
                }),
                useContentClassName = (0, makeResetStyles_esm.h)({ boxSizing: "border-box", color: tokens.T.colorNeutralForeground3, display: "flex", "> svg": { fontSize: "20px" } }),
                useContentStyles = (0, makeStyles_esm.Z)({ disabled: { color: tokens.T.colorNeutralForegroundDisabled }, small: { "> svg": { fontSize: "16px" } }, medium: {}, large: { "> svg": { fontSize: "24px" } } }),
                useInputStyles_unstable = (state) => {
                    let { size, appearance } = state,
                        disabled = state.input.disabled,
                        invalid = "true" == `${state.input["aria-invalid"]}`,
                        filled = appearance.startsWith("filled"),
                        rootStyles = useRootStyles(),
                        inputStyles = useInputElementStyles(),
                        contentStyles = useContentStyles();
                    (state.root.className = (0, mergeClasses_esm.z)(
                        inputClassNames.root,
                        useRootClassName(),
                        rootStyles[size],
                        rootStyles[appearance],
                        !disabled && "outline" === appearance && rootStyles.outlineInteractive,
                        !disabled && "underline" === appearance && rootStyles.underlineInteractive,
                        !disabled && filled && rootStyles.filledInteractive,
                        filled && rootStyles.filled,
                        !disabled && invalid && rootStyles.invalid,
                        disabled && rootStyles.disabled,
                        state.root.className
                    )),
                        (state.input.className = (0, mergeClasses_esm.z)(inputClassNames.input, useInputClassName(), "large" === size && inputStyles.large, disabled && inputStyles.disabled, state.input.className));
                    let contentClasses = [useContentClassName(), disabled && contentStyles.disabled, contentStyles[size]];
                    return (
                        state.contentBefore && (state.contentBefore.className = (0, mergeClasses_esm.z)(inputClassNames.contentBefore, ...contentClasses, state.contentBefore.className)),
                        state.contentAfter && (state.contentAfter.className = (0, mergeClasses_esm.z)(inputClassNames.contentAfter, ...contentClasses, state.contentAfter.className)),
                        state
                    );
                };
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Input = react.forwardRef((props, ref) => {
                let state = useInput_unstable(props, ref);
                return useInputStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useInputStyles_unstable")(state), renderInput_unstable(state);
            });
            Input.displayName = "Input";
            try {
                (Input.displayName = "Input"),
                    (Input.__docgenInfo = {
                        description: "The Input component allows people to enter and edit text.",
                        displayName: "Input",
                        props: {
                            root: {
                                defaultValue: null,
                                description:
                                    "Wrapper element which visually appears to be the input and is used for borders, focus styling, etc.\n(A wrapper is needed to properly position `contentBefore` and `contentAfter` relative to `input`.)\n\nThe root slot receives the `className` and `style` specified directly on the `<Input>`.\nAll other top-level native props will be applied to the primary slot, `input`.",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    'The actual `<input>` element. `type="text"` will be automatically applied unless overridden.\n\nThis is the "primary" slot, so native props specified directly on the `<Input>` will go here\n(except `className` and `style`, which go to the `root` slot). The top-level `ref` will\nalso go here.',
                                name: "input",
                                required: !1,
                                type: { name: '({ as?: "input"; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; })' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"input"' }] } },
                            contentBefore: {
                                defaultValue: null,
                                description: "Element before the input text, within the input border",
                                name: "contentBefore",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            contentAfter: {
                                defaultValue: null,
                                description: "Element after the input text, within the input border",
                                name: "contentAfter",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            children: { defaultValue: null, description: "Input can't have children.", name: "children", required: !1, type: { name: "undefined" } },
                            size: {
                                defaultValue: { value: "'medium'" },
                                description: "Size of the input (changes the font size and spacing).",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                            appearance: {
                                defaultValue: { value: "'outline'\n\nNote: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future." },
                                description: "Controls the colors and borders of the input.",
                                name: "appearance",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: '"outline"' }, { value: '"underline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }, { value: '"filled-darker-shadow"' }, { value: '"filled-lighter-shadow"' }],
                                },
                            },
                            defaultValue: {
                                defaultValue: null,
                                description:
                                    "Default value of the input. Provide this if the input should be an uncontrolled component\nwhich tracks its current state internally; otherwise, use `value`.\n\n(This prop is mutually exclusive with `value`.)",
                                name: "defaultValue",
                                required: !1,
                                type: { name: "string" },
                            },
                            value: {
                                defaultValue: null,
                                description:
                                    "Current value of the input. Provide this if the input is a controlled component where you\nare maintaining its current state; otherwise, use `defaultValue`.\n\n(This prop is mutually exclusive with `defaultValue`.)",
                                name: "value",
                                required: !1,
                                type: { name: "string" },
                            },
                            onChange: {
                                defaultValue: null,
                                description: "Called when the user changes the input's value.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void)" },
                            },
                            type: {
                                defaultValue: { value: "'text'" },
                                description:
                                    "An input can have different text-based [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types)\nbased on the type of value the user will enter.\n\nNote that no custom styling is currently applied for alternative types, and some types may\nactivate browser-default styling which does not match the Fluent design language.\n\n(For non-text-based types such as `button` or `checkbox`, use the appropriate component or an\n`<input>` element instead.)",
                                name: "type",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [
                                        { value: '"number"' },
                                        { value: '"time"' },
                                        { value: '"text"' },
                                        { value: '"search"' },
                                        { value: '"tel"' },
                                        { value: '"url"' },
                                        { value: '"email"' },
                                        { value: '"date"' },
                                        { value: '"datetime-local"' },
                                        { value: '"month"' },
                                        { value: '"password"' },
                                        { value: '"week"' },
                                    ],
                                },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-input/src/components/Input/Input.tsx#Input"] = {
                            docgenInfo: Input.__docgenInfo,
                            name: "Input",
                            path: "../../packages/react-components/react-input/src/components/Input/Input.tsx#Input",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-link/src/components/Link/Link.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { r: () => Link });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                keys = __webpack_require__("../../packages/react-components/keyboard-keys/src/keys.ts");
            let useLinkState_unstable = (state) => {
                    let { disabled, disabledFocusable } = state,
                        { onClick, onKeyDown, role, tabIndex, type } = state.root;
                    return (
                        "a" === state.root.as
                            ? ((state.root.href = disabled ? void 0 : state.root.href),
                              (state.root.tabIndex = null != tabIndex ? tabIndex : disabled && !disabledFocusable ? void 0 : 0),
                              (disabled || disabledFocusable) && (state.root.role = role || "link"))
                            : (state.root.type = type || "button"),
                        (state.root.onClick = (ev) => {
                            disabled || disabledFocusable ? ev.preventDefault() : null == onClick || onClick(ev);
                        }),
                        (state.root.onKeyDown = (ev) => {
                            (disabled || disabledFocusable) && (ev.key === keys.Ce2 || ev.key === keys.TaI) ? (ev.preventDefault(), ev.stopPropagation()) : null == onKeyDown || onKeyDown(ev);
                        }),
                        (state.disabled = disabled || disabledFocusable),
                        (state.root["aria-disabled"] = disabled || disabledFocusable || void 0),
                        "button" === state.root.as && (state.root.disabled = disabled && !disabledFocusable),
                        state
                    );
                },
                useLink_unstable = (props, ref) => {
                    let { appearance = "default", disabled = !1, disabledFocusable = !1, inline = !1 } = props,
                        as = props.as || (props.href ? "a" : "button"),
                        type = "button" === as ? "button" : void 0,
                        state = { appearance, disabled, disabledFocusable, inline, components: { root: "a" }, root: (0, getNativeElementProps.n)(as, { ref, type, ...props, as }) };
                    return useLinkState_unstable(state), state;
                };
            var makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                createCustomFocusIndicatorStyle = __webpack_require__("../../packages/react-components/react-tabster/src/focus/createCustomFocusIndicatorStyle.ts"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts");
            let linkClassNames = { root: "fui-Link" },
                useStyles = (0, makeStyles_esm.Z)({
                    focusIndicator: (0, createCustomFocusIndicatorStyle.L)({ textDecorationColor: tokens.T.colorStrokeFocus2, textDecorationLine: "underline", textDecorationStyle: "double", outlineStyle: "none" }),
                    root: {
                        backgroundColor: "transparent",
                        boxSizing: "border-box",
                        color: tokens.T.colorBrandForegroundLink,
                        cursor: "pointer",
                        display: "inline",
                        fontFamily: tokens.T.fontFamilyBase,
                        fontSize: tokens.T.fontSizeBase300,
                        fontWeight: tokens.T.fontWeightRegular,
                        ...index_esm.q5.margin(0),
                        ...index_esm.q5.padding(0),
                        ...index_esm.q5.overflow("inherit"),
                        textAlign: "left",
                        textDecorationLine: "none",
                        textDecorationThickness: tokens.T.strokeWidthThin,
                        textOverflow: "inherit",
                        userSelect: "text",
                        ":hover": { textDecorationLine: "underline", color: tokens.T.colorBrandForegroundLinkHover },
                        ":active": { textDecorationLine: "underline", color: tokens.T.colorBrandForegroundLinkPressed },
                    },
                    button: { ...index_esm.q5.borderStyle("none") },
                    href: { fontSize: "inherit" },
                    subtle: {
                        color: tokens.T.colorNeutralForeground2,
                        ":hover": { textDecorationLine: "underline", color: tokens.T.colorNeutralForeground2Hover },
                        ":active": { textDecorationLine: "underline", color: tokens.T.colorNeutralForeground2Pressed },
                    },
                    inline: { textDecorationLine: "underline" },
                    disabled: {
                        textDecorationLine: "none",
                        color: tokens.T.colorNeutralForegroundDisabled,
                        cursor: "not-allowed",
                        ":hover": { textDecorationLine: "none", color: tokens.T.colorNeutralForegroundDisabled },
                        ":active": { textDecorationLine: "none", color: tokens.T.colorNeutralForegroundDisabled },
                    },
                }),
                useLinkStyles_unstable = (state) => {
                    let styles = useStyles(),
                        { appearance, disabled, inline, root } = state;
                    return (
                        (state.root.className = (0, mergeClasses_esm.z)(
                            linkClassNames.root,
                            styles.root,
                            styles.focusIndicator,
                            "a" === root.as && root.href && styles.href,
                            "button" === root.as && styles.button,
                            "subtle" === appearance && styles.subtle,
                            inline && styles.inline,
                            disabled && styles.disabled,
                            state.root.className
                        )),
                        state
                    );
                };
            var createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderLink_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(slots.root, slotProps.root);
            };
            try {
                (renderLink_unstable.displayName = "renderLink_unstable"),
                    (renderLink_unstable.__docgenInfo = {
                        description: "Renders a Link component by passing the state defined props to the appropriate slots.",
                        displayName: "renderLink_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "a" | "button" | ComponentType<({ as?: "a" | undefined; } & Pick<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof AnchorHTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "Root of the component that renders as either an <a> or a <button> tag.",
                                name: "root",
                                required: !0,
                                type: {
                                    name:
                                        '({ as?: "a" | undefined; } & Pick<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof AnchorHTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })',
                                },
                            },
                            appearance: {
                                defaultValue: { value: "'default'" },
                                description: "A link can appear either with its default style or subtle.\nIf not specified, the link appears with its default styling.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"subtle"' }, { value: '"default"' }] },
                            },
                            inline: { defaultValue: { value: "false" }, description: "If true, changes styling when the link is being used alongside other text content.", name: "inline", required: !1, type: { name: "boolean" } },
                            disabled: { defaultValue: { value: "false" }, description: "Whether the link is disabled.", name: "disabled", required: !1, type: { name: "boolean" } },
                            disabledFocusable: {
                                defaultValue: { value: "false" },
                                description: "When set, allows the link to be focusable even when it has been disabled. This is used in scenarios where it is\nimportant to keep a consistent tab order for screen reader and keyboard users.",
                                name: "disabledFocusable",
                                required: !1,
                                type: { name: "boolean" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-link/src/components/Link/renderLink.tsx#renderLink_unstable"] = {
                            docgenInfo: renderLink_unstable.__docgenInfo,
                            name: "renderLink_unstable",
                            path: "../../packages/react-components/react-link/src/components/Link/renderLink.tsx#renderLink_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            let Link = react.forwardRef((props, ref) => {
                let state = useLink_unstable(props, ref);
                return useLinkStyles_unstable(state), renderLink_unstable(state);
            });
            Link.displayName = "Link";
            try {
                (Link.displayName = "Link"),
                    (Link.__docgenInfo = {
                        description: "A Link is a reference to data that a user can follow by clicking or tapping it.",
                        displayName: "Link",
                        props: {
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"a"' }, { value: '"button"' }] } },
                            appearance: {
                                defaultValue: { value: "'default'" },
                                description: "A link can appear either with its default style or subtle.\nIf not specified, the link appears with its default styling.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"subtle"' }, { value: '"default"' }] },
                            },
                            disabled: { defaultValue: { value: "false" }, description: "Whether the link is disabled.", name: "disabled", required: !1, type: { name: "boolean" } },
                            disabledFocusable: {
                                defaultValue: { value: "false" },
                                description: "When set, allows the link to be focusable even when it has been disabled. This is used in scenarios where it is\nimportant to keep a consistent tab order for screen reader and keyboard users.",
                                name: "disabledFocusable",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            inline: { defaultValue: { value: "false" }, description: "If true, changes styling when the link is being used alongside other text content.", name: "inline", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-link/src/components/Link/Link.tsx#Link"] = {
                            docgenInfo: Link.__docgenInfo,
                            name: "Link",
                            path: "../../packages/react-components/react-link/src/components/Link/Link.tsx#Link",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-persona/src/components/Persona/Persona.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { I: () => Persona });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderPersona_unstable = (state) => {
                let { presenceOnly, textPosition } = state,
                    { slots, slotProps } = (0, getSlotsNext.D)(state),
                    coin = presenceOnly ? slots.presence && (0, createElement.a)(slots.presence, slotProps.presence) : slots.avatar && (0, createElement.a)(slots.avatar, slotProps.avatar);
                return (0, createElement.a)(
                    slots.root,
                    slotProps.root,
                    ("after" === textPosition || "below" === textPosition) && coin,
                    slots.primaryText && (0, createElement.a)(slots.primaryText, slotProps.primaryText),
                    slots.secondaryText && (0, createElement.a)(slots.secondaryText, slotProps.secondaryText),
                    slots.tertiaryText && (0, createElement.a)(slots.tertiaryText, slotProps.tertiaryText),
                    slots.quaternaryText && (0, createElement.a)(slots.quaternaryText, slotProps.quaternaryText),
                    "before" === textPosition && coin
                );
            };
            try {
                (renderPersona_unstable.displayName = "renderPersona_unstable"),
                    (renderPersona_unstable.__docgenInfo = {
                        description: "Render the final JSX of Persona",
                        displayName: "renderPersona_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | ComponentType<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; ... 5 more ...; quaternaryText: "span" | ComponentType<...>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            avatar: {
                                defaultValue: null,
                                description: "Avatar to display.\n\nIf a PresenceBadge and an Avatar are provided, the Avatar will display the PresenceBadge as its presence.",
                                name: "avatar",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotRenderFunction<Omit<ComponentProps<AvatarSlots, "root">, "color"> & { active?: "active" | "inactive" | "unset"; activeAppearance?: "ring" | "shadow" | "ring-shadow"; ... 4 more ...; size?: AvatarSize | undefined; } & RefAttributes<...>> | undefined',
                                },
                            },
                            presence: {
                                defaultValue: null,
                                description: "PresenceBadge to display.\n\nIf `presenceOnly` is true, the PresenceBadge will be displayed instead of the Avatar.",
                                name: "presence",
                                required: !1,
                                type: { name: 'WithSlotRenderFunction<Omit<ComponentProps<Pick<BadgeSlots, "root" | "icon">, "root">, "color"> & Pick<BadgeProps, "size"> & { ...; } & RefAttributes<...>>' },
                            },
                            primaryText: {
                                defaultValue: null,
                                description:
                                    "The first line of text in the Persona, larger than the rest of the lines.\n\n`primaryText` defaults to the `name` prop. We recomend to only use `name`, use `primaryText` when the text is\n different than the `name` prop.",
                                name: "primaryText",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                            secondaryText: {
                                defaultValue: null,
                                description: "The second line of text in the Persona.",
                                name: "secondaryText",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                            tertiaryText: {
                                defaultValue: null,
                                description: "The third line of text in the Persona.",
                                name: "tertiaryText",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                            quaternaryText: {
                                defaultValue: null,
                                description: "The fourth line of text in the Persona.",
                                name: "quaternaryText",
                                required: !1,
                                type: { name: '({ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; })' },
                            },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "The size of a Persona and its text.",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }, { value: '"extra-small"' }, { value: '"extra-large"' }, { value: '"huge"' }] },
                            },
                            presenceOnly: { defaultValue: { value: "false" }, description: "Whether to display only the presence.", name: "presenceOnly", required: !1, type: { name: "boolean" } },
                            textPosition: {
                                defaultValue: { value: "after" },
                                description: "The position of the text relative to the avatar/presence.",
                                name: "textPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }, { value: '"below"' }] },
                            },
                            textAlignment: {
                                defaultValue: { value: "start" },
                                description: "The vertical alignment of the text relative to the avatar/presence.",
                                name: "textAlignment",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }] },
                            },
                            numTextLines: { defaultValue: null, description: "The number of text lines used.", name: "numTextLines", required: !0, type: { name: "number" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-persona/src/components/Persona/renderPersona.tsx#renderPersona_unstable"] = {
                            docgenInfo: renderPersona_unstable.__docgenInfo,
                            name: "renderPersona_unstable",
                            path: "../../packages/react-components/react-persona/src/components/Persona/renderPersona.tsx#renderPersona_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var Avatar = __webpack_require__("../../packages/react-components/react-avatar/src/components/Avatar/Avatar.tsx"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                PresenceBadge = __webpack_require__("../../packages/react-components/react-badge/src/components/PresenceBadge/PresenceBadge.tsx");
            let usePersona_unstable = (props, ref) => {
                    let { name, presenceOnly = !1, size = "medium", textAlignment = "start", textPosition = "after" } = props,
                        primaryText = (0, resolveShorthand.O)(props.primaryText, { required: !0, defaultProps: { children: name } }),
                        secondaryText = (0, resolveShorthand.O)(props.secondaryText),
                        tertiaryText = (0, resolveShorthand.O)(props.tertiaryText),
                        quaternaryText = (0, resolveShorthand.O)(props.quaternaryText),
                        numTextLines = [primaryText, secondaryText, tertiaryText, quaternaryText].filter(Boolean).length;
                    return {
                        numTextLines,
                        presenceOnly,
                        size,
                        textAlignment,
                        textPosition,
                        components: { root: "div", avatar: Avatar.q, presence: PresenceBadge.B, primaryText: "span", secondaryText: "span", tertiaryText: "span", quaternaryText: "span" },
                        root: (0, getNativeElementProps.n)("div", { ...props, ref }, ["name"]),
                        avatar: presenceOnly ? void 0 : (0, resolveShorthand.O)(props.avatar, { required: !0, defaultProps: { name, badge: props.presence, size: avatarSizes[size] } }),
                        presence: presenceOnly ? (0, resolveShorthand.O)(props.presence, { defaultProps: { size: presenceSizes[size] } }) : void 0,
                        primaryText,
                        secondaryText,
                        tertiaryText,
                        quaternaryText,
                    };
                },
                presenceSizes = { "extra-small": "tiny", small: "extra-small", medium: "small", large: "medium", "extra-large": "large", huge: "large" },
                avatarSizes = { "extra-small": 20, small: 28, medium: 32, large: 36, "extra-large": 40, huge: 56 };
            var makeResetStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeResetStyles.esm.js"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let personaClassNames = {
                    root: "fui-Persona",
                    avatar: "fui-Persona__avatar",
                    presence: "fui-Persona__presence",
                    primaryText: "fui-Persona__primaryText",
                    secondaryText: "fui-Persona__secondaryText",
                    tertiaryText: "fui-Persona__tertiaryText",
                    quaternaryText: "fui-Persona__quaternaryText",
                },
                avatarSpacing = "--fui-Persona__avatar--spacing",
                useRootClassName = (0, makeResetStyles_esm.h)({ display: "inline-grid", gridAutoRows: "max-content", gridAutoFlow: "column", justifyItems: "start", gridTemplateColumns: "max-content [middle] auto" }),
                useStyles = (0, makeStyles_esm.Z)({
                    beforeAfterCenter: { gridTemplateRows: "1fr [primary] max-content [secondary] max-content [tertiary] max-content [quaternary] max-content 1fr" },
                    after: {},
                    before: { justifyItems: "end", gridTemplateColumns: "auto [middle] max-content" },
                    below: { gridAutoFlow: "unset", justifyItems: "center", gridTemplateColumns: "unset" },
                    media: { gridRowStart: "span 5" },
                    mediaBeforeAfterCenter: { gridRowStart: "span 6" },
                    start: { alignSelf: "start" },
                    center: { alignSelf: "center" },
                    afterAlignToPrimary: { alignSelf: "center", gridRowStart: "unset", gridColumnEnd: "middle" },
                    beforeAlignToPrimary: { alignSelf: "center", gridRowStart: "unset", gridColumnStart: "middle" },
                    secondLineSpacing: { marginTop: "-2px" },
                    primary: { gridRowStart: "primary" },
                    secondary: { gridRowStart: "secondary" },
                    tertiary: { gridRowStart: "tertiary" },
                    quaternary: { gridRowStart: "quaternary" },
                }),
                useAvatarSpacingStyles = (0, makeStyles_esm.Z)({
                    "extra-small": { [avatarSpacing]: tokens.T.spacingHorizontalSNudge },
                    small: { [avatarSpacing]: tokens.T.spacingHorizontalS },
                    medium: { [avatarSpacing]: tokens.T.spacingHorizontalS },
                    large: { [avatarSpacing]: tokens.T.spacingHorizontalMNudge },
                    "extra-large": { [avatarSpacing]: tokens.T.spacingHorizontalMNudge },
                    huge: { [avatarSpacing]: tokens.T.spacingHorizontalM },
                    after: { marginRight: `var(${avatarSpacing})` },
                    below: { marginBottom: `var(${avatarSpacing})` },
                    before: { marginLeft: `var(${avatarSpacing})` },
                }),
                usePresenceSpacingStyles = (0, makeStyles_esm.Z)({ small: { [avatarSpacing]: tokens.T.spacingHorizontalSNudge } }),
                usePersonaStyles_unstable = (state) => {
                    let { presenceOnly, size, textAlignment, textPosition } = state,
                        alignToPrimary = presenceOnly && "start" === textAlignment && "extra-large" !== size && "huge" !== size,
                        alignBeforeAfterCenter = "below" !== textPosition && "center" === textAlignment,
                        { primaryTextClassName, optionalTextClassName } = useTextClassNames(state, alignToPrimary),
                        rootClassName = useRootClassName(),
                        styles = useStyles(),
                        avatarSpacingStyles = useAvatarSpacingStyles(),
                        presenceSpacingStyles = { ...avatarSpacingStyles, ...usePresenceSpacingStyles() };
                    return (
                        (state.root.className = (0, mergeClasses_esm.z)(personaClassNames.root, rootClassName, alignBeforeAfterCenter && styles.beforeAfterCenter, styles[textPosition], state.root.className)),
                        state.avatar &&
                            (state.avatar.className = (0, mergeClasses_esm.z)(
                                personaClassNames.avatar,
                                "below" !== textPosition && styles.media,
                                alignBeforeAfterCenter && styles.mediaBeforeAfterCenter,
                                styles[textAlignment],
                                avatarSpacingStyles[size],
                                avatarSpacingStyles[textPosition],
                                state.avatar.className
                            )),
                        state.presence &&
                            (state.presence.className = (0, mergeClasses_esm.z)(
                                personaClassNames.presence,
                                "below" !== textPosition && styles.media,
                                alignBeforeAfterCenter && styles.mediaBeforeAfterCenter,
                                styles[textAlignment],
                                presenceSpacingStyles[size],
                                presenceSpacingStyles[textPosition],
                                "after" === textPosition && alignToPrimary && styles.afterAlignToPrimary,
                                "before" === textPosition && alignToPrimary && styles.beforeAlignToPrimary,
                                state.presence.className
                            )),
                        state.primaryText && (state.primaryText.className = (0, mergeClasses_esm.z)(personaClassNames.primaryText, alignBeforeAfterCenter && styles.primary, primaryTextClassName, state.primaryText.className)),
                        state.secondaryText &&
                            (state.secondaryText.className = (0, mergeClasses_esm.z)(
                                personaClassNames.secondaryText,
                                alignBeforeAfterCenter && styles.secondary,
                                optionalTextClassName,
                                styles.secondLineSpacing,
                                state.secondaryText.className
                            )),
                        state.tertiaryText && (state.tertiaryText.className = (0, mergeClasses_esm.z)(personaClassNames.tertiaryText, alignBeforeAfterCenter && styles.tertiary, optionalTextClassName, state.tertiaryText.className)),
                        state.quaternaryText &&
                            (state.quaternaryText.className = (0, mergeClasses_esm.z)(personaClassNames.quaternaryText, alignBeforeAfterCenter && styles.quaternary, optionalTextClassName, state.quaternaryText.className)),
                        state
                    );
                },
                usePrimaryTextBaseClassName = (0, makeResetStyles_esm.h)({ display: "block", color: tokens.T.colorNeutralForeground1, ...typographyStyles.w.body1 }),
                useOptionalTextBaseClassName = (0, makeResetStyles_esm.h)({ display: "block", color: tokens.T.colorNeutralForeground2, ...typographyStyles.w.caption1 }),
                useTextStyles = (0, makeStyles_esm.Z)({
                    beforeAlignToPrimary: { gridColumnEnd: "middle" },
                    afterAlignToPrimary: { gridColumnStart: "middle" },
                    body1: typographyStyles.w.body1,
                    caption1: typographyStyles.w.caption1,
                    subtitle2: typographyStyles.w.subtitle2,
                }),
                useTextClassNames = (state, alignToPrimary) => {
                    let primaryTextSize, alignToPrimaryClassName;
                    let { presenceOnly, size, textPosition } = state,
                        primaryTextBaseClassName = usePrimaryTextBaseClassName(),
                        optionalTextBaseClassName = useOptionalTextBaseClassName(),
                        textStyles = useTextStyles();
                    return (
                        presenceOnly
                            ? ("extra-small" === size ? (primaryTextSize = state.numTextLines <= 1 && textStyles.caption1) : ("extra-large" === size || "huge" === size) && (primaryTextSize = textStyles.subtitle2),
                              alignToPrimary && ("before" === textPosition ? (alignToPrimaryClassName = textStyles.beforeAlignToPrimary) : "after" === textPosition && (alignToPrimaryClassName = textStyles.afterAlignToPrimary)))
                            : "huge" === size
                            ? (primaryTextSize = textStyles.subtitle2)
                            : "extra-large" === size && (primaryTextSize = textStyles.subtitle2),
                        {
                            primaryTextClassName: (0, mergeClasses_esm.z)(primaryTextBaseClassName, primaryTextSize, alignToPrimaryClassName),
                            optionalTextClassName: (0, mergeClasses_esm.z)(optionalTextBaseClassName, !presenceOnly && "huge" === size && textStyles.body1, alignToPrimaryClassName),
                        }
                    );
                };
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Persona = react.forwardRef((props, ref) => {
                let state = usePersona_unstable(props, ref);
                return usePersonaStyles_unstable(state), (0, CustomStyleHooksContext.oj)("usePersonaStyles_unstable")(state), renderPersona_unstable(state);
            });
            Persona.displayName = "Persona";
            try {
                (Persona.displayName = "Persona"),
                    (Persona.__docgenInfo = {
                        description: "A Persona is a visual representation of a person or status that showcases an Avatar, PresenceBadge,\nor an Avatar with a PresenceBadge.",
                        displayName: "Persona",
                        props: {
                            avatar: {
                                defaultValue: null,
                                description: "Avatar to display.\n\nIf a PresenceBadge and an Avatar are provided, the Avatar will display the PresenceBadge as its presence.",
                                name: "avatar",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<AvatarSlots, "root">, "color"> & { active?: "active" | "inactive" | "unset"; activeAppearance?: "ring" | ... 2 more ...; ... 4 more ...; size?: AvatarSize | undefined; } & RefAttributes<...>>> | null | undefined',
                                },
                            },
                            presence: {
                                defaultValue: null,
                                description: "PresenceBadge to display.\n\nIf `presenceOnly` is true, the PresenceBadge will be displayed instead of the Avatar.",
                                name: "presence",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<Pick<BadgeSlots, "root" | "icon">, "root">, "color"> & Pick<BadgeProps, "size"> & { ...; } & RefAttributes<...>>> | null' },
                            },
                            primaryText: {
                                defaultValue: null,
                                description:
                                    "The first line of text in the Persona, larger than the rest of the lines.\n\n`primaryText` defaults to the `name` prop. We recomend to only use `name`, use `primaryText` when the text is\n different than the `name` prop.",
                                name: "primaryText",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            secondaryText: {
                                defaultValue: null,
                                description: "The second line of text in the Persona.",
                                name: "secondaryText",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            tertiaryText: {
                                defaultValue: null,
                                description: "The third line of text in the Persona.",
                                name: "tertiaryText",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            quaternaryText: {
                                defaultValue: null,
                                description: "The fourth line of text in the Persona.",
                                name: "quaternaryText",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            name: {
                                defaultValue: null,
                                description: "The name of the person or entity represented by the Persona.\n\nWhen `primaryText` is not provided, this will be used as the default value for `primaryText`.",
                                name: "name",
                                required: !1,
                                type: { name: "string" },
                            },
                            presenceOnly: { defaultValue: { value: "false" }, description: "Whether to display only the presence.", name: "presenceOnly", required: !1, type: { name: "boolean" } },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "The size of a Persona and its text.",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }, { value: '"extra-small"' }, { value: '"extra-large"' }, { value: '"huge"' }] },
                            },
                            textPosition: {
                                defaultValue: { value: "after" },
                                description: "The position of the text relative to the avatar/presence.",
                                name: "textPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }, { value: '"below"' }] },
                            },
                            textAlignment: {
                                defaultValue: { value: "start" },
                                description: "The vertical alignment of the text relative to the avatar/presence.",
                                name: "textAlignment",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-persona/src/components/Persona/Persona.tsx#Persona"] = {
                            docgenInfo: Persona.__docgenInfo,
                            name: "Persona",
                            path: "../../packages/react-components/react-persona/src/components/Persona/Persona.tsx#Persona",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-radio/src/components/RadioGroup/RadioGroup.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { E: () => RadioGroup });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts"),
                RadioGroupContext = __webpack_require__("../../packages/react-components/react-radio/src/contexts/RadioGroupContext.ts");
            let renderRadioGroup_unstable = (state, contextValues) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(RadioGroupContext.L1.Provider, { value: contextValues.radioGroup }, (0, createElement.a)(slots.root, slotProps.root));
            };
            try {
                (renderRadioGroup_unstable.displayName = "renderRadioGroup_unstable"),
                    (renderRadioGroup_unstable.__docgenInfo = { description: "Render the final JSX of RadioGroup", displayName: "renderRadioGroup_unstable", props: {} }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-radio/src/components/RadioGroup/renderRadioGroup.tsx#renderRadioGroup_unstable"] = {
                            docgenInfo: renderRadioGroup_unstable.__docgenInfo,
                            name: "renderRadioGroup_unstable",
                            path: "../../packages/react-components/react-radio/src/components/RadioGroup/renderRadioGroup.tsx#renderRadioGroup_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                useId = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                useEventCallback = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useEventCallback.ts"),
                isHTMLElement = __webpack_require__("../../packages/react-components/react-utilities/src/utils/isHTMLElement.ts");
            let useRadioGroup_unstable = (props, ref) => {
                props = (0, useFieldControlProps.k)(props);
                let generatedName = (0, useId.Me)("radiogroup-"),
                    { name = generatedName, value, defaultValue, disabled, layout = "vertical", onChange, required } = props;
                return {
                    layout,
                    name,
                    value,
                    defaultValue,
                    disabled,
                    required,
                    components: { root: "div" },
                    root: {
                        ref,
                        role: "radiogroup",
                        ...(0, getNativeElementProps.n)("div", props, ["onChange", "name"]),
                        onChange: (0, useEventCallback.$)((ev) => {
                            onChange && (0, isHTMLElement.R)(ev.target, { constructorName: "HTMLInputElement" }) && "radio" === ev.target.type && onChange(ev, { value: ev.target.value });
                        }),
                    },
                };
            };
            var makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js");
            let radioGroupClassNames = { root: "fui-RadioGroup" },
                useStyles = (0, makeStyles_esm.Z)({ root: { display: "flex", alignItems: "flex-start" }, vertical: { flexDirection: "column" } }),
                useRadioGroupStyles_unstable = (state) => {
                    let styles = useStyles();
                    state.root.className = (0, mergeClasses_esm.z)(radioGroupClassNames.root, styles.root, "vertical" === state.layout && styles.vertical, state.root.className);
                },
                useRadioGroupContextValues = (state) => {
                    let { name, value, defaultValue, disabled, layout, required } = state,
                        ariaDescribedBy = state.root["aria-describedby"],
                        radioGroup = react.useMemo(() => ({ name, value, defaultValue, disabled, layout, required, "aria-describedby": ariaDescribedBy }), [name, value, defaultValue, disabled, layout, required, ariaDescribedBy]);
                    return { radioGroup };
                };
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let RadioGroup = react.forwardRef((props, ref) => {
                let state = useRadioGroup_unstable(props, ref),
                    contextValues = useRadioGroupContextValues(state);
                return useRadioGroupStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useRadioGroupStyles_unstable")(state), renderRadioGroup_unstable(state, contextValues);
            });
            RadioGroup.displayName = "RadioGroup";
            try {
                (RadioGroup.displayName = "RadioGroup"),
                    (RadioGroup.__docgenInfo = {
                        description: "A RadioGroup component presents a set of options where only one option can be selected.",
                        displayName: "RadioGroup",
                        props: {
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }] } },
                            name: {
                                defaultValue: null,
                                description: "The name of this radio group. This name is applied to all Radio items inside this group.\n\nIf no name is provided, one will be generated so that all of the Radio items have the same name.",
                                name: "name",
                                required: !1,
                                type: { name: "string" },
                            },
                            value: {
                                defaultValue: null,
                                description: "The selected Radio item in this group.\n\nThis should be the `value` prop of one of the Radio items inside this group.",
                                name: "value",
                                required: !1,
                                type: { name: "string" },
                            },
                            onChange: {
                                defaultValue: null,
                                description: "Callback when the selected Radio item changes.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: FormEvent<HTMLDivElement>, data: RadioGroupOnChangeData) => void)" },
                            },
                            layout: {
                                defaultValue: { value: "vertical" },
                                description: "How the radio items are laid out in the group.",
                                name: "layout",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"horizontal"' }, { value: '"vertical"' }, { value: '"horizontal-stacked"' }] },
                            },
                            disabled: { defaultValue: null, description: "Disable all Radio items in this group.", name: "disabled", required: !1, type: { name: "boolean" } },
                            required: { defaultValue: null, description: "Require a selection in this group. Adds the `required` prop to all child Radio items.", name: "required", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-radio/src/components/RadioGroup/RadioGroup.tsx#RadioGroup"] = {
                            docgenInfo: RadioGroup.__docgenInfo,
                            name: "RadioGroup",
                            path: "../../packages/react-components/react-radio/src/components/RadioGroup/RadioGroup.tsx#RadioGroup",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-slider/src/components/Slider/Slider.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { i: () => Slider });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                useId = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                useMergedRefs = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useMergedRefs.ts"),
                useControllableState = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useControllableState.ts");
            let clamp = (value, min, max) => Math.max(min, Math.min(max, value || 0));
            var useEventCallback = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useEventCallback.ts"),
                ProviderContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/ProviderContext/ProviderContext.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                createFocusOutlineStyle = __webpack_require__("../../packages/react-components/react-tabster/src/focus/createFocusOutlineStyle.ts"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts");
            let sliderClassNames = { root: "fui-Slider", rail: "fui-Slider__rail", thumb: "fui-Slider__thumb", input: "fui-Slider__input" },
                thumbSizeVar = "--fui-Slider__thumb--size",
                railSizeVar = "--fui-Slider__rail--size",
                railColorVar = "--fui-Slider__rail--color",
                progressColorVar = "--fui-Slider__progress--color",
                thumbColorVar = "--fui-Slider__thumb--color",
                sliderCSSVars = { sliderDirectionVar: "--fui-Slider--direction", sliderProgressVar: "--fui-Slider--progress", sliderStepsPercentVar: "--fui-Slider--steps-percent" },
                { sliderDirectionVar, sliderStepsPercentVar, sliderProgressVar } = sliderCSSVars,
                useRootStyles = (0, makeStyles_esm.Z)({
                    root: { position: "relative", display: "inline-grid", touchAction: "none", alignItems: "center", justifyItems: "center" },
                    small: { [thumbSizeVar]: "16px", [railSizeVar]: "2px", minHeight: "24px" },
                    medium: { [thumbSizeVar]: "20px", [railSizeVar]: "4px", minHeight: "32px" },
                    horizontal: { minWidth: "120px", gridTemplateRows: `1fr var(${thumbSizeVar}) 1fr`, gridTemplateColumns: `1fr calc(100% - var(${thumbSizeVar})) 1fr` },
                    vertical: { minHeight: "120px", gridTemplateRows: `1fr calc(100% - var(${thumbSizeVar})) 1fr`, gridTemplateColumns: `1fr var(${thumbSizeVar}) 1fr` },
                    enabled: {
                        [railColorVar]: tokens.T.colorNeutralStrokeAccessible,
                        [progressColorVar]: tokens.T.colorCompoundBrandBackground,
                        [thumbColorVar]: tokens.T.colorCompoundBrandBackground,
                        ":hover": { [thumbColorVar]: tokens.T.colorCompoundBrandBackgroundHover, [progressColorVar]: tokens.T.colorCompoundBrandBackgroundHover },
                        ":active": { [thumbColorVar]: tokens.T.colorCompoundBrandBackgroundPressed, [progressColorVar]: tokens.T.colorCompoundBrandBackgroundPressed },
                        "@media (forced-colors: active)": { [railColorVar]: "CanvasText", [thumbColorVar]: "Highlight", [progressColorVar]: "Highlight", ":hover": { [thumbColorVar]: "Highlight", [progressColorVar]: "Highlight" } },
                    },
                    disabled: {
                        [thumbColorVar]: tokens.T.colorNeutralForegroundDisabled,
                        [railColorVar]: tokens.T.colorNeutralBackgroundDisabled,
                        [progressColorVar]: tokens.T.colorNeutralForegroundDisabled,
                        "@media (forced-colors: active)": { [railColorVar]: "GrayText", [thumbColorVar]: "GrayText", [progressColorVar]: "GrayText" },
                    },
                    focusIndicatorHorizontal: (0, createFocusOutlineStyle.b)({ selector: "focus-within", style: { outlineOffset: { top: "-2px", bottom: "-2px", left: "8px", right: "8px" } } }),
                    focusIndicatorVertical: (0, createFocusOutlineStyle.b)({ selector: "focus-within", style: { outlineOffset: { top: "6px", bottom: "6px", left: "4px", right: "4px" } } }),
                }),
                useRailStyles = (0, makeStyles_esm.Z)({
                    rail: {
                        ...index_esm.q5.borderRadius(tokens.T.borderRadiusXLarge),
                        pointerEvents: "none",
                        gridRowStart: "2",
                        gridRowEnd: "2",
                        gridColumnStart: "2",
                        gridColumnEnd: "2",
                        position: "relative",
                        forcedColorAdjust: "none",
                        backgroundImage: `linear-gradient(
      var(${sliderDirectionVar}),
      var(${progressColorVar}) 0%,
      var(${progressColorVar}) var(${sliderProgressVar}),
      var(${railColorVar}) var(${sliderProgressVar})
    )`,
                        outlineWidth: "1px",
                        outlineStyle: "solid",
                        outlineColor: tokens.T.colorTransparentStroke,
                        "::before": {
                            content: "''",
                            position: "absolute",
                            backgroundImage: `repeating-linear-gradient(
        var(${sliderDirectionVar}),
        #0000 0%,
        #0000 calc(var(${sliderStepsPercentVar}) - 1px),
        ${tokens.T.colorNeutralBackground1} calc(var(${sliderStepsPercentVar}) - 1px),
        ${tokens.T.colorNeutralBackground1} var(${sliderStepsPercentVar})
      )`,
                            "@media (forced-colors: active)": {
                                backgroundImage: `repeating-linear-gradient(
          var(${sliderDirectionVar}),
          #0000 0%,
          #0000 calc(var(${sliderStepsPercentVar}) - 1px),
          HighlightText calc(var(${sliderStepsPercentVar}) - 1px),
          HighlightText var(${sliderStepsPercentVar})
        )`,
                            },
                        },
                    },
                    horizontal: { width: "100%", height: `var(${railSizeVar})`, "::before": { left: "-1px", right: "-1px", height: `var(${railSizeVar})` } },
                    vertical: { width: `var(${railSizeVar})`, height: "100%", "::before": { width: `var(${railSizeVar})`, top: "-1px", bottom: "1px" } },
                }),
                useThumbStyles = (0, makeStyles_esm.Z)({
                    thumb: {
                        gridRowStart: "2",
                        gridRowEnd: "2",
                        gridColumnStart: "2",
                        gridColumnEnd: "2",
                        position: "absolute",
                        width: `var(${thumbSizeVar})`,
                        height: `var(${thumbSizeVar})`,
                        pointerEvents: "none",
                        outlineStyle: "none",
                        forcedColorAdjust: "none",
                        ...index_esm.q5.borderRadius(tokens.T.borderRadiusCircular),
                        boxShadow: `0 0 0 calc(var(${thumbSizeVar}) * .2) ${tokens.T.colorNeutralBackground1} inset`,
                        backgroundColor: `var(${thumbColorVar})`,
                        "::before": {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            bottom: "0px",
                            right: "0px",
                            ...index_esm.q5.borderRadius(tokens.T.borderRadiusCircular),
                            boxSizing: "border-box",
                            content: "''",
                            ...index_esm.q5.border(`calc(var(${thumbSizeVar}) * .05)`, "solid", tokens.T.colorNeutralStroke1),
                        },
                    },
                    disabled: { "::before": { ...index_esm.q5.border(`calc(var(${thumbSizeVar}) * .05)`, "solid", tokens.T.colorNeutralForegroundDisabled) } },
                    horizontal: { transform: "translateX(-50%)", left: `var(${sliderProgressVar})` },
                    vertical: { transform: "translateY(50%)", bottom: `var(${sliderProgressVar})` },
                }),
                useInputStyles = (0, makeStyles_esm.Z)({
                    input: { cursor: "pointer", opacity: 0, gridRowStart: "1", gridRowEnd: "-1", gridColumnStart: "1", gridColumnEnd: "-1", ...index_esm.q5.padding(0), ...index_esm.q5.margin(0) },
                    disabled: { cursor: "default" },
                    horizontal: { height: `var(${thumbSizeVar})`, width: "100%" },
                    vertical: { height: "100%", width: `var(${thumbSizeVar})`, "-webkit-appearance": "slider-vertical" },
                }),
                useSliderStyles_unstable = (state) => {
                    let rootStyles = useRootStyles(),
                        railStyles = useRailStyles(),
                        thumbStyles = useThumbStyles(),
                        inputStyles = useInputStyles(),
                        isVertical = state.vertical;
                    return (
                        (state.root.className = (0, mergeClasses_esm.z)(
                            sliderClassNames.root,
                            rootStyles.root,
                            isVertical ? rootStyles.focusIndicatorVertical : rootStyles.focusIndicatorHorizontal,
                            rootStyles[state.size],
                            isVertical ? rootStyles.vertical : rootStyles.horizontal,
                            state.disabled ? rootStyles.disabled : rootStyles.enabled,
                            state.root.className
                        )),
                        (state.rail.className = (0, mergeClasses_esm.z)(sliderClassNames.rail, railStyles.rail, isVertical ? railStyles.vertical : railStyles.horizontal, state.rail.className)),
                        (state.thumb.className = (0, mergeClasses_esm.z)(sliderClassNames.thumb, thumbStyles.thumb, isVertical ? thumbStyles.vertical : thumbStyles.horizontal, state.disabled && thumbStyles.disabled, state.thumb.className)),
                        (state.input.className = (0, mergeClasses_esm.z)(sliderClassNames.input, inputStyles.input, isVertical ? inputStyles.vertical : inputStyles.horizontal, state.disabled && inputStyles.disabled, state.input.className)),
                        state
                    );
                },
                { sliderStepsPercentVar: useSliderState_sliderStepsPercentVar, sliderProgressVar: useSliderState_sliderProgressVar, sliderDirectionVar: useSliderState_sliderDirectionVar } = sliderCSSVars,
                getPercent = (value, min, max) => (max === min ? 0 : ((value - min) / (max - min)) * 100),
                useSliderState_unstable = (state, props) => {
                    let { defaultValue = 0, min = 0, max = 100, step, value } = props,
                        { dir } = (0, ProviderContext.O)(),
                        [currentValue, setCurrentValue] = (0, useControllableState.T)({ state: void 0 !== value ? clamp(value, min, max) : void 0, defaultState: clamp(defaultValue, min, max), initialState: 0 }),
                        valuePercent = getPercent(currentValue, min, max),
                        inputOnChange = state.input.onChange,
                        propsOnChange = props.onChange,
                        onChange = (0, useEventCallback.$)((ev) => {
                            let newValue = Number(ev.target.value);
                            setCurrentValue(clamp(newValue, min, max)), inputOnChange && inputOnChange !== propsOnChange ? inputOnChange(ev) : propsOnChange && propsOnChange(ev, { value: newValue });
                        }),
                        rootVariables = {
                            [useSliderState_sliderDirectionVar]: state.vertical ? "0deg" : "ltr" === dir ? "90deg" : "270deg",
                            [useSliderState_sliderStepsPercentVar]: step && step > 0 ? `${(100 * step) / (max - min)}%` : "",
                            [useSliderState_sliderProgressVar]: `${valuePercent}%`,
                        };
                    return (state.root.style = { ...rootVariables, ...state.root.style }), (state.input.value = currentValue), (state.input.onChange = onChange), state;
                };
            var useFocusWithin = __webpack_require__("../../packages/react-components/react-tabster/src/hooks/useFocusWithin.ts");
            let useSlider_unstable = (props, ref) => {
                props = (0, useFieldControlProps.k)(props, { supportsLabelFor: !0 });
                let nativeProps = (0, getNativeElementProps.$)({ props, primarySlotTagName: "input", excludedPropNames: ["onChange", "size"] }),
                    { disabled, vertical, size = "medium", root, input, rail, thumb } = props,
                    state = {
                        disabled,
                        size,
                        vertical,
                        components: { input: "input", rail: "div", root: "div", thumb: "div" },
                        root: (0, resolveShorthand.O)(root, { required: !0, defaultProps: nativeProps.root }),
                        input: (0, resolveShorthand.O)(input, { required: !0, defaultProps: { id: (0, useId.Me)("slider-", props.id), ref, ...nativeProps.primary, type: "range", orient: vertical ? "vertical" : void 0 } }),
                        rail: (0, resolveShorthand.O)(rail, { required: !0 }),
                        thumb: (0, resolveShorthand.O)(thumb, { required: !0 }),
                    };
                return (state.root.ref = (0, useMergedRefs.r)(state.root.ref, (0, useFocusWithin.L)())), useSliderState_unstable(state, props), state;
            };
            var createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderSlider_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(slots.root, slotProps.root, (0, createElement.a)(slots.input, slotProps.input), (0, createElement.a)(slots.rail, slotProps.rail), (0, createElement.a)(slots.thumb, slotProps.thumb));
            };
            try {
                (renderSlider_unstable.displayName = "renderSlider_unstable"),
                    (renderSlider_unstable.__docgenInfo = {
                        description: "Render the final JSX of Slider",
                        displayName: "renderSlider_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | ComponentType<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; rail: "div" | ComponentType<...>; thumb: "div" | ComponentType<...>; input: "input" | ComponentType<...>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "The root of the Slider.\nThe root slot receives the `className` and `style` specified directly on the `<Slider>`.\nAll other native props will be applied to the primary slot, `input`.",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            rail: {
                                defaultValue: null,
                                description: "The Slider's base. It is used to visibly display the min and max selectable values.",
                                name: "rail",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            thumb: {
                                defaultValue: null,
                                description: "The draggable icon used to select a given value from the Slider.\nThis is the element containing `role = 'slider'`.",
                                name: "thumb",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    "The hidden input for the Slider.\nThis is the PRIMARY slot: all native properties specified directly on `<Slider>` will be applied to this slot,\nexcept `className` and `style`, which remain on the root slot.",
                                name: "input",
                                required: !0,
                                type: {
                                    name:
                                        '{ as?: "input" | undefined; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; } & { ...; }',
                                },
                            },
                            size: { defaultValue: { value: "'medium'" }, description: "The size of the Slider.", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }] } },
                            vertical: { defaultValue: { value: "`false`" }, description: "Render the Slider in a vertical orientation, smallest value on the bottom.", name: "vertical", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-slider/src/components/Slider/renderSlider.tsx#renderSlider_unstable"] = {
                            docgenInfo: renderSlider_unstable.__docgenInfo,
                            name: "renderSlider_unstable",
                            path: "../../packages/react-components/react-slider/src/components/Slider/renderSlider.tsx#renderSlider_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Slider = react.forwardRef((props, ref) => {
                let state = useSlider_unstable(props, ref);
                return useSliderStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useSliderStyles_unstable")(state), renderSlider_unstable(state);
            });
            Slider.displayName = "Slider";
            try {
                (Slider.displayName = "Slider"),
                    (Slider.__docgenInfo = {
                        description: "The Slider component allows users to quickly select a value by dragging a thumb across a rail.",
                        displayName: "Slider",
                        props: {
                            root: {
                                defaultValue: null,
                                description: "The root of the Slider.\nThe root slot receives the `className` and `style` specified directly on the `<Slider>`.\nAll other native props will be applied to the primary slot, `input`.",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    "The hidden input for the Slider.\nThis is the PRIMARY slot: all native properties specified directly on `<Slider>` will be applied to this slot,\nexcept `className` and `style`, which remain on the root slot.",
                                name: "input",
                                required: !1,
                                type: {
                                    name: '({ as?: "input"; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; } & { ...; })',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"input"' }] } },
                            rail: {
                                defaultValue: null,
                                description: "The Slider's base. It is used to visibly display the min and max selectable values.",
                                name: "rail",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            thumb: {
                                defaultValue: null,
                                description: "The draggable icon used to select a given value from the Slider.\nThis is the element containing `role = 'slider'`.",
                                name: "thumb",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            orient: {
                                defaultValue: null,
                                description:
                                    "Orient is a non standard attribute that allows for vertical orientation in Firefox. It is set internally\nwhen `vertical` is set to true.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#non_standard_attributes\nWebkit/Chromium support for vertical inputs is provided via -webkit-appearance css property",
                                name: "orient",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"horizontal"' }, { value: '"vertical"' }] },
                            },
                            defaultValue: { defaultValue: null, description: "The starting value for an uncontrolled Slider.\nMutually exclusive with `value` prop.", name: "defaultValue", required: !1, type: { name: "number" } },
                            size: { defaultValue: { value: "'medium'" }, description: "The size of the Slider.", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }] } },
                            value: { defaultValue: null, description: "The current value of the controlled Slider.\nMutually exclusive with `defaultValue` prop.", name: "value", required: !1, type: { name: "number" } },
                            vertical: { defaultValue: { value: "`false`" }, description: "Render the Slider in a vertical orientation, smallest value on the bottom.", name: "vertical", required: !1, type: { name: "boolean" } },
                            onChange: {
                                defaultValue: null,
                                description: "Triggers a callback when the value has been changed. This will be called on every individual step.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => void)" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-slider/src/components/Slider/Slider.tsx#Slider"] = {
                            docgenInfo: Slider.__docgenInfo,
                            name: "Slider",
                            path: "../../packages/react-components/react-slider/src/components/Slider/Slider.tsx#Slider",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-switch/src/components/Switch/Switch.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { r: () => Switch });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js"),
                useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                chunk_1 = __webpack_require__("../../node_modules/@fluentui/react-icons/lib/icons/chunk-1.js"),
                Label = __webpack_require__("../../packages/react-components/react-label/src/components/Label/Label.tsx"),
                useFocusWithin = __webpack_require__("../../packages/react-components/react-tabster/src/hooks/useFocusWithin.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                useId = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useId.ts"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                mergeCallbacks = __webpack_require__("../../packages/react-components/react-utilities/src/utils/mergeCallbacks.ts");
            let useSwitch_unstable = (props, ref) => {
                props = (0, useFieldControlProps.k)(props, { supportsLabelFor: !0, supportsRequired: !0 });
                let { checked, defaultChecked, disabled, labelPosition = "after", onChange, required } = props,
                    nativeProps = (0, getNativeElementProps.$)({ props, primarySlotTagName: "input", excludedPropNames: ["checked", "defaultChecked", "onChange"] }),
                    id = (0, useId.Me)("switch-", nativeProps.primary.id),
                    root = (0, resolveShorthand.O)(props.root, { defaultProps: { ref: (0, useFocusWithin.L)(), ...nativeProps.root }, required: !0 }),
                    indicator = (0, resolveShorthand.O)(props.indicator, { defaultProps: { "aria-hidden": !0, children: (0, jsx_runtime.jsx)(chunk_1.MW6, {}) }, required: !0 }),
                    input = (0, resolveShorthand.O)(props.input, { defaultProps: { checked, defaultChecked, id, ref, role: "switch", type: "checkbox", ...nativeProps.primary }, required: !0 });
                input.onChange = (0, mergeCallbacks.E)(input.onChange, (ev) => (null == onChange ? void 0 : onChange(ev, { checked: ev.currentTarget.checked })));
                let label = (0, resolveShorthand.O)(props.label, { defaultProps: { disabled, htmlFor: id, required, size: "medium" } });
                return { labelPosition, components: { root: "div", indicator: "div", input: "input", label: Label._ }, root, indicator, input, label };
            };
            try {
                (useSwitch_unstable.displayName = "useSwitch_unstable"),
                    (useSwitch_unstable.__docgenInfo = {
                        description: "Create the state required to render Switch.\n\nThe returned state can be modified with hooks such as useSwitchStyles_unstable,\nbefore being passed to renderSwitch_unstable.",
                        displayName: "useSwitch_unstable",
                        props: {
                            root: {
                                defaultValue: null,
                                description:
                                    "The root element of the Switch.\n\nThe root slot receives the `className` and `style` specified directly on the `<Switch>` tag.\nAll other native props will be applied to the primary slot: `input`.",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    "Hidden input that handles the Switch's functionality.\n\nThis is the PRIMARY slot: all native properties specified directly on the `<Switch>` tag will be applied to this\nslot, except `className` and `style`, which remain on the root slot.",
                                name: "input",
                                required: !1,
                                type: { name: '({ as?: "input"; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; })' },
                            },
                            label: {
                                defaultValue: null,
                                description: "The Switch's label.",
                                name: "label",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<LabelSlots, "root">, "required"> & { disabled?: boolean; required?: boolean | WithSlotShorthandValue<{ as?: "span"; } & Pick<...> & { ...; } & { ...; }> | null | undefined; size?: "small" | ... 2 more ... | undefined; weight?: ...',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"input"' }] } },
                            indicator: {
                                defaultValue: null,
                                description: "The track and the thumb sliding over it indicating the on and off status of the Switch.",
                                name: "indicator",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            checked: {
                                defaultValue: { value: "false" },
                                description:
                                    "Defines the controlled checked state of the Switch.\nIf passed, Switch ignores the `defaultChecked` property.\nThis should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the\ncorrect value based on handling `onChange` events and re-rendering.",
                                name: "checked",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            defaultChecked: {
                                defaultValue: { value: "false" },
                                description: "Defines whether the Switch is initially in a checked state or not when rendered.",
                                name: "defaultChecked",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            labelPosition: {
                                defaultValue: { value: "after" },
                                description: "The position of the label relative to the Switch.",
                                name: "labelPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }, { value: '"above"' }] },
                            },
                            onChange: {
                                defaultValue: null,
                                description: "Callback to be called when the checked state value changes.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: ChangeEvent<HTMLInputElement>, data: SwitchOnChangeData) => void)" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-switch/src/components/Switch/useSwitch.tsx#useSwitch_unstable"] = {
                            docgenInfo: useSwitch_unstable.__docgenInfo,
                            name: "useSwitch_unstable",
                            path: "../../packages/react-components/react-switch/src/components/Switch/useSwitch.tsx#useSwitch_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderSwitch_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state),
                    { labelPosition } = state;
                return (0, createElement.a)(
                    slots.root,
                    slotProps.root,
                    (0, createElement.a)(slots.input, slotProps.input),
                    "after" !== labelPosition && slots.label && (0, createElement.a)(slots.label, slotProps.label),
                    (0, createElement.a)(slots.indicator, slotProps.indicator),
                    "after" === labelPosition && slots.label && (0, createElement.a)(slots.label, slotProps.label)
                );
            };
            try {
                (renderSwitch_unstable.displayName = "renderSwitch_unstable"),
                    (renderSwitch_unstable.__docgenInfo = {
                        description: "Render a Switch component by passing the state defined props to the appropriate slots.",
                        displayName: "renderSwitch_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | ComponentType<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; indicator: "div" | ComponentType<...>; input: "input" | ComponentType<...>; label: "label" | ComponentType<...>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description:
                                    "The root element of the Switch.\n\nThe root slot receives the `className` and `style` specified directly on the `<Switch>` tag.\nAll other native props will be applied to the primary slot: `input`.",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            indicator: {
                                defaultValue: null,
                                description: "The track and the thumb sliding over it indicating the on and off status of the Switch.",
                                name: "indicator",
                                required: !0,
                                type: { name: '{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    "Hidden input that handles the Switch's functionality.\n\nThis is the PRIMARY slot: all native properties specified directly on the `<Switch>` tag will be applied to this\nslot, except `className` and `style`, which remain on the root slot.",
                                name: "input",
                                required: !0,
                                type: {
                                    name: '{ as?: "input" | undefined; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; }',
                                },
                            },
                            label: {
                                defaultValue: null,
                                description: "The Switch's label.",
                                name: "label",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotRenderFunction<Omit<ComponentProps<LabelSlots, "root">, "required"> & { disabled?: boolean; required?: boolean | WithSlotShorthandValue<{ as?: "span"; } & Pick<...> & { ...; } & { ...; }> | null | undefined; size?: "small" | ... 2 more ... | undefined; weight?: "regular" | ... 1 more ...',
                                },
                            },
                            labelPosition: {
                                defaultValue: { value: "after" },
                                description: "The position of the label relative to the Switch.",
                                name: "labelPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }, { value: '"above"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-switch/src/components/Switch/renderSwitch.tsx#renderSwitch_unstable"] = {
                            docgenInfo: renderSwitch_unstable.__docgenInfo,
                            name: "renderSwitch_unstable",
                            path: "../../packages/react-components/react-switch/src/components/Switch/renderSwitch.tsx#renderSwitch_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var createFocusOutlineStyle = __webpack_require__("../../packages/react-components/react-tabster/src/focus/createFocusOutlineStyle.ts"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                makeResetStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeResetStyles.esm.js"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js");
            let switchClassNames = { root: "fui-Switch", indicator: "fui-Switch__indicator", input: "fui-Switch__input", label: "fui-Switch__label" };
            switchClassNames.root;
            let useRootBaseClassName = (0, makeResetStyles_esm.h)({
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    display: "inline-flex",
                    position: "relative",
                    ...(0, createFocusOutlineStyle.b)({ style: {}, selector: "focus-within" }),
                }),
                useRootStyles = (0, makeStyles_esm.Z)({ vertical: { flexDirection: "column" } }),
                useIndicatorBaseClassName = (0, makeResetStyles_esm.h)({
                    borderRadius: tokens.T.borderRadiusCircular,
                    border: "1px solid",
                    lineHeight: 0,
                    boxSizing: "border-box",
                    fill: "currentColor",
                    flexShrink: 0,
                    fontSize: "18px",
                    height: "20px",
                    margin: tokens.T.spacingVerticalS + " " + tokens.T.spacingHorizontalS,
                    pointerEvents: "none",
                    transitionDuration: tokens.T.durationNormal,
                    transitionTimingFunction: tokens.T.curveEasyEase,
                    transitionProperty: "background, border, color",
                    width: "40px",
                    "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms" },
                    "> *": {
                        transitionDuration: tokens.T.durationNormal,
                        transitionTimingFunction: tokens.T.curveEasyEase,
                        transitionProperty: "transform",
                        "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms" },
                    },
                }),
                useIndicatorStyles = (0, makeStyles_esm.Z)({ labelAbove: { marginTop: 0 } }),
                useInputBaseClassName = (0, makeResetStyles_esm.h)({
                    boxSizing: "border-box",
                    cursor: "pointer",
                    height: "100%",
                    margin: 0,
                    opacity: 0,
                    position: "absolute",
                    width: `calc(40px + 2 * ${tokens.T.spacingHorizontalS})`,
                    ":checked": { [`& ~ .${switchClassNames.indicator}`]: { "> *": { transform: "translateX(20px)" } } },
                    ":disabled": {
                        cursor: "default",
                        [`& ~ .${switchClassNames.indicator}`]: { color: tokens.T.colorNeutralForegroundDisabled },
                        [`& ~ .${switchClassNames.label}`]: { cursor: "default", color: tokens.T.colorNeutralForegroundDisabled },
                    },
                    ":enabled:not(:checked)": {
                        [`& ~ .${switchClassNames.indicator}`]: { color: tokens.T.colorNeutralStrokeAccessible, borderColor: tokens.T.colorNeutralStrokeAccessible },
                        [`& ~ .${switchClassNames.label}`]: { color: tokens.T.colorNeutralForeground1 },
                        ":hover": { [`& ~ .${switchClassNames.indicator}`]: { color: tokens.T.colorNeutralStrokeAccessibleHover, borderColor: tokens.T.colorNeutralStrokeAccessibleHover } },
                        ":hover:active": { [`& ~ .${switchClassNames.indicator}`]: { color: tokens.T.colorNeutralStrokeAccessiblePressed, borderColor: tokens.T.colorNeutralStrokeAccessiblePressed } },
                    },
                    ":enabled:checked": {
                        [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: tokens.T.colorCompoundBrandBackground, color: tokens.T.colorNeutralForegroundInverted, borderColor: tokens.T.colorTransparentStroke },
                        ":hover": { [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: tokens.T.colorCompoundBrandBackgroundHover, borderColor: tokens.T.colorTransparentStrokeInteractive } },
                        ":hover:active": { [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: tokens.T.colorCompoundBrandBackgroundPressed, borderColor: tokens.T.colorTransparentStrokeInteractive } },
                    },
                    ":disabled:not(:checked)": { [`& ~ .${switchClassNames.indicator}`]: { borderColor: tokens.T.colorNeutralStrokeDisabled } },
                    ":disabled:checked": { [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: tokens.T.colorNeutralBackgroundDisabled, borderColor: tokens.T.colorTransparentStrokeDisabled } },
                    "@media (forced-colors: active)": {
                        ":disabled": { [`& ~ .${switchClassNames.indicator}`]: { color: "GrayText", borderColor: "GrayText" }, [`& ~ .${switchClassNames.label}`]: { color: "GrayText" } },
                        ":enabled:checked": {
                            ":hover": { [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: "Highlight", color: "Canvas" } },
                            [`& ~ .${switchClassNames.indicator}`]: { backgroundColor: "Highlight", color: "Canvas" },
                        },
                    },
                }),
                useInputStyles = (0, makeStyles_esm.Z)({ before: { right: 0, top: 0 }, after: { left: 0, top: 0 }, above: { bottom: 0, height: `calc(20px + ${tokens.T.spacingVerticalS})`, width: "100%" } }),
                useLabelStyles = (0, makeStyles_esm.Z)({
                    base: {
                        cursor: "pointer",
                        marginBottom: `calc((20px - ${tokens.T.lineHeightBase300}) / 2)`,
                        marginTop: `calc((20px - ${tokens.T.lineHeightBase300}) / 2)`,
                        ...index_esm.q5.padding(tokens.T.spacingVerticalS, tokens.T.spacingHorizontalS),
                    },
                    above: { paddingTop: tokens.T.spacingVerticalXS, paddingBottom: tokens.T.spacingVerticalXS, width: "100%" },
                    after: { paddingLeft: tokens.T.spacingHorizontalXS },
                    before: { paddingRight: tokens.T.spacingHorizontalXS },
                }),
                useSwitchStyles_unstable = (state) => {
                    let rootBaseClassName = useRootBaseClassName(),
                        rootStyles = useRootStyles(),
                        indicatorBaseClassName = useIndicatorBaseClassName(),
                        indicatorStyles = useIndicatorStyles(),
                        inputBaseClassName = useInputBaseClassName(),
                        inputStyles = useInputStyles(),
                        labelStyles = useLabelStyles(),
                        { label, labelPosition } = state;
                    return (
                        (state.root.className = (0, mergeClasses_esm.z)(switchClassNames.root, rootBaseClassName, "above" === labelPosition && rootStyles.vertical, state.root.className)),
                        (state.indicator.className = (0, mergeClasses_esm.z)(switchClassNames.indicator, indicatorBaseClassName, label && "above" === labelPosition && indicatorStyles.labelAbove, state.indicator.className)),
                        (state.input.className = (0, mergeClasses_esm.z)(switchClassNames.input, inputBaseClassName, label && inputStyles[labelPosition], state.input.className)),
                        state.label && (state.label.className = (0, mergeClasses_esm.z)(switchClassNames.label, labelStyles.base, labelStyles[labelPosition], state.label.className)),
                        state
                    );
                };
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Switch = react.forwardRef((props, ref) => {
                let state = useSwitch_unstable(props, ref);
                return useSwitchStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useSwitchStyles_unstable")(state), renderSwitch_unstable(state);
            });
            Switch.displayName = "Switch";
            try {
                (Switch.displayName = "Switch"),
                    (Switch.__docgenInfo = {
                        description: "Switches enable users to trigger an option on or off through pressing the component.",
                        displayName: "Switch",
                        props: {
                            root: {
                                defaultValue: null,
                                description:
                                    "The root element of the Switch.\n\nThe root slot receives the `className` and `style` specified directly on the `<Switch>` tag.\nAll other native props will be applied to the primary slot: `input`.",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            input: {
                                defaultValue: null,
                                description:
                                    "Hidden input that handles the Switch's functionality.\n\nThis is the PRIMARY slot: all native properties specified directly on the `<Switch>` tag will be applied to this\nslot, except `className` and `style`, which remain on the root slot.",
                                name: "input",
                                required: !1,
                                type: { name: '({ as?: "input"; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }, "children"> & { ...; })' },
                            },
                            label: {
                                defaultValue: null,
                                description: "The Switch's label.",
                                name: "label",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<WithSlotRenderFunction<Omit<ComponentProps<LabelSlots, "root">, "required"> & { disabled?: boolean; required?: boolean | WithSlotShorthandValue<{ as?: "span"; } & Pick<...> & { ...; } & { ...; }> | null | undefined; size?: "small" | ... 2 more ... | undefined; weight?: ...',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"input"' }] } },
                            indicator: {
                                defaultValue: null,
                                description: "The track and the thumb sliding over it indicating the on and off status of the Switch.",
                                name: "indicator",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            checked: {
                                defaultValue: { value: "false" },
                                description:
                                    "Defines the controlled checked state of the Switch.\nIf passed, Switch ignores the `defaultChecked` property.\nThis should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the\ncorrect value based on handling `onChange` events and re-rendering.",
                                name: "checked",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            defaultChecked: {
                                defaultValue: { value: "false" },
                                description: "Defines whether the Switch is initially in a checked state or not when rendered.",
                                name: "defaultChecked",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            labelPosition: {
                                defaultValue: { value: "after" },
                                description: "The position of the label relative to the Switch.",
                                name: "labelPosition",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"before"' }, { value: '"after"' }, { value: '"above"' }] },
                            },
                            onChange: {
                                defaultValue: null,
                                description: "Callback to be called when the checked state value changes.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: ChangeEvent<HTMLInputElement>, data: SwitchOnChangeData) => void)" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-switch/src/components/Switch/Switch.tsx#Switch"] = {
                            docgenInfo: Switch.__docgenInfo,
                            name: "Switch",
                            path: "../../packages/react-components/react-switch/src/components/Switch/Switch.tsx#Switch",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/Table/Table.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { i: () => Table });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-table/src/components/Table/useTable.ts"),
                _renderTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-table/src/components/Table/renderTable.tsx"),
                _useTableStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-table/src/components/Table/useTableStyles.styles.ts"),
                _useTableContextValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/react-components/react-table/src/components/Table/useTableContextValues.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Table = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useTable__WEBPACK_IMPORTED_MODULE_1__.J)(props, ref);
                return (
                    (0, _useTableStyles_styles__WEBPACK_IMPORTED_MODULE_2__.Qv)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useTableStyles_unstable")(state),
                    (0, _renderTable__WEBPACK_IMPORTED_MODULE_4__.L)(state, (0, _useTableContextValues__WEBPACK_IMPORTED_MODULE_5__.Q)(state))
                );
            });
            Table.displayName = "Table";
            try {
                (Table.displayName = "Table"),
                    (Table.__docgenInfo = {
                        description: "Table component",
                        displayName: "Table",
                        props: {
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"table"' }] } },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "Affects the sizes of all table subcomponents",
                                name: "size",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"extra-small"' }] },
                            },
                            noNativeElements: {
                                defaultValue: { value: "false" },
                                description: "Render all table elements as divs instead of semantic table elements\nUsing divs no longer uses `display: table` layout but `display: flex`",
                                name: "noNativeElements",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            sortable: { defaultValue: { value: "false" }, description: "Whether the table is sortable", name: "sortable", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/Table/Table.tsx#Table"] = {
                            docgenInfo: Table.__docgenInfo,
                            name: "Table",
                            path: "../../packages/react-components/react-table/src/components/Table/Table.tsx#Table",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/TableBody/TableBody.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { R: () => TableBody });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                useTableBody = __webpack_require__("../../packages/react-components/react-table/src/components/TableBody/useTableBody.ts"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderTableBody_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(slots.root, slotProps.root);
            };
            try {
                (renderTableBody_unstable.displayName = "renderTableBody_unstable"),
                    (renderTableBody_unstable.__docgenInfo = {
                        description: "Render the final JSX of TableBody",
                        displayName: "renderTableBody_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | "tbody" | ComponentType<({ as: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !0,
                                type: { name: '({ as: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })' },
                            },
                            noNativeElements: {
                                defaultValue: { value: "false" },
                                description: "Render all table elements as divs instead of semantic table elements\nUsing divs no longer uses `display: table` layout but `display: flex`",
                                name: "noNativeElements",
                                required: !0,
                                type: { name: "boolean" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableBody/renderTableBody.tsx#renderTableBody_unstable"] = {
                            docgenInfo: renderTableBody_unstable.__docgenInfo,
                            name: "renderTableBody_unstable",
                            path: "../../packages/react-components/react-table/src/components/TableBody/renderTableBody.tsx#renderTableBody_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var useTableBodyStyles_styles = __webpack_require__("../../packages/react-components/react-table/src/components/TableBody/useTableBodyStyles.styles.ts"),
                CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let TableBody = react.forwardRef((props, ref) => {
                let state = (0, useTableBody.M)(props, ref);
                return (0, useTableBodyStyles_styles.eV)(state), (0, CustomStyleHooksContext.oj)("useTableBodyStyles_unstable")(state), renderTableBody_unstable(state);
            });
            TableBody.displayName = "TableBody";
            try {
                (TableBody.displayName = "TableBody"),
                    (TableBody.__docgenInfo = {
                        description: "TableBody component",
                        displayName: "TableBody",
                        props: { as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"tbody"' }] } } },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableBody/TableBody.tsx#TableBody"] = {
                            docgenInfo: TableBody.__docgenInfo,
                            name: "TableBody",
                            path: "../../packages/react-components/react-table/src/components/TableBody/TableBody.tsx#TableBody",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/TableCell/TableCell.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { p: () => TableCell });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useTableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableCell/useTableCell.ts"),
                _renderTableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableCell/renderTableCell.tsx"),
                _useTableCellStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableCell/useTableCellStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let TableCell = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useTableCell__WEBPACK_IMPORTED_MODULE_1__.N)(props, ref);
                return (
                    (0, _useTableCellStyles_styles__WEBPACK_IMPORTED_MODULE_2__.W4)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useTableCellStyles_unstable")(state),
                    (0, _renderTableCell__WEBPACK_IMPORTED_MODULE_4__.t)(state)
                );
            });
            TableCell.displayName = "TableCell";
            try {
                (TableCell.displayName = "TableCell"),
                    (TableCell.__docgenInfo = {
                        description: "TableCell component",
                        displayName: "TableCell",
                        props: { as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"td"' }] } } },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableCell/TableCell.tsx#TableCell"] = {
                            docgenInfo: TableCell.__docgenInfo,
                            name: "TableCell",
                            path: "../../packages/react-components/react-table/src/components/TableCell/TableCell.tsx#TableCell",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/TableHeader/TableHeader.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { x: () => TableHeader });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useTableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeader/useTableHeader.ts"),
                _renderTableHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeader/renderTableHeader.tsx"),
                _useTableHeaderStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeader/useTableHeaderStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let TableHeader = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useTableHeader__WEBPACK_IMPORTED_MODULE_1__.t)(props, ref);
                return (
                    (0, _useTableHeaderStyles_styles__WEBPACK_IMPORTED_MODULE_2__.AX)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useTableHeaderStyles_unstable")(state),
                    (0, _renderTableHeader__WEBPACK_IMPORTED_MODULE_4__.v)(state)
                );
            });
            TableHeader.displayName = "TableHeader";
            try {
                (TableHeader.displayName = "TableHeader"),
                    (TableHeader.__docgenInfo = {
                        description: "TableHeader component",
                        displayName: "TableHeader",
                        props: { as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"thead"' }] } } },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableHeader/TableHeader.tsx#TableHeader"] = {
                            docgenInfo: TableHeader.__docgenInfo,
                            name: "TableHeader",
                            path: "../../packages/react-components/react-table/src/components/TableHeader/TableHeader.tsx#TableHeader",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/TableHeaderCell/TableHeaderCell.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { x: () => TableHeaderCell });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useTableHeaderCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeaderCell/useTableHeaderCell.tsx"),
                _renderTableHeaderCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeaderCell/renderTableHeaderCell.tsx"),
                _useTableHeaderCellStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-table/src/components/TableHeaderCell/useTableHeaderCellStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let TableHeaderCell = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useTableHeaderCell__WEBPACK_IMPORTED_MODULE_1__.E)(props, ref);
                return (
                    (0, _useTableHeaderCellStyles_styles__WEBPACK_IMPORTED_MODULE_2__.zI)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useTableHeaderCellStyles_unstable")(state),
                    (0, _renderTableHeaderCell__WEBPACK_IMPORTED_MODULE_4__.u)(state)
                );
            });
            TableHeaderCell.displayName = "TableHeaderCell";
            try {
                (TableHeaderCell.displayName = "TableHeaderCell"),
                    (TableHeaderCell.__docgenInfo = {
                        description: "TableHeaderCell component",
                        displayName: "TableHeaderCell",
                        props: {
                            aside: {
                                defaultValue: null,
                                description: "aside content for anything that should be after main content of the table header cell",
                                name: "aside",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            button: {
                                defaultValue: null,
                                description: "Button handles correct narration and interactions for sorting;",
                                name: "button",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<ARIAButtonSlotProps<"a" | "div">>' },
                            },
                            sortIcon: {
                                defaultValue: null,
                                description: "",
                                name: "sortIcon",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }> | null' },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"th"' }] } },
                            sortDirection: { defaultValue: { value: "undefined" }, description: "", name: "sortDirection", required: !1, type: { name: "enum", value: [{ value: '"ascending"' }, { value: '"descending"' }] } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableHeaderCell/TableHeaderCell.tsx#TableHeaderCell"] = {
                            docgenInfo: TableHeaderCell.__docgenInfo,
                            name: "TableHeaderCell",
                            path: "../../packages/react-components/react-table/src/components/TableHeaderCell/TableHeaderCell.tsx#TableHeaderCell",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-table/src/components/TableRow/TableRow.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { S: () => TableRow });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                useTableRow = __webpack_require__("../../packages/react-components/react-table/src/components/TableRow/useTableRow.ts"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderTableRow_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(slots.root, slotProps.root);
            };
            try {
                (renderTableRow_unstable.displayName = "renderTableRow_unstable"),
                    (renderTableRow_unstable.__docgenInfo = {
                        description: "Render the final JSX of TableRow",
                        displayName: "renderTableRow_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "div" | "tr" | ComponentType<({ as: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !0,
                                type: { name: '({ as: "div"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ({ ...; } & ... 2 more ... & { ...; })' },
                            },
                            size: {
                                defaultValue: { value: "medium" },
                                description: "Affects the sizes of all table subcomponents",
                                name: "size",
                                required: !0,
                                type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"extra-small"' }] },
                            },
                            noNativeElements: {
                                defaultValue: { value: "false" },
                                description: "Render all table elements as divs instead of semantic table elements\nUsing divs no longer uses `display: table` layout but `display: flex`",
                                name: "noNativeElements",
                                required: !0,
                                type: { name: "boolean" },
                            },
                            appearance: {
                                defaultValue: { value: "none" },
                                description: "A table row can have different variants. These appearances are\nintended to be used with selection.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"neutral"' }, { value: '"brand"' }] },
                            },
                            isHeaderRow: { defaultValue: null, description: "", name: "isHeaderRow", required: !0, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableRow/renderTableRow.tsx#renderTableRow_unstable"] = {
                            docgenInfo: renderTableRow_unstable.__docgenInfo,
                            name: "renderTableRow_unstable",
                            path: "../../packages/react-components/react-table/src/components/TableRow/renderTableRow.tsx#renderTableRow_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var useTableRowStyles_styles = __webpack_require__("../../packages/react-components/react-table/src/components/TableRow/useTableRowStyles.styles.ts"),
                CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let TableRow = react.forwardRef((props, ref) => {
                let state = (0, useTableRow.d)(props, ref);
                return (0, useTableRowStyles_styles.eB)(state), (0, CustomStyleHooksContext.oj)("useTableRowStyles_unstable")(state), renderTableRow_unstable(state);
            });
            TableRow.displayName = "TableRow";
            try {
                (TableRow.displayName = "TableRow"),
                    (TableRow.__docgenInfo = {
                        description: "TableRow component",
                        displayName: "TableRow",
                        props: {
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"div"' }, { value: '"tr"' }] } },
                            appearance: {
                                defaultValue: { value: "none" },
                                description: "A table row can have different variants. These appearances are\nintended to be used with selection.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"neutral"' }, { value: '"brand"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-table/src/components/TableRow/TableRow.tsx#TableRow"] = {
                            docgenInfo: TableRow.__docgenInfo,
                            name: "TableRow",
                            path: "../../packages/react-components/react-table/src/components/TableRow/TableRow.tsx#TableRow",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/Text/Text.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { x: () => Text });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _useText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/useText.ts"),
                _renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/renderText.tsx"),
                _useTextStyles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/useTextStyles.styles.ts"),
                _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Text = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                let state = (0, _useText__WEBPACK_IMPORTED_MODULE_1__.$)(props, ref);
                return (
                    (0, _useTextStyles_styles__WEBPACK_IMPORTED_MODULE_2__.E)(state),
                    (0, _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.oj)("useTextStyles_unstable")(state),
                    (0, _renderText__WEBPACK_IMPORTED_MODULE_4__.A)(state)
                );
            });
            Text.displayName = "Text";
            try {
                (Text.displayName = "Text"),
                    (Text.__docgenInfo = {
                        description: "Typography and styling abstraction component used to ensure consistency of text.",
                        displayName: "Text",
                        props: {
                            as: {
                                defaultValue: null,
                                description: "",
                                name: "as",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"h1"' }, { value: '"h2"' }, { value: '"h3"' }, { value: '"h4"' }, { value: '"h5"' }, { value: '"h6"' }, { value: '"p"' }, { value: '"pre"' }, { value: '"span"' }] },
                            },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            font: {
                                defaultValue: { value: "base" },
                                description: "Applies the font family to the content.",
                                name: "font",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"base"' }, { value: '"numeric"' }, { value: '"monospace"' }] },
                            },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            size: {
                                defaultValue: { value: "300" },
                                description: "Applies font size and line height based on the theme typography tokens.",
                                name: "size",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: "100" }, { value: "200" }, { value: "300" }, { value: "400" }, { value: "500" }, { value: "600" }, { value: "700" }, { value: "800" }, { value: "900" }, { value: "1000" }],
                                },
                            },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            weight: {
                                defaultValue: { value: "regular" },
                                description: "Applies font weight to the content.",
                                name: "weight",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"medium"' }, { value: '"regular"' }, { value: '"semibold"' }, { value: '"bold"' }] },
                            },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/Text/Text.tsx#Text"] = {
                            docgenInfo: Text.__docgenInfo,
                            name: "Text",
                            path: "../../packages/react-components/react-text/src/components/Text/Text.tsx#Text",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/Text/renderText.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { A: () => renderText_unstable });
            var _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderText_unstable = (state) => {
                let { slots, slotProps } = (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.D)(state);
                return (0, _fluentui_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.a)(slots.root, slotProps.root);
            };
            try {
                (renderText_unstable.displayName = "renderText_unstable"),
                    (renderText_unstable.__docgenInfo = {
                        description: "Render the final JSX of Text",
                        displayName: "renderText_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "pre" | "span" | ComponentType<({ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ... 7 more ... | ({ ...; } & ... 2 more ... & { ...; })>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description: "",
                                name: "root",
                                required: !0,
                                type: {
                                    name:
                                        '({ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }) | ... 7 more ... | ({ ...; } & ... 2 more ... & { ...; })',
                                },
                            },
                            size: {
                                defaultValue: { value: "300" },
                                description: "Applies font size and line height based on the theme typography tokens.",
                                name: "size",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: "100" }, { value: "200" }, { value: "300" }, { value: "400" }, { value: "500" }, { value: "600" }, { value: "700" }, { value: "800" }, { value: "900" }, { value: "1000" }],
                                },
                            },
                            weight: {
                                defaultValue: { value: "regular" },
                                description: "Applies font weight to the content.",
                                name: "weight",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"medium"' }, { value: '"regular"' }, { value: '"semibold"' }, { value: '"bold"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                            font: {
                                defaultValue: { value: "base" },
                                description: "Applies the font family to the content.",
                                name: "font",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"base"' }, { value: '"numeric"' }, { value: '"monospace"' }] },
                            },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/Text/renderText.tsx#renderText_unstable"] = {
                            docgenInfo: renderText_unstable.__docgenInfo,
                            name: "renderText_unstable",
                            path: "../../packages/react-components/react-text/src/components/Text/renderText.tsx#renderText_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/Text/useText.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { $: () => useText_unstable });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts");
            let useText_unstable = (props, ref) => {
                var _props_as;
                let { wrap, truncate, block, italic, underline, strikethrough, size, font, weight, align } = props,
                    as = null != (_props_as = props.as) ? _props_as : "span",
                    state = {
                        align: null != align ? align : "start",
                        block: null != block && block,
                        font: null != font ? font : "base",
                        italic: null != italic && italic,
                        size: null != size ? size : 300,
                        strikethrough: null != strikethrough && strikethrough,
                        truncate: null != truncate && truncate,
                        underline: null != underline && underline,
                        weight: null != weight ? weight : "regular",
                        wrap: null == wrap || wrap,
                        components: { root: "span" },
                        root: (0, _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.n)(as, { ref, ...props, as }),
                    };
                return state;
            };
        },
        "../../packages/react-components/react-text/src/components/Text/useTextStyles.styles.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { E: () => useTextStyles_unstable });
            var _griffel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/tokens/src/tokens.ts");
            let textClassNames = { root: "fui-Text" },
                useStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_0__.Z)({
                    root: {
                        fontFamily: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontFamilyBase,
                        fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase300,
                        lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase300,
                        fontWeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontWeightRegular,
                        textAlign: "start",
                        display: "inline",
                        whiteSpace: "normal",
                        ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.overflow("visible"),
                        textOverflow: "clip",
                    },
                    nowrap: { whiteSpace: "nowrap", ..._griffel_react__WEBPACK_IMPORTED_MODULE_2__.q5.overflow("hidden") },
                    truncate: { textOverflow: "ellipsis" },
                    block: { display: "block" },
                    italic: { fontStyle: "italic" },
                    underline: { textDecorationLine: "underline" },
                    strikethrough: { textDecorationLine: "line-through" },
                    strikethroughUnderline: { textDecorationLine: "line-through underline" },
                    base100: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase100, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase100 },
                    base200: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase200, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase200 },
                    base400: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase400, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase400 },
                    base500: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase500, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase500 },
                    base600: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeBase600, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightBase600 },
                    hero700: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeHero700, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightHero700 },
                    hero800: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeHero800, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightHero800 },
                    hero900: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeHero900, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightHero900 },
                    hero1000: { fontSize: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontSizeHero1000, lineHeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.lineHeightHero1000 },
                    monospace: { fontFamily: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontFamilyMonospace },
                    numeric: { fontFamily: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontFamilyNumeric },
                    weightMedium: { fontWeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontWeightMedium },
                    weightSemibold: { fontWeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontWeightSemibold },
                    weightBold: { fontWeight: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_1__.T.fontWeightBold },
                    alignCenter: { textAlign: "center" },
                    alignEnd: { textAlign: "end" },
                    alignJustify: { textAlign: "justify" },
                }),
                useTextStyles_unstable = (state) => {
                    let styles = useStyles();
                    return (
                        (state.root.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.z)(
                            textClassNames.root,
                            styles.root,
                            !1 === state.wrap && styles.nowrap,
                            state.truncate && styles.truncate,
                            state.block && styles.block,
                            state.italic && styles.italic,
                            state.underline && styles.underline,
                            state.strikethrough && styles.strikethrough,
                            state.underline && state.strikethrough && styles.strikethroughUnderline,
                            100 === state.size && styles.base100,
                            200 === state.size && styles.base200,
                            400 === state.size && styles.base400,
                            500 === state.size && styles.base500,
                            600 === state.size && styles.base600,
                            700 === state.size && styles.hero700,
                            800 === state.size && styles.hero800,
                            900 === state.size && styles.hero900,
                            1e3 === state.size && styles.hero1000,
                            "monospace" === state.font && styles.monospace,
                            "numeric" === state.font && styles.numeric,
                            "medium" === state.weight && styles.weightMedium,
                            "semibold" === state.weight && styles.weightSemibold,
                            "bold" === state.weight && styles.weightBold,
                            "center" === state.align && styles.alignCenter,
                            "end" === state.align && styles.alignEnd,
                            "justify" === state.align && styles.alignJustify,
                            state.root.className
                        )),
                        state
                    );
                };
        },
        "../../packages/react-components/react-text/src/components/presets/Body1/Body1.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { m: () => Body1 });
            var createPreset = __webpack_require__("../../packages/react-components/react-text/src/components/presets/createPreset.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let body1ClassNames = { root: "fui-Body1" },
                useBody1Styles = (0, makeStyles_esm.Z)({ root: typographyStyles.w.body1 }),
                Body1 = (0, createPreset.l)({ useStyles: useBody1Styles, className: body1ClassNames.root, displayName: "Body1" });
            try {
                (Body1.displayName = "Body1"),
                    (Body1.__docgenInfo = {
                        description: "Text preset component for the Body1 typography variant",
                        displayName: "Body1",
                        props: {
                            as: {
                                defaultValue: null,
                                description: "",
                                name: "as",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"h1"' }, { value: '"h2"' }, { value: '"h3"' }, { value: '"h4"' }, { value: '"h5"' }, { value: '"h6"' }, { value: '"p"' }, { value: '"pre"' }, { value: '"span"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/presets/Body1/Body1.tsx#Body1"] = {
                            docgenInfo: Body1.__docgenInfo,
                            name: "Body1",
                            path: "../../packages/react-components/react-text/src/components/presets/Body1/Body1.tsx#Body1",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/presets/Caption1/Caption1.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { d: () => Caption1 });
            var createPreset = __webpack_require__("../../packages/react-components/react-text/src/components/presets/createPreset.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let caption1ClassNames = { root: "fui-Caption1" },
                useCaption1Styles = (0, makeStyles_esm.Z)({ root: typographyStyles.w.caption1 }),
                Caption1 = (0, createPreset.l)({ useStyles: useCaption1Styles, className: caption1ClassNames.root, displayName: "Caption1" });
            try {
                (Caption1.displayName = "Caption1"),
                    (Caption1.__docgenInfo = {
                        description: "Text preset component for the Caption1 typography variant",
                        displayName: "Caption1",
                        props: {
                            as: {
                                defaultValue: null,
                                description: "",
                                name: "as",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"h1"' }, { value: '"h2"' }, { value: '"h3"' }, { value: '"h4"' }, { value: '"h5"' }, { value: '"h6"' }, { value: '"p"' }, { value: '"pre"' }, { value: '"span"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/presets/Caption1/Caption1.tsx#Caption1"] = {
                            docgenInfo: Caption1.__docgenInfo,
                            name: "Caption1",
                            path: "../../packages/react-components/react-text/src/components/presets/Caption1/Caption1.tsx#Caption1",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/presets/Caption1Stronger/Caption1Stronger.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { x: () => Caption1Stronger });
            var createPreset = __webpack_require__("../../packages/react-components/react-text/src/components/presets/createPreset.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let caption1StrongerClassNames = { root: "fui-Caption1Stronger" },
                useCaption1StrongerStyles = (0, makeStyles_esm.Z)({ root: typographyStyles.w.caption1Stronger }),
                Caption1Stronger = (0, createPreset.l)({ useStyles: useCaption1StrongerStyles, className: caption1StrongerClassNames.root, displayName: "Caption1Stronger" });
            try {
                (Caption1Stronger.displayName = "Caption1Stronger"),
                    (Caption1Stronger.__docgenInfo = {
                        description: "Text preset component for the Caption1Stronger typography variant",
                        displayName: "Caption1Stronger",
                        props: {
                            as: {
                                defaultValue: null,
                                description: "",
                                name: "as",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"h1"' }, { value: '"h2"' }, { value: '"h3"' }, { value: '"h4"' }, { value: '"h5"' }, { value: '"h6"' }, { value: '"p"' }, { value: '"pre"' }, { value: '"span"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/presets/Caption1Stronger/Caption1Stronger.tsx#Caption1Stronger"] = {
                            docgenInfo: Caption1Stronger.__docgenInfo,
                            name: "Caption1Stronger",
                            path: "../../packages/react-components/react-text/src/components/presets/Caption1Stronger/Caption1Stronger.tsx#Caption1Stronger",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/presets/Subtitle2/Subtitle2.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { T: () => Subtitle2 });
            var createPreset = __webpack_require__("../../packages/react-components/react-text/src/components/presets/createPreset.ts"),
                makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let subtitle2ClassNames = { root: "fui-Subtitle2" },
                useSubtitle2Styles = (0, makeStyles_esm.Z)({ root: typographyStyles.w.subtitle2 }),
                Subtitle2 = (0, createPreset.l)({ useStyles: useSubtitle2Styles, className: subtitle2ClassNames.root, displayName: "Subtitle2" });
            try {
                (Subtitle2.displayName = "Subtitle2"),
                    (Subtitle2.__docgenInfo = {
                        description: "Text preset component for the Subtitle2 typography variant",
                        displayName: "Subtitle2",
                        props: {
                            as: {
                                defaultValue: null,
                                description: "",
                                name: "as",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"h1"' }, { value: '"h2"' }, { value: '"h3"' }, { value: '"h4"' }, { value: '"h5"' }, { value: '"h6"' }, { value: '"p"' }, { value: '"pre"' }, { value: '"span"' }] },
                            },
                            block: { defaultValue: { value: "false" }, description: "Applies a block display for the content.", name: "block", required: !1, type: { name: "boolean" } },
                            underline: { defaultValue: { value: "false" }, description: "Applies the underline text decoration to the content.", name: "underline", required: !1, type: { name: "boolean" } },
                            align: {
                                defaultValue: { value: "start" },
                                description: "Aligns text based on the parent container.",
                                name: "align",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"center"' }, { value: '"start"' }, { value: '"justify"' }, { value: '"end"' }] },
                            },
                            truncate: { defaultValue: { value: "false" }, description: "Truncate overflowing text for block displays.", name: "truncate", required: !1, type: { name: "boolean" } },
                            wrap: { defaultValue: { value: "true" }, description: "Wraps the text content on white spaces.", name: "wrap", required: !1, type: { name: "boolean" } },
                            italic: { defaultValue: { value: "false" }, description: "Applies the italic font style to the content.", name: "italic", required: !1, type: { name: "boolean" } },
                            strikethrough: { defaultValue: { value: "false" }, description: "Applies the strikethrough text decoration to the content.", name: "strikethrough", required: !1, type: { name: "boolean" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-text/src/components/presets/Subtitle2/Subtitle2.tsx#Subtitle2"] = {
                            docgenInfo: Subtitle2.__docgenInfo,
                            name: "Subtitle2",
                            path: "../../packages/react-components/react-text/src/components/presets/Subtitle2/Subtitle2.tsx#Subtitle2",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-text/src/components/presets/createPreset.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { l: () => createPreset });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js"),
                _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/useText.ts"),
                _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/useTextStyles.styles.ts"),
                _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/react-components/react-text/src/components/Text/renderText.tsx");
            function createPreset(options) {
                let { useStyles, className, displayName } = options,
                    Wrapper = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
                        let styles = useStyles(),
                            state = (0, _Text__WEBPACK_IMPORTED_MODULE_1__.$)(props, ref);
                        return (
                            (0, _Text__WEBPACK_IMPORTED_MODULE_2__.E)(state),
                            (state.root.className = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.z)(className, state.root.className, styles.root, props.className)),
                            (0, _Text__WEBPACK_IMPORTED_MODULE_4__.A)(state)
                        );
                    });
                return (Wrapper.displayName = displayName), Wrapper;
            }
        },
        "../../packages/react-components/react-textarea/src/components/Textarea/Textarea.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { g: () => Textarea });
            var react = __webpack_require__("../../node_modules/react/index.js"),
                createElement = __webpack_require__("../../packages/react-components/react-jsx-runtime/src/createElement.ts"),
                getSlotsNext = __webpack_require__("../../packages/react-components/react-utilities/src/compose/getSlotsNext.ts");
            let renderTextarea_unstable = (state) => {
                let { slots, slotProps } = (0, getSlotsNext.D)(state);
                return (0, createElement.a)(slots.root, slotProps.root, (0, createElement.a)(slots.textarea, slotProps.textarea));
            };
            try {
                (renderTextarea_unstable.displayName = "renderTextarea_unstable"),
                    (renderTextarea_unstable.__docgenInfo = {
                        description: "Render the final JSX of Textarea",
                        displayName: "renderTextarea_unstable",
                        props: {
                            components: {
                                defaultValue: null,
                                description: "",
                                name: "components",
                                required: !0,
                                type: {
                                    name:
                                        '{ root: "span" | ComponentType<{ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>; textarea: "textarea" | ComponentType<...>; }',
                                },
                            },
                            root: {
                                defaultValue: null,
                                description:
                                    "Wrapper element used for displaying the borders for Textarea. This wrapper is needed due to the focus\nindicator border animation. For more information, see Spec.md\n\nThe root only receives `className` and `style`. All other props are applied to the `textarea` slot.",
                                name: "root",
                                required: !0,
                                type: { name: '{ as?: "span" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            textarea: {
                                defaultValue: null,
                                description: "The `<textarea>` element. This is the primary slot, all native props and ref are applied to this slot.",
                                name: "textarea",
                                required: !0,
                                type: { name: '{ as?: "textarea" | undefined; } & Pick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "key" | keyof TextareaHTMLAttributes<...>> & { ...; } & { ...; }' },
                            },
                            appearance: {
                                defaultValue: { value: "outline\n\nNote: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future." },
                                description: "Styling the Textarea should use.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"outline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }, { value: '"filled-darker-shadow"' }, { value: '"filled-lighter-shadow"' }] },
                            },
                            size: { defaultValue: { value: "medium" }, description: "Size of the Textarea.", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] } },
                            resize: {
                                defaultValue: { value: "none" },
                                description: "Which direction the Textarea is allowed to be resized.",
                                name: "resize",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"both"' }, { value: '"horizontal"' }, { value: '"vertical"' }] },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-textarea/src/components/Textarea/renderTextarea.tsx#renderTextarea_unstable"] = {
                            docgenInfo: renderTextarea_unstable.__docgenInfo,
                            name: "renderTextarea_unstable",
                            path: "../../packages/react-components/react-textarea/src/components/Textarea/renderTextarea.tsx#renderTextarea_unstable",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var useFieldControlProps = __webpack_require__("../../packages/react-components/react-field/src/contexts/useFieldControlProps.ts"),
                useControllableState = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useControllableState.ts"),
                getNativeElementProps = __webpack_require__("../../packages/react-components/react-utilities/src/utils/getNativeElementProps.ts"),
                resolveShorthand = __webpack_require__("../../packages/react-components/react-utilities/src/compose/resolveShorthand.ts"),
                useEventCallback = __webpack_require__("../../packages/react-components/react-utilities/src/hooks/useEventCallback.ts"),
                OverridesContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/OverridesContext/OverridesContext.ts");
            let useTextarea_unstable = (props, ref) => {
                var _overrides_inputDefaultAppearance;
                props = (0, useFieldControlProps.k)(props, { supportsLabelFor: !0, supportsRequired: !0, supportsSize: !0 });
                let overrides = (0, OverridesContext.QG)(),
                    { size = "medium", appearance = null != (_overrides_inputDefaultAppearance = overrides.inputDefaultAppearance) ? _overrides_inputDefaultAppearance : "outline", resize = "none", onChange } = props,
                    [value, setValue] = (0, useControllableState.T)({ state: props.value, defaultState: props.defaultValue, initialState: void 0 }),
                    nativeProps = (0, getNativeElementProps.$)({ props, primarySlotTagName: "textarea", excludedPropNames: ["onChange", "value", "defaultValue"] }),
                    state = {
                        size,
                        appearance,
                        resize,
                        components: { root: "span", textarea: "textarea" },
                        textarea: (0, resolveShorthand.O)(props.textarea, { required: !0, defaultProps: { ref, ...nativeProps.primary } }),
                        root: (0, resolveShorthand.O)(props.root, { required: !0, defaultProps: nativeProps.root }),
                    };
                return (
                    (state.textarea.value = value),
                    (state.textarea.onChange = (0, useEventCallback.$)((ev) => {
                        let newValue = ev.target.value;
                        null == onChange || onChange(ev, { value: newValue }), setValue(newValue);
                    })),
                    state
                );
            };
            var makeStyles_esm = __webpack_require__("../../node_modules/@griffel/react/makeStyles.esm.js"),
                index_esm = __webpack_require__("../../node_modules/@griffel/core/index.esm.js"),
                mergeClasses_esm = __webpack_require__("../../node_modules/@griffel/core/mergeClasses.esm.js"),
                tokens = __webpack_require__("../../packages/tokens/src/tokens.ts"),
                typographyStyles = __webpack_require__("../../packages/tokens/src/global/typographyStyles.ts");
            let textareaClassNames = { root: "fui-Textarea", textarea: "fui-Textarea__textarea" },
                textareaHeight = { small: "24px", medium: "32px", large: "40px" },
                useRootStyles = (0, makeStyles_esm.Z)({
                    base: {
                        display: "inline-flex",
                        boxSizing: "border-box",
                        position: "relative",
                        ...index_esm.q5.padding("0", "0", tokens.T.strokeWidthThick, "0"),
                        ...index_esm.q5.margin("0"),
                        ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
                    },
                    disabled: {
                        backgroundColor: tokens.T.colorTransparentBackground,
                        ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStrokeDisabled),
                        "@media (forced-colors: active)": { ...index_esm.q5.borderColor("GrayText") },
                    },
                    interactive: {
                        "::after": {
                            boxSizing: "border-box",
                            content: '""',
                            position: "absolute",
                            left: "-1px",
                            bottom: "-1px",
                            right: "-1px",
                            height: `max(${tokens.T.strokeWidthThick}, ${tokens.T.borderRadiusMedium})`,
                            borderBottomLeftRadius: tokens.T.borderRadiusMedium,
                            borderBottomRightRadius: tokens.T.borderRadiusMedium,
                            ...index_esm.q5.borderBottom(tokens.T.strokeWidthThick, "solid", tokens.T.colorCompoundBrandStroke),
                            clipPath: `inset(calc(100% - ${tokens.T.strokeWidthThick}) 0 0 0)`,
                            transform: "scaleX(0)",
                            transitionProperty: "transform",
                            transitionDuration: tokens.T.durationUltraFast,
                            transitionDelay: tokens.T.curveAccelerateMid,
                            "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                        },
                        ":focus-within::after": {
                            transform: "scaleX(1)",
                            transitionProperty: "transform",
                            transitionDuration: tokens.T.durationNormal,
                            transitionDelay: tokens.T.curveDecelerateMid,
                            "@media screen and (prefers-reduced-motion: reduce)": { transitionDuration: "0.01ms", transitionDelay: "0.01ms" },
                        },
                        ":focus-within:active::after": { borderBottomColor: tokens.T.colorCompoundBrandStrokePressed },
                        ":focus-within": { outlineWidth: tokens.T.strokeWidthThick, outlineStyle: "solid", outlineColor: "transparent" },
                    },
                    filled: { ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorTransparentStroke), ":hover,:focus-within": { ...index_esm.q5.borderColor(tokens.T.colorTransparentStrokeInteractive) } },
                    "filled-darker": { backgroundColor: tokens.T.colorNeutralBackground3 },
                    "filled-lighter": { backgroundColor: tokens.T.colorNeutralBackground1 },
                    "filled-darker-shadow": { backgroundColor: tokens.T.colorNeutralBackground3, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorTransparentStrokeInteractive), boxShadow: tokens.T.shadow2 },
                    "filled-lighter-shadow": { backgroundColor: tokens.T.colorNeutralBackground1, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorTransparentStrokeInteractive), boxShadow: tokens.T.shadow2 },
                    outline: { backgroundColor: tokens.T.colorNeutralBackground1, ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStroke1), borderBottomColor: tokens.T.colorNeutralStrokeAccessible },
                    outlineInteractive: {
                        ":hover": { ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStroke1Hover), borderBottomColor: tokens.T.colorNeutralStrokeAccessibleHover },
                        ":active": { ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStroke1Pressed), borderBottomColor: tokens.T.colorNeutralStrokeAccessiblePressed },
                        ":focus-within": { ...index_esm.q5.border(tokens.T.strokeWidthThin, "solid", tokens.T.colorNeutralStroke1), borderBottomColor: tokens.T.colorCompoundBrandStroke },
                    },
                    invalid: { ":not(:focus-within),:hover:not(:focus-within)": { ...index_esm.q5.borderColor(tokens.T.colorPaletteRedBorder2) } },
                }),
                useTextareaStyles = (0, makeStyles_esm.Z)({
                    base: {
                        ...index_esm.q5.borderStyle("none"),
                        ...index_esm.q5.margin("0"),
                        backgroundColor: "transparent",
                        boxSizing: "border-box",
                        color: tokens.T.colorNeutralForeground1,
                        flexGrow: 1,
                        fontFamily: tokens.T.fontFamilyBase,
                        height: "100%",
                        maxHeight: "100%",
                        "::placeholder": { color: tokens.T.colorNeutralForeground4, opacity: 1 },
                        "::selection": { color: tokens.T.colorNeutralForegroundInverted, backgroundColor: tokens.T.colorNeutralBackgroundInverted },
                        outlineStyle: "none",
                    },
                    disabled: { color: tokens.T.colorNeutralForegroundDisabled, cursor: "not-allowed", "::placeholder": { color: tokens.T.colorNeutralForegroundDisabled } },
                    small: {
                        height: textareaHeight.small,
                        minHeight: "40px",
                        ...index_esm.q5.padding(tokens.T.spacingVerticalXS, `calc(${tokens.T.spacingHorizontalSNudge} + ${tokens.T.spacingHorizontalXXS})`),
                        ...typographyStyles.w.caption1,
                    },
                    medium: {
                        height: textareaHeight.medium,
                        minHeight: "52px",
                        ...index_esm.q5.padding(tokens.T.spacingVerticalSNudge, `calc(${tokens.T.spacingHorizontalMNudge} + ${tokens.T.spacingHorizontalXXS})`),
                        ...typographyStyles.w.body1,
                    },
                    large: { height: textareaHeight.large, minHeight: "64px", ...index_esm.q5.padding(tokens.T.spacingVerticalS, `calc(${tokens.T.spacingHorizontalM} + ${tokens.T.spacingHorizontalXXS})`), ...typographyStyles.w.body2 },
                }),
                useTextareaResizeStyles = (0, makeStyles_esm.Z)({ none: { resize: "none" }, both: { resize: "both" }, horizontal: { resize: "horizontal" }, vertical: { resize: "vertical" } }),
                useTextareaStyles_unstable = (state) => {
                    let { size, appearance, resize } = state,
                        disabled = state.textarea.disabled,
                        invalid = "true" == `${state.textarea["aria-invalid"]}`,
                        filled = appearance.startsWith("filled"),
                        rootStyles = useRootStyles();
                    state.root.className = (0, mergeClasses_esm.z)(
                        textareaClassNames.root,
                        rootStyles.base,
                        disabled && rootStyles.disabled,
                        !disabled && filled && rootStyles.filled,
                        !disabled && rootStyles[appearance],
                        !disabled && rootStyles.interactive,
                        !disabled && "outline" === appearance && rootStyles.outlineInteractive,
                        !disabled && invalid && rootStyles.invalid,
                        state.root.className
                    );
                    let textareaStyles = useTextareaStyles(),
                        textareaResizeStyles = useTextareaResizeStyles();
                    return (
                        (state.textarea.className = (0, mergeClasses_esm.z)(
                            textareaClassNames.textarea,
                            textareaStyles.base,
                            textareaStyles[size],
                            textareaResizeStyles[resize],
                            disabled && textareaStyles.disabled,
                            state.textarea.className
                        )),
                        state
                    );
                };
            var CustomStyleHooksContext = __webpack_require__("../../packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts");
            let Textarea = react.forwardRef((props, ref) => {
                let state = useTextarea_unstable(props, ref);
                return useTextareaStyles_unstable(state), (0, CustomStyleHooksContext.oj)("useTextareaStyles_unstable")(state), renderTextarea_unstable(state);
            });
            Textarea.displayName = "Textarea";
            try {
                (Textarea.displayName = "Textarea"),
                    (Textarea.__docgenInfo = {
                        description: "The Textarea component allows the user to enter and edit text in multiple lines.",
                        displayName: "Textarea",
                        props: {
                            root: {
                                defaultValue: null,
                                description:
                                    "Wrapper element used for displaying the borders for Textarea. This wrapper is needed due to the focus\nindicator border animation. For more information, see Spec.md\n\nThe root only receives `className` and `style`. All other props are applied to the `textarea` slot.",
                                name: "root",
                                required: !1,
                                type: { name: 'WithSlotShorthandValue<{ as?: "span"; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; }>' },
                            },
                            textarea: {
                                defaultValue: null,
                                description: "The `<textarea>` element. This is the primary slot, all native props and ref are applied to this slot.",
                                name: "textarea",
                                required: !1,
                                type: {
                                    name:
                                        'WithSlotShorthandValue<{ as?: "textarea"; } & Pick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "key" | keyof TextareaHTMLAttributes<...>> & { ...; } & { ...; }>',
                                },
                            },
                            as: { defaultValue: null, description: "", name: "as", required: !1, type: { name: "enum", value: [{ value: '"textarea"' }] } },
                            appearance: {
                                defaultValue: { value: "outline\n\nNote: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future." },
                                description: "Styling the Textarea should use.",
                                name: "appearance",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"outline"' }, { value: '"filled-darker"' }, { value: '"filled-lighter"' }, { value: '"filled-darker-shadow"' }, { value: '"filled-lighter-shadow"' }] },
                            },
                            defaultValue: { defaultValue: null, description: "The default value of the Textarea.", name: "defaultValue", required: !1, type: { name: "string" } },
                            onChange: {
                                defaultValue: null,
                                description: "Callback for when the user changes the value.",
                                name: "onChange",
                                required: !1,
                                type: { name: "((ev: ChangeEvent<HTMLTextAreaElement>, data: TextareaOnChangeData) => void)" },
                            },
                            resize: {
                                defaultValue: { value: "none" },
                                description: "Which direction the Textarea is allowed to be resized.",
                                name: "resize",
                                required: !1,
                                type: { name: "enum", value: [{ value: '"none"' }, { value: '"both"' }, { value: '"horizontal"' }, { value: '"vertical"' }] },
                            },
                            size: { defaultValue: { value: "medium" }, description: "Size of the Textarea.", name: "size", required: !1, type: { name: "enum", value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] } },
                            value: { defaultValue: null, description: "The value of the Textarea.", name: "value", required: !1, type: { name: "string" } },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["../../packages/react-components/react-textarea/src/components/Textarea/Textarea.tsx#Textarea"] = {
                            docgenInfo: Textarea.__docgenInfo,
                            name: "Textarea",
                            path: "../../packages/react-components/react-textarea/src/components/Textarea/Textarea.tsx#Textarea",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "../../packages/react-components/react-utilities/src/hooks/useTimeout.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { K: () => useTimeout });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
            function useTimeout() {
                let [timeout] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => ({
                    id: void 0,
                    set: (fn, delay) => {
                        timeout.clear(), (timeout.id = setTimeout(fn, delay));
                    },
                    clear: () => {
                        void 0 !== timeout.id && (clearTimeout(timeout.id), (timeout.id = void 0));
                    },
                }));
                return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => timeout.clear, [timeout]), [timeout.set, timeout.clear];
            }
        },
    },
]);
