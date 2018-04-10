# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(username: "lanceArmstrong", password: "password", email: "lance@livestrong.com")

#

Route.create!(user_id: 1,
title: "Heart of the city",
description: "A rough and tumble run. Watch out for buses!",
distance: 5.01,
distance_unit: "miles",
duration: "1 hour 8 mins",
elevation_gain: "97.15",
polyline: 'cqseFz~fjVOgCk@iI|AQxGw@k@eIqAeSQaCyDul@e@gId@fIj@jI^bGyDb@{Dd@Fz@JpAVxDgCZqFn@wYlDM@AYIuAHtAB|@DbBFpALnBATf@`IdDtg@h@fIvDe@nDa@hUmC|Dg@'
)
Route.create!(user_id: 1,
title: "Oakland Hills",
description: "Calf Burner",
distance: 7.98,
distance_unit: "miles",
duration: "2 hours 3 mins",
elevation_gain: "440.81",
polyline: 'ib|eFfwvhV[Qi@?M@MPG\]|CDVR^v@nAPb@RbANVf@`@ZXLJNJd@JNH@FFCTOVSRKLDLNTXXTVHZ?`@CPMJMLDJL?P@d@Tz@Pb@PRRHTBTEDQDo@@YHKPCb@JRALIHa@D[FQNILAf@H`AXJ@JITWFQ?WO_AEe@BURQRWL_A?YEYA]HQ^@ZB\Qp@]LQRa@N_@LAJDDPl@mC`@mDZwDRmDn@sE\_BRg@NYd@i@|@mAd@w@VWRIF?FBFLRp@t@dCl@oA`@{AZcE@sACSg@D[As@g@u@u@J_AXkC~AoEhE_MbA}ClD_Gf@_B@]LQr@_A^s@nAaBnAuA^[d@k@Xo@d@]JGVCPDl@`@oBtCkBrB?DDFp@JR?NGTOn@y@lB_Cn@c@LEd@@w@pAM`@YjBYdBSp@OXEDg@Fa@TQRKVa@`A]j@y@pB_AvAc@hBCTHj@VrABd@AZGTOVe@^o@^[DcAKQBIHELCZBj@GZIPQPKFGFId@Qn@Yb@SXCZHTVT~@b@XPNTF`@Bb@yKxBg@D[As@g@u@u@cApAaAdAiAx@kChAa@d@QZCW`@eEPoAl@{C?OEUKCWFOJmAt@[NUP[R]DUJE@qB?c@Fs@h@g@V_@HSASIKKDGPk@RiBDq@Hm@FOt@_C`@g@~@a@j@y@He@Ag@ScBC_ALo@b@kABHEPOt@Gl@Fb@Xf@J^B^TT\LPAVBNZ@d@Sv@[n@w@vAe@n@m@ZQ\Cb@Jd@`@NZDNLL`@BRE@u@@{@Ac@Fs@h@g@V_@HSASIKKIHoBzAqCdCy@v@i@Z]n@Wv@y@|CGbBMt@Sb@_@ZcAlAe@v@M`@Il@En@Al@QjAYpA'
)
Route.create!(user_id: 1,
title: "Mountain Loop Road",
description: "A beautiful, yet arduous trip",
distance: 10.76,
distance_unit: "miles",
duration: "2 hours 24 mins",
elevation_gain: "263.71",
polyline: '}hhfFvgakVZLb@\HDPDNALBJAXMJCb@Cp@Db@VJLJTV~@KrAGZBLTP`@RRTETBRt@|@RXFF`@BZHPZFN@FETq@`@SBIACDFj@Gd@EJKJCB@BZFX\JDBF?l@D`@BDL@FKLo@FAHHH`@D\ALC`@Ed@CXBNNV`AmDXi@bBqB^k@`@_ADS?Il@SjAC`BH`ALNHLRNf@Nt@DNBBLB|@@b@?`AG`AM^@n@Xp@\d@d@NT^v@fAnBTZ`A`A\d@Td@Rh@Hf@HxBJr@Rh@x@dAlAtAfAdBRb@d@pAn@hB`@hBTxA@d@@zDDp@HZVf@Z`@nAbBf@f@h@Zr@Tf@HlABnA`@~@h@lAxAbBfAhA`Ap@bAr@tAhCbFhAxBXVz@d@bAx@TVNLNFTBTAr@G^DNJVVr@|@b@Xn@Hl@F\Ar@QhAI`A[|@Q\Gb@Kf@YdA{@x@w@ZOv@W`Ba@p@Mr@AhAFd@?^GPGLKTc@^gA\o@pAgDv@qAnBsCtCeEh@{@JK@KBON_@rAcCd@q@l@q@jC}BfDeDh@a@vBwA\_@^m@Xw@Jy@As@I{@S_AUm@IOYY_Aq@KMIOGg@GWUc@EUAWDe@B[EYOYo@W[QUa@EY@YViAHg@Ae@_@eBUc@WMu@Cs@IWKMU?_@Di@Ci@Io@Ka@KSw@y@MWIk@Oa@QSg@_@[Ge@AYI}@g@YCe@?{@[KAQF[h@MNSHq@FUGKQCSFk@Dk@Gi@MYY_@c@[_@Kq@G[Oy@y@c@]_@QUC[@i@Lm@VWRSVONOBMCKOKy@GQUQ]WU]OSKGm@EW?MCMKQi@KQWOk@GQMIOSy@OWOMWIU?QF]Tc@NeAVQ@MAIKAI?WV{@Pm@L_AHaAA_@QkAEk@Sw@Yg@_@WQKIOOcAs@gBSi@KSSSSKQAK@g@Rs@VQ@M?IEIME]FcCEg@Og@q@kAy@_ASK_BU[EQKOSG[Km@O[MIc@Mk@AY@W?IGGO@QDQTe@HY@UAKISMOMIUCUHWRWTu@`@c@Na@?i@MyBi@aAOe@@i@@u@SSAMDMHQVg@`AGDUFUIQQSMOGOA_ALIAOESa@O]GGGE@HFXPh@NTRJV@d@CT@LFJJBF?TINO@SAYCU@aC\s@BeBEaA?o@E{@M}A_@m@Co@B}BL_BHeANcBj@yAb@[RSRcCbDg@\]Hg@Bs@EeA?_DZgATi@X}@h@w@h@STFBFDJ\Hj@?h@SxBKd@SRMDU@YCSDGFEJANFTFV?XGZU^Yr@SZYN[NQRQ^[Ti@L]B{@B'
)
Route.create!(user_id: 1,
title: "Hamilton Homecoming",
description: "Jog by the lake, job by the hills, both will do",
distance: 7.86,
distance_unit: "miles",
duration: "1 hour 37 mins",
elevation_gain: "61.94",
polyline: 'qkhfFvbyjVcAFq@TcCx@SHkBp@{AAqDS]SQWq@fAUnALRNv@Jp@@j@Kh@Y`@_@p@a@d@mAdAk@^s@|@wBdCFVLADJJJL@FAGRAJFL^?`@HfA~CFVID[AiAMAvAIx@pA`@j@P~Af@\Vn@l@pAr@h@NdAL`CTvBFdOIAg@CCkEBG[@[Jg@Lo@Pc@?a@Ne@`@m@d@KlAAfCRp@JNNFJFBVHrANVR~@wBzDsI|@mBZc@`@_@r@e@b@Oh@I`CUjFg@fASd@Mh@W^WbCmBfAs@d@Qh@Gb@@p@Ln@XXTTZd@t@^d@TRPLCNi@g@UYk@aAUYa@[i@Wo@Kk@?w@NWLy@n@eCxBu@`@OFEQFWGc@qA^iBVcCX{P|AsFj@sQ~AuAJ_@DAGMGG@GLADU@[?QF_@JoCPoMlAWBMAKKEKM@GWvBeCr@}@j@_@lAeA`@e@^q@Xa@Ji@Ak@Kq@Ow@MSToAp@gAPV\RpDRzA@jBq@RIbCy@p@UbBIjAI\Q^_@b@o@f@}Af@uBTaABa@M{B?k@J{@d@yA`@i@p@s@fB_BbAo@^YD[B[vBJbCVr@J`@LlAl@j@Pb@?l@KxAe@GWCCG@eAZK?EO?GDIJ?HBB?BEEKAO@cBCG?IFEN?AEECM??CG[r@Uj@En@@^Dz@VdAXTB'
)
Route.create!(user_id: 1,
title: "Gold State Park",
description: "A walk in the park.........",
distance: 4.37,
distance_unit: "miles",
duration: "54 mins",
elevation_gain: "99.60",
polyline: 'mapeFdgsjVh@nCbA~DTd@HTh@|@f@`A\~@P|@JhA\~DV|BVlAHl@d@rBdAdFh@rCl@G`AOh@OxAi@b@I`@Cb@Dd@XVXn@v@DcAD}@EcCMoBKs@c@uAq@mC_AgEk@aD?a@Z{ALGb@An@_KAe@Gc@]cBc@_BkAuDsAoDqA}DWcAWuA[oCc@gEKiBAuAAgIFkODkAHs@Lo@NYj@y@POQNuAs@uAk@c@IYA[FqCrAoAv@ULI[r@zCZ~AJ`ABjBCn@Gx@W`CCjADn@N`ATdB?b@E^Sz@kBnEc@zAEd@C~@B^PhCBbBCpA[vDGpAAhA'
)
Route.create!(user_id: 1,
title: "New York, New York!",
description: "City so nice...",
distance: 4.63,
distance_unit: "miles",
duration: "59 mins",
elevation_gain: "24.75",
polyline: 'owzwF~gobMRb@l@l@`BjAlDxAdBl@dBr@K^Md@FFTRPXLXBNEDK^?l@Fd@WHG[CQ?SDe@DQTu@^m@rC}Fz@eBlBaDmB`DUd@yD|H_@l@Ut@Id@Ad@PbA@^?XC`@Mj@dElC~F|DzCpB`@RMj@@JLXOHs@?ALKd@YbA}A~Ei@zAQXtD`ClEvChC`BbCyH|EsO|AwEvB_HlFuPgC_BvDuLgCcBgBkAs@]aBiAuFuDcEoCsDaC}B{AGTGXG\Et@?bADdCA~@En@_@dC]rB'
)
Route.create!(user_id: 1,
title: "Trail run slog!",
description: "Olema trail run",
distance: 15.23,
distance_unit: "miles",
duration: "3 hours 32 mins",
elevation_gain: "649.27",
polyline: 'etegFdi|lVe@dA_@l@m@n@GMG]TaFAaAM_@o@aAe@e@iAk@i@o@iAeBWMo@@g@GYYMk@q@qEa@{CSw@]i@_@u@Qu@KkB]eGGu@K]a@o@iCwCuGoIeB}B}AeBcAoAaAu@qE_CcF_DkBiAc@IcBEoABsAZ]HWEs@_@[Gs@BcAb@i@K_AyAUw@Ge@@oBPULe@ZsBFc@Hc@D}@D[?Q?i@BOCOK[Kg@CYKSa@s@]k@UMGKSa@SOSAKGO]KcAS_@KWBILCn@Eb@Gd@Il@oAXg@`@a@z@a@VGRFNDFA^@NCHILKLEHIEQc@g@m@c@[MSOy@s@y@q@q@sAa@w@BMLOPk@FQIICG@OEk@K_@KOQOCM?i@Cq@Fy@ByADg@JYh@w@Zi@n@g@`@Sj@U\Ef@M^_@LGN@ZEJVJDRCLKDe@Hg@?UHQVQTANBXCRCTUPANDl@D`CFNEP@LMLWLMGKXWl@}@TsAHcAK_CU}@w@eBi@y@Sm@Ku@@m@Jo@`@{@^e@z@YjEVj@An@WhBoBjBiCH]XgB?mAGo@k@eBuB_Ek@wAIu@CmBNcNAeBSgA[gAIw@@gCCiAQw@g@aAcBiBsAaBUk@Qm@Io@Ao@Fk@VcAd@}@n@e@x@O`@?l@L~B|@vALf@Ul@i@Z{@Hw@IoAe@aEFqEY{By@cBuAoCUsACiAR{A`@cA|@}@p@]n@Qf@Gp@W`@[`@g@Ti@bAuCl@sAVSj@S`AShA[f@[n@i@RY`@eBP{DBmAJm@t@yB`CgCxAgBRc@LkAAaAS{@]m@i@_@m@Wm@?c@Jy@v@[j@W~@g@`D]~BWj@a@j@k@^y@TyFr@sEj@}@LeA^oAv@kEnFo@h@eAn@_KxFaBx@{@RcDIZgHXuBbBiAhBmA~BoBtBmBlDuBbAk@~AqAp@u@f@]p@e@t@SdAgC`AaBvAkBnEcEvHsGlAw@fBwA|ASjAcB`BeAhAe@d@c@hI}CzCeCPMHHZZ\VnDXVFXNZXT\Zv@f@rA~@\xJXrK^lEf@XDEt@SjAUtAIt@?p@BpCPxAt@v@\`@L`@CtAEp@Sf@g@hAsD`E_@nAQ`BI`@?VVXPIr@{@^Kj@Gd@h@J^?xAGbDDnAV|@f@z@BNDb@LhALl@@VGVQNSPI`@Ah@Eb@]|@c@n@ER?RCLKPe@BGJ?RO~@Cl@A^ELMT@\Iv@Hb@Tn@f@nA^b@PNPXJ^IhACXB\KXCh@It@g@`@uBzAGf@`@VV?f@Lp@Hd@V\v@Ln@@h@Md@g@Jk@@k@DUVG~@EjCMr@w@lBEx@Vn@ZtADb@'
)
Route.create!(user_id: 1,
title: "Lake Merced Loop",
description: "Marathon training day 1",
distance: 7.14,
distance_unit: "miles",
duration: "1 hour 27 mins",
elevation_gain: "65.74",
polyline: 'q~geFfprjVCOEM_@Ec@Gs@KMIUIUbAYtAIp@@bAJr@Rh@V\fC~Bv@z@Tf@Rx@D`@@j@Ev@G^Qj@iAhCMr@Cl@Cb@N|@PCXMEl@@l@h@dDP|A?p@E`AQ~@[j@m@r@_@Zo@Z}Bz@uCdAUPIRI\A^D`@L\PVtG|GdAx@`BhApB`AzBn@h@JJ?FEN?b@NPNv@ZNBJAPDTJTZNLLDpCx@~AL~@@t@E`BWt@QhAi@zBaBlBcB|AwA~AsAr@_@|@_@l@Qn@MpBUdASXIBNd@Ob@[vAu@TAd@YhAaAr@eAd@y@j@wAT}@lAyFjBqJd@mB\kAZ{@j@iAf@s@p@w@bA{@fE{C`@g@x@uApC_Fn@cAp@m@t@[lHiClAi@`@Sf@]LMb@k@l@kAP_@b@sA@O?Y@SCa@EY[y@{@i@e@Kg@@_Ej@u@Dq@?sBEyAA[MwGKeARqEEeAGwAEOGiCMqFKkF@aKAyK@yD@eACgAQkC{@}HcCg@Km@CI?DPC?q@LYLcBjAiChBgA|@a@f@Yt@I\\'
)

Route.create!(user_id: 1,
title: "Presidio",
description: "A stroll (can't miss this)",
distance: 3.77,
distance_unit: "miles",
duration: "48 mins",
elevation_gain: "113.57",
polyline: '}jveFnaojVT|@_@FIDKTK\UdAWlBEh@H~BBJSf@_BhDi@pA\jCB`@?XRF\J`Aj@xBjAvA|@p@t@j@n@TPb@TpA`@fAl@z@p@TPBG@CHCn@Ah@Eh@KnAc@fA_@VKVSxAqAx@o@b@UTGX@d@D\Hn@b@~A`B^b@PHb@DZEf@Ob@Y^a@hAsBxByCz@]d@[HMHa@BUS{AW}@{A}CKw@DwC?e@G[g@gA_@eAGm@Cs@Gs@w@mBQi@G_@A_@B_@FWHSBEDKKQWSSIc@@]FYNc@BKGMO[s@q@qAY_@yBmBUI]?WNKTQlAO`AQp@Q\MHYHa@Da@?[Is@e@e@a@MYCMuAR_@LONg@|ACDMDEDGRK|@AdB?d@GN]\a@P_@DuABOHELAbA]@?BVjCDn@u@PYqCUoBGYGKBMh@mA'
)
