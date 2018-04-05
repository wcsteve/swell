# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "lanceArmstrong", password: "password", email: "lance@livestrong.com");
Route.create!(title: "Oakland Hills",
description: "Calf Burner",
duration: 3500,
distance: 3.992,
elevation_gain: 188.371215820312,
polyline: 'a|~eFlgaiVIFMHGUCICMIq@Ou@Uq@r@o@V]B[AIIQY[O[CWB_@\w@nDoI`@m@\MT?t@ZX?TONYHo@Lg@Rc@J_@@a@H_@RUp@[p@m@d@u@XeARy@JYJ_@B]AEh@@~@?jABE[Yk@SYWm@Ms@EgABgAFa@ZiALY\c@f@o@d@s@Vk@~@_DpAmEnBmGNYjA{AD{BCg@M_ACMCG?_@@SBKTa@jAs@j@YIc@Oq@EGIO[Wa@a@m@oAUkALADyB@{@D?P?b@Cb@DjAZf@HT?LAHELSd@qA^kABSAIGK[e@G_@Ae@AWGWe@_AEM@KF]dBcFLMu@mACUDa@Ni@f@LVAXSPa@MuAC}ACc@Se@e@g@qCoAKQ@SWMaEeCm@Ya@MkB_@WKS[M_@Qu@M}@EmA?wAFsBCaAMm@e@wBi@oBQ{@Ms@KUKKYUo@kAMc@h@M',
user_id: 1,)
