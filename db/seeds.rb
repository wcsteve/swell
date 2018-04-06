# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(username: "lanceArmstrong", password: "password", email: "lance@livestrong.com");
Route.create!(title: "Oakland Hills",
description: "Calf Burner",
duration: 3500,
distance: 3.992,
elevation_gain: 188.371215820312,
polyline: 'a|~eFlgaiVIFMHGUCICMIq@Ou@Uq@r@o@V]B[AIIQY[O[CWB_@\w@nDoI`@m@\MT?t@ZX?TONYHo@Lg@Rc@J_@@a@H_@RUp@[p@m@d@u@XeARy@JYJ_@B]AEh@@~@?jABE[Yk@SYWm@Ms@EgABgAFa@ZiALY\c@f@o@d@s@Vk@~@_DpAmEnBmGNYjA{AD{BCg@M_ACMCG?_@@SBKTa@jAs@j@YIc@Oq@EGIO[Wa@a@m@oAUkALADyB@{@D?P?b@Cb@DjAZf@HT?LAHELSd@qA^kABSAIGK[e@G_@Ae@AWGWe@_AEM@KF]dBcFLMu@mACUDa@Ni@f@LVAXSPa@MuAC}ACc@Se@e@g@qCoAKQ@SWMaEeCm@Ya@MkB_@WKS[M_@Qu@M}@EmA?wAFsBCaAMm@e@wBi@oBQ{@Ms@KUKKYUo@kAMc@h@M',
user_id: 1)

Route.create!(
title: "Mountain Loop Road",
description: "A beautiful, yet arduous trip",
duration: 13730,
distance: 15.786,
elevation_gain: 572.674044013023,
polyline:'wktfFr`_kVeCbAo@Xs@Fi@M}@_@cABe@RUVGZa@mE|FqIhBoC|A}Bj@k@hAkBf@y@t@aAx@ZxAh@bC`A~H|CrBv@`ARtGBhHOb@MXUv@cA|DyIhCsFxA_Df@s@z@qCvAgClA{AhBgA~B{DfA{B`BgEVg@nAkA~CoBtAq@b@k@Zq@b@_B\y@~IcLfBaBv@]dASf@BzB^rNjC~H`Ar@FRIb@IbBQzAg@~CoAnB}@HOdA}CtAcDzE_FdLwLd@OpA`DXf@FCFCr@|@\l@HRp@`@|BnBHOTGzAl@\EPD^h@TPZGRWCu@?qA?pABt@SV[FUQ_@i@QE]Dk@So@YUFIVnAfBhAxATdAKRu@Pa@p@QH_@O[FSf@Dd@f@z@n@tARhAHn@N^NH`@LFBxA|AGB_@Fe@ZWVYn@@Jb@GpAJZL~AB`@SfA[PBULqBhFQ`AAz@MlASt@Kd@Rp@D`@Gj@DfAGjASx@_@Ju@?[b@u@tBMz@_@l@_@Za@CQF?Z\hAP|@CnAGr@]R[FgAAo@FkA~@Yh@Cn@VfAD|@Yn@[XQBS]Wc@c@Dy@h@Qt@MbBPx@`AjDhAnAf@Df@U^]d@Ov@H`@f@^lALZBLM@UAU?mAd@gA\[t@QvAUhAg@|@Y~@SbBH|AB|@Kj@e@f@gAd@u@hAU`Ae@p@k@dAu@fA}@xAi@XO@WTe@ZeAdBw@`Bs@~@}At@a@j@c@v@u@`AyAn@QRa@|@u@xAiAhA}@f@s@rAsAjCUb@k@PcCBgAHqAt@OLMh@DnAC`AUZg@Ti@l@sA~@i@@KNZrAH|A^dAd@dAFn@GbDMt@S^q@X[JGFOISIOGi@OqAHi@@e@KuBm@o@Y_AEsB?e@U}@m@]Cc@P[d@}@ZsB^{@h@s@r@kAb@k@Li@|@]hAk@~Ae@V}Bt@wAZy@fA_BzBgB\sBNi@OSCYPaAn@eCt@i@Fy@ZyAfAaAVsABi@Q{@g@m@o@Wm@M}@Y_AcAcAeBy@}@Se@Y_@_@[?o@Ey@Yo@Cs@Qg@cBOwAOeEYy@q@o@G[z@mC@iAM{@]u@e@[OMKa@Da@T[bA]Ta@@k@Mw@Wg@Cg@NiAGgAMkATmBJoBEsB_@qBFg@z@Al@_@JI@i@GqLBsGM_BDoAPwA`AgGn@cAZYd@QfAQh@@C{ACsEoBr@qHxCkDxA_Bv@_@|@Wn@g@b@nAlFr@r@BDEN}A?gAHg@@_Bz@aAj@_ApBEd@`@j@BVERi@B',
user_id: 1)

Route.create!(
title: "Hamilton Homecoming",
description: "Jog by the lake, job by the hills, both will do",
duration: 10446,
distance: 12.89,
elevation_gain: 319.881285667419,
polyline: 'ikkgFxpbkV@i@@QAPAh@O^Yn@c@rAk@c@yAkB`@gAZyAN{AFkBJ_CPeANo@Z{@`@s@hAeBtCsEv@iAlDmBtEgC`BkAjAmAh@s@p@eA`AoB^aAd@_BViAV}ANuAHoAF_BCmDpFP^iC`A{Ch@^jAn@`At@Zb@P_@Lq@As@Qu@k@g@OSQy@BaATi@JOPIf@Cl@Lv@Pn@HrB@XKN@LBd@FV?j@HXJLJHRN|BL\NHXH\APQN]PcAJg@Tc@Tg@HQBKXMZMFILOJe@FSXUPWNYRUVk@LUVUTIh@IfAFn@CbAO|@CbBP|@HhAArAKpB@f@A\KNMHMLc@F_@DGd@Mb@J|@d@P@XGPQb@OPBFX~@yBZaAB[Aw@SiA?_@J_APkAr@wAbAsCRoBXDXCZKf@GZDZGj@g@vAcBh@q@\gARq@n@qAPUb@U^Gb@UfDsBNO~@}AHIlC_BXc@f@o@^SJKx@yA^a@fAQ?a@Hw@Lg@JUd@e@tAy@v@kEb@gBXyCFcAGy@De@HU?OAy@?w@DW\y@JYHa@PqB?WEKOq@Ue@u@oAk@eBc@cBMYcAsAMSSm@]g@WOs@g@CO[SgAm@sC{AiGmDeBaAy@]uA_@wASgMy@oBIcCC_CBm@DSFiAPe@HuBd@gCz@cDxAmBnAg@b@sAtAa@f@OTQ`@QXIRUl@QT{@~@}@jAcBdBaA|@q@`@k@j@k@bASp@OpAInAMv@Sj@Qb@sCbFYl@b@l@T`@Xn@b@jB|@hE`A`FFv@?fAIrAYhAk@dA]h@o@f@qD~BiArAm@lBQv@a@tBe@jEGfCIhBBx@H|@Nx@V|@HnA?jF?rAEbAEVa@`ASb@WX}@`@_B\@`BOzA@lBNv@Tj@h@t@h@^jAn@`At@Zb@zBxDp@pAp@|AbB`EnBnEb@tADf@BjBFlAl@~BjA~D\jAVd@zA`B`ClEVtABpAI|@w@|Cm@tGQhD@z@PtCb@dDlA~FxApHp@~DFfACvAg@lGIhA{@dDi@lAWZuCnDDJ?b@ETKPy@zAQTa@Xr@tDBf@TjAd@rB@n@Id@?p@Bn@',
user_id: 1)
