'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c4da0e694de9c9b3834f9491f460783",
"assets/AssetManifest.bin.json": "bb3278812a0883a62999332b2d53f910",
"assets/AssetManifest.json": "64e3511a17a4027f98b7bc416d9e90cd",
"assets/assets/characters/airi/airi_01.png": "d2a547a2b28429b86fe97ce7f652bf2a",
"assets/assets/characters/airi/airi_02.png": "80cbd24b919fa624f173d99e8bc3fa29",
"assets/assets/characters/airi/airi_03.png": "b38d5b6c498e4c45e133a7ddb02ec661",
"assets/assets/characters/airi/airi_04.png": "c8489ab6345069ef29bd12d11ffbe236",
"assets/assets/characters/airi/airi_06.png": "b2528b753e930db523ca0921cc37baa9",
"assets/assets/characters/airi/airi_07.png": "4ae0098b2deeea1aac1a10714e46d76a",
"assets/assets/characters/airi/airi_08.png": "7921d89b5f97a6cc8f13ed1fd9376844",
"assets/assets/characters/airi/airi_09.png": "189b0a7bbff8eeaeb531e1df8def8963",
"assets/assets/characters/airi/airi_11.png": "77ce3396a058d66699fa7db3b523b6bb",
"assets/assets/characters/airi/airi_12.png": "0a7d5adc87d7ed570865e34703e1526b",
"assets/assets/characters/airi/airi_13.png": "a910598c3d2e5ce9801619948efbdc2a",
"assets/assets/characters/airi/airi_14.png": "a1f4cfe6704863c308598bc3ec311b9d",
"assets/assets/characters/airi/airi_16.png": "d6c19a01b8f50ec7398f1058e81affc8",
"assets/assets/characters/airi/airi_17.png": "cc73dce1cce8969b9bb25269ac146e64",
"assets/assets/characters/airi/airi_18.png": "eeebde5b4dd1a62968126d1bd05d509c",
"assets/assets/characters/akito/akito_01.png": "74b24fe5dc8331827def4587ec779796",
"assets/assets/characters/akito/akito_02.png": "67a7f46c30d8b387141f2ce5ac65d540",
"assets/assets/characters/akito/akito_03.png": "cd609ecb2146b7f793ffd1831980dad1",
"assets/assets/characters/akito/akito_04.png": "816e05ab9512b840378fd30ca3507ea1",
"assets/assets/characters/akito/akito_06.png": "734b55d93cbbbd02a27ea3b453e32e15",
"assets/assets/characters/akito/akito_07.png": "4d2c4608aef829dbf0614a3f241a46f2",
"assets/assets/characters/akito/akito_08.png": "c536d5740c761dd0f5e18389acd84f26",
"assets/assets/characters/akito/akito_09.png": "bee830f00161483cba9d142abfea95e1",
"assets/assets/characters/akito/akito_11.png": "6dc43e671c1480870ce7ffe972bf82d3",
"assets/assets/characters/akito/akito_12.png": "d647ebaa9791802934003a833024b041",
"assets/assets/characters/akito/akito_13.png": "31819fcfc954d13096f8a585c150a23e",
"assets/assets/characters/akito/akito_14.png": "9f7474238d2a6bf98c2d5bc7a1324124",
"assets/assets/characters/akito/akito_16.png": "a6de6c1cd13dbc5439d2cce5aad85f77",
"assets/assets/characters/an/an_01.png": "71fe9bf942619ee815bf2acf5272cedb",
"assets/assets/characters/an/an_02.png": "cd2dd183950bd113a437b9cb698e80ba",
"assets/assets/characters/an/an_03.png": "21faeb654af3a055f48f1d007de59ce9",
"assets/assets/characters/an/an_04.png": "38893d5bf91975083aa8a137c8fe31f3",
"assets/assets/characters/an/an_06.png": "223df227112719cd9284a44944a64ff7",
"assets/assets/characters/an/an_07.png": "f6bcf01415daff9c9b82253751bf0214",
"assets/assets/characters/an/an_08.png": "8bd0f398ff7d098f594f975bfb934710",
"assets/assets/characters/an/an_09.png": "8c23dcf11bd8ad00fd8112b021b8e746",
"assets/assets/characters/an/an_11.png": "e7593d3d51b2b076eb48b2318ad7b750",
"assets/assets/characters/an/an_12.png": "7c7246d901539aef870e98e47030f352",
"assets/assets/characters/an/an_13.png": "05016f137c8a8fe974dae61066cec522",
"assets/assets/characters/an/an_14.png": "594625aae2115abfec69eafb2863e44b",
"assets/assets/characters/an/an_16.png": "d853e74c26a895d2bd6ca05be5e6c565",
"assets/assets/characters/emu/emu_01.png": "bba505e1fb2153aa1f4c2e8b3093019e",
"assets/assets/characters/emu/emu_02.png": "4fbfb0b2a2803eca06ef61af408ba984",
"assets/assets/characters/emu/emu_03.png": "76852588ec3b6bdba88aeaaae6ceeb29",
"assets/assets/characters/emu/emu_04.png": "327e6c85227a370112dc882198ded203",
"assets/assets/characters/emu/emu_06.png": "109f8230d10ba0f73c8ee1a7434158a4",
"assets/assets/characters/emu/emu_07.png": "dfbfd33b6034b93cc8825d87e6209695",
"assets/assets/characters/emu/emu_08.png": "6f46baa49034c5c405563997b502fb47",
"assets/assets/characters/emu/emu_09.png": "a0bf16cdd04267edac86d72a7bbc84e3",
"assets/assets/characters/emu/emu_11.png": "c1d293007435775ab6d6be9b14306615",
"assets/assets/characters/emu/emu_12.png": "276762d66863d65f7de03d2e626de51a",
"assets/assets/characters/emu/emu_13.png": "a5db50fed302ca67bc7aea123ad1f949",
"assets/assets/characters/emu/emu_14.png": "fcce846717b976f6d29ce87018b6dc4c",
"assets/assets/characters/emu/emu_16.png": "35b61a2326bb7c4ffed58c791363a2e7",
"assets/assets/characters/ena/ena_01.png": "67b36f36cfadfa372519dc4d7245bf50",
"assets/assets/characters/ena/ena_02.png": "1982fd3b1749a57cfc6a858f59ea7a8e",
"assets/assets/characters/ena/ena_03.png": "0127ac310cfca14303fd405f0a0ea22f",
"assets/assets/characters/ena/ena_04.png": "19bc8ac4484546aaca6206bc70a7eee6",
"assets/assets/characters/ena/ena_06.png": "8f91c652f8b9309092c3f66211cfd29f",
"assets/assets/characters/ena/ena_07.png": "acb598322038b46b69b7170e222180e7",
"assets/assets/characters/ena/ena_08.png": "258af00e58702f5e698903f3d9c1da4e",
"assets/assets/characters/ena/ena_09.png": "c9181e89fe4f0aa6a6bedb74b59f2676",
"assets/assets/characters/ena/ena_11.png": "d27d00b91ec2ee12c44950977560629d",
"assets/assets/characters/ena/ena_12.png": "944a3973491c49d5583cda4754c5d422",
"assets/assets/characters/ena/ena_13.png": "2f0e9aa45a62af24d50ac9f2be5b76bc",
"assets/assets/characters/ena/ena_14.png": "9957586f6b017e8e20ae4dee6f9f2d90",
"assets/assets/characters/ena/ena_16.png": "66b682b132c23d8fbbb7df07593cf543",
"assets/assets/characters/ena/ena_17.png": "44a63c5cc89102f2f79e160a1f3e8880",
"assets/assets/characters/ena/ena_18.png": "e6396176b61711a0d6892f05158b9cd2",
"assets/assets/characters/ena/ena_19.png": "155451233c7ed6ba28074d2cb25aacb3",
"assets/assets/characters/haruka/haruka_01.png": "dad2195f9fce165a4ab9dd65a6dbdb2e",
"assets/assets/characters/haruka/haruka_02.png": "261769d817847c9e88b445ddd2fccc02",
"assets/assets/characters/haruka/haruka_03.png": "02fdd10668fbc9a5f8dac82181162dfb",
"assets/assets/characters/haruka/haruka_04.png": "67d0f2a0a736ef705d3f76a080624d17",
"assets/assets/characters/haruka/haruka_06.png": "09a41a43dd9644fc8c45fcc5176bc2c1",
"assets/assets/characters/haruka/haruka_07.png": "a70e069dd28e30900f2bc6071c7be8e2",
"assets/assets/characters/haruka/haruka_08.png": "7d57de9efb4717d4c1d0614c0e0d50a4",
"assets/assets/characters/haruka/haruka_09.png": "c258f7ecbd14228c7c0b2931b4642121",
"assets/assets/characters/haruka/haruka_11.png": "c2538a6d191344e35e2ab1e51782c6c5",
"assets/assets/characters/haruka/haruka_12.png": "6d58ef12782680bcf0b20d3dc6b2efca",
"assets/assets/characters/haruka/haruka_13.png": "176cd1fb8b4e789f43365c143614da84",
"assets/assets/characters/haruka/haruka_14.png": "ac74dbe6a0486208d64c77b49a48d88c",
"assets/assets/characters/haruka/haruka_16.png": "41e40d13e17ebd403618238c1a6715bf",
"assets/assets/characters/honami/honami_01.png": "2e1c01315d614083b00c027cc8eef2f0",
"assets/assets/characters/honami/honami_02.png": "9082e27f609b14deab822c496739f1aa",
"assets/assets/characters/honami/honami_03.png": "397b4eb020adcca6b5f6d4dd4c81155b",
"assets/assets/characters/honami/honami_04.png": "6e0a1d90761b511be0e0d4d68f51c4e6",
"assets/assets/characters/honami/honami_06.png": "f8d1d430efa4229d100f3bcfe1fdb3a7",
"assets/assets/characters/honami/honami_07.png": "c992f23850b28b75dccb198622e96199",
"assets/assets/characters/honami/honami_08.png": "3836b2fd987c5a07b5f83899f616db9d",
"assets/assets/characters/honami/honami_09.png": "65e324de11417c32df0f9bc2958e2d02",
"assets/assets/characters/honami/honami_11.png": "b54e76c71a2bdfdf90852f65060532bd",
"assets/assets/characters/honami/honami_12.png": "81972c95a9a361c23a034ae18a48567a",
"assets/assets/characters/honami/honami_13.png": "ba2e452682fd21913223dca761ae3b97",
"assets/assets/characters/honami/honami_14.png": "62bcef901f8d67a81becd14cc70f736f",
"assets/assets/characters/honami/honami_16.png": "c64c7bdd8941977da19bb78e1d71d3c9",
"assets/assets/characters/honami/honami_17.png": "25424c62bace12bb1870ea79f09ba06f",
"assets/assets/characters/honami/honami_18.png": "501fb78e0cf2377b0d2c8b483a31621a",
"assets/assets/characters/ichika/ichika_01.png": "2459d5dc6bf97fb9979e3b167d926f53",
"assets/assets/characters/ichika/ichika_02.png": "dec2770f3cd903006be115ed66af65b6",
"assets/assets/characters/ichika/ichika_03.png": "30560f400754f9cdfd3394ae57601377",
"assets/assets/characters/ichika/ichika_04.png": "b3f40df4d7ec237b48742f039d266f1e",
"assets/assets/characters/ichika/ichika_06.png": "02b17d97bbcc92e77d40a602f7b1073e",
"assets/assets/characters/ichika/ichika_07.png": "408c3f749a509eb9f677faf494f8c780",
"assets/assets/characters/ichika/ichika_08.png": "18f599c387f526acf7af99225236e6a7",
"assets/assets/characters/ichika/ichika_09.png": "1c6f2f474160aa98b39238ac6810033d",
"assets/assets/characters/ichika/ichika_11.png": "b39c31eef2d7d5a340263c56d359c337",
"assets/assets/characters/ichika/ichika_12.png": "0a17f864e123161e07450f6134b0c2fd",
"assets/assets/characters/ichika/ichika_13.png": "a83565c647c2c8a02eb88c758efcb3de",
"assets/assets/characters/ichika/ichika_14.png": "e12419722dc6d2245a25b9c2f0109ce1",
"assets/assets/characters/ichika/ichika_16.png": "ba67920c839bd2ea3eb60727a351da5d",
"assets/assets/characters/ichika/ichika_17.png": "2ec5b39c33c0988ee7892b4c31d5cd13",
"assets/assets/characters/ichika/ichika_18.png": "e3ae7ba98714e03af02502a20dce0440",
"assets/assets/characters/kaito/kaito_01.png": "537c3e506d32f4772015f32aa854ceda",
"assets/assets/characters/kaito/kaito_02.png": "4b6c11269a6f16f3a61064c01ae2abc5",
"assets/assets/characters/kaito/kaito_03.png": "c7eddee2bc55b9431bb16222169ac165",
"assets/assets/characters/kaito/kaito_04.png": "65925b8fffe4a3959ddcd798975a910b",
"assets/assets/characters/kaito/kaito_06.png": "f9c22db78ef9a4dc7a24c7716bcb9265",
"assets/assets/characters/kaito/kaito_07.png": "334d6e09e8fbd246405b109456c7b9ce",
"assets/assets/characters/kaito/kaito_08.png": "1af60754769050851a4f34840b5cd25f",
"assets/assets/characters/kaito/kaito_09.png": "3a469a7f65b83d6f93977c78e51a9b02",
"assets/assets/characters/kaito/kaito_11.png": "a46a21e12a0ec77090f2d028bedb6091",
"assets/assets/characters/kaito/kaito_12.png": "b5ee395283908fcdefb1a760486246b7",
"assets/assets/characters/kaito/kaito_13.png": "c26ee26e767c6aa1f30e8cef153f93a4",
"assets/assets/characters/kaito/kaito_14.png": "f6e9cd35c856ffdd3d7922f495e6c132",
"assets/assets/characters/kaito/kaito_16.png": "87a21088ced9de88e65825a74b62125a",
"assets/assets/characters/kanade/kanade_01.png": "1b1cc482bb707a0811144476055b9556",
"assets/assets/characters/kanade/kanade_02.png": "3bea2225d2170b94105f5c411f4d82e6",
"assets/assets/characters/kanade/kanade_03.png": "b97bdcfc9d3dfccfe1db19fff07ee468",
"assets/assets/characters/kanade/kanade_04.png": "2b5523ad794e69470b080457d14eaef5",
"assets/assets/characters/kanade/kanade_06.png": "e1de21e5e9bcbd741dc3b952f411e2da",
"assets/assets/characters/kanade/kanade_07.png": "94d38692b9abac4283a4c08924bfb1bc",
"assets/assets/characters/kanade/kanade_08.png": "8cc84f9253f7fa2fdb0bccbf0de4cdae",
"assets/assets/characters/kanade/kanade_09.png": "9b429cd6fca2d6a06ac1153829ff8b7b",
"assets/assets/characters/kanade/kanade_11.png": "d9053cd01b712d927153f071b2915467",
"assets/assets/characters/kanade/kanade_12.png": "0d11c13f3fd7e9c953cc8e6b891d6d9f",
"assets/assets/characters/kanade/kanade_13.png": "c2c2cba0a81a78b7f7812ab5988c7c92",
"assets/assets/characters/kanade/kanade_14.png": "4123dbb8c2250c0bdfff58427108b773",
"assets/assets/characters/kanade/kanade_16.png": "1bfe0f3e015e637905cfc1e69b0cd3df",
"assets/assets/characters/kanade/kanade_17.png": "cd5a3ce456b0b0e32a631520154840d6",
"assets/assets/characters/kohane/kohane_01.png": "ff232d513a8dff43e4a521cd3232d18d",
"assets/assets/characters/kohane/kohane_02.png": "3fbc5922f23515868b0fff6009e93d74",
"assets/assets/characters/kohane/kohane_03.png": "7c00781733f6a52256c8382d1e4d048c",
"assets/assets/characters/kohane/kohane_04.png": "cd6b0ddeaade85c15f86c1dbb3fbbd0b",
"assets/assets/characters/kohane/kohane_06.png": "987f4befe2fca04398724b3c9f8e4c50",
"assets/assets/characters/kohane/kohane_07.png": "f30aba15868512ceee07add3f7305617",
"assets/assets/characters/kohane/kohane_08.png": "44cce0202dd21265610e8210376a7206",
"assets/assets/characters/kohane/kohane_09.png": "1903ea3a27684ca200f7e3b91de22266",
"assets/assets/characters/kohane/kohane_11.png": "ed9aceb0067724c5f704548d453b76ca",
"assets/assets/characters/kohane/kohane_12.png": "233fd91245619ee7e2013f8b3677c75e",
"assets/assets/characters/kohane/kohane_13.png": "380a0937ebe66a3bd8b238aa4f2a0ac2",
"assets/assets/characters/kohane/kohane_14.png": "2adeaa9ebd793843c7ebcabcb525dba3",
"assets/assets/characters/kohane/kohane_16.png": "a53475ec174a4c0c8c3a76a0bb737ea7",
"assets/assets/characters/kohane/kohane_17.png": "17d0612b9f16c5d189fddcd0dddb7be8",
"assets/assets/characters/len/len_01.png": "b3d1fb2e99cd2c3f38184c906def8f54",
"assets/assets/characters/len/len_02.png": "6b709fd3a93b43ff350dd1dd3f22da66",
"assets/assets/characters/len/len_03.png": "223afc31fe94533962e4ca687572b073",
"assets/assets/characters/len/len_04.png": "9e9f9fcf21758ae9580b312e37c29a8d",
"assets/assets/characters/len/len_06.png": "402d8aea9d864661f512e2f111ae24f6",
"assets/assets/characters/len/len_07.png": "dab8ebdf6e12ebb3661977f21b9f661e",
"assets/assets/characters/len/len_08.png": "b7eb38ce17969b4d6a3ac44148ce443b",
"assets/assets/characters/len/len_09.png": "3c93129b2b9ad5a63b39f48db8713fa5",
"assets/assets/characters/len/len_11.png": "f1fd53a7ae5a06ca67f05976fc7c4046",
"assets/assets/characters/len/len_12.png": "d1c765fa2829bf99fa1fc4691b2fa7b1",
"assets/assets/characters/len/len_13.png": "2b6e58a745365713d8f5e62562cf9f3b",
"assets/assets/characters/len/len_14.png": "63b4e3f3641aadf2ad104565171e27cc",
"assets/assets/characters/len/len_16.png": "67baa4705df8e4abb56f1b225ee1ab9c",
"assets/assets/characters/len/len_17.png": "07f6fa9f13d3c9a7f38dab9a842b2a0d",
"assets/assets/characters/luka/luka_01.png": "9fe481e4e6c43cddfe9c33299b35d737",
"assets/assets/characters/luka/luka_02.png": "05072261f2e5bfece83ed70143b1b32d",
"assets/assets/characters/luka/luka_03.png": "f1937b8a98beb3c258482a26d66552d2",
"assets/assets/characters/luka/luka_04.png": "cd7e0817407f3eeef902153fbdc9f3f1",
"assets/assets/characters/luka/luka_06.png": "91a4b4f1ee35d90a076d511b99ffd5ce",
"assets/assets/characters/luka/luka_07.png": "7f5f2e792e2097b8c53bcd7a2155d17b",
"assets/assets/characters/luka/luka_08.png": "a8bfe01a9a2d7ab6e8fae270ba3bb7bc",
"assets/assets/characters/luka/luka_09.png": "7afa77835d8ee10419b702c1191efc16",
"assets/assets/characters/luka/luka_11.png": "f7b9d4a5c346e77a221cbe73ef054b70",
"assets/assets/characters/luka/luka_12.png": "4428037bd68ecad7890161bf43d26293",
"assets/assets/characters/luka/luka_13.png": "f2f72ad26d41fae7322090250237a949",
"assets/assets/characters/luka/luka_14.png": "a67afb55b123fd43e35138d43d0d931a",
"assets/assets/characters/luka/luka_16.png": "7f2c09de8835eb455b72c772b9996fa7",
"assets/assets/characters/mafuyu/mafuyu_01.png": "1f9973edba5417d67c0acb954c8235b6",
"assets/assets/characters/mafuyu/mafuyu_02.png": "fa523cea43078760f0382a9a3c1499c6",
"assets/assets/characters/mafuyu/mafuyu_03.png": "a7fe3278ad612835f3d45a5d9a14032f",
"assets/assets/characters/mafuyu/mafuyu_04.png": "2a7f681be9d00853c41af29bbf605d75",
"assets/assets/characters/mafuyu/mafuyu_06.png": "527adc0995d5c96f785b204189a555b5",
"assets/assets/characters/mafuyu/mafuyu_07.png": "06ab9281751206dfcb6a0152177c2ddc",
"assets/assets/characters/mafuyu/mafuyu_08.png": "c33117a85b9a341924d5e6dfe8adba2b",
"assets/assets/characters/mafuyu/mafuyu_09.png": "e2036d62409b8d7debfcf8bd3fb26946",
"assets/assets/characters/mafuyu/mafuyu_11.png": "7527d04cfa1c8054cb04918e9ed43a38",
"assets/assets/characters/mafuyu/mafuyu_12.png": "0fe95b9eb5576bd0ae8e1d2c24f9295f",
"assets/assets/characters/mafuyu/mafuyu_13.png": "10a8a633c692b5b38dba0070a01b1cc2",
"assets/assets/characters/mafuyu/mafuyu_14.png": "92c22bf70fd20fa2502cfca0f372e9ac",
"assets/assets/characters/mafuyu/mafuyu_16.png": "c922f0a8c461b0d7cd4276dfcedc0fb6",
"assets/assets/characters/mafuyu/mafuyu_17.png": "0aea55e3d92ed1b3a1dc29ca516402c6",
"assets/assets/characters/meiko/meiko_01.png": "aad90f1465fd2ae9702711ab05b9dfd2",
"assets/assets/characters/meiko/meiko_02.png": "24b1b89e9c52f5342b253861cf6e235e",
"assets/assets/characters/meiko/meiko_03.png": "3fe07a95fa99cc08601abe874b7f78e8",
"assets/assets/characters/meiko/meiko_04.png": "f86ef19a453d4b704f29bd2848acc4a4",
"assets/assets/characters/meiko/meiko_06.png": "c579869978d23e34a241e54fb370da99",
"assets/assets/characters/meiko/meiko_07.png": "da3d59988d933e99a28979197cf2cf79",
"assets/assets/characters/meiko/meiko_08.png": "d4b73bcd427104bdd52a0b2edb2a5a09",
"assets/assets/characters/meiko/meiko_09.png": "7581b5fa21f66d2c6e2398369f88717d",
"assets/assets/characters/meiko/meiko_11.png": "d4b3919a8b3023b64d84401b53b5af55",
"assets/assets/characters/meiko/meiko_12.png": "7cba8beed470245b6810e1c46eba7eec",
"assets/assets/characters/meiko/meiko_13.png": "705b11d13112ce3a5dd2057be6975868",
"assets/assets/characters/meiko/meiko_14.png": "85ebe7a9a40886256739d37543a4ac36",
"assets/assets/characters/meiko/meiko_16.png": "0d3594ed37bc64f15cf516ffaf488aa9",
"assets/assets/characters/miku/miku_01.png": "29f71f47ee4c5b3290f523ffd495420d",
"assets/assets/characters/miku/miku_02.png": "b0b9d4c7b93b5b782248bcfbdf52b29b",
"assets/assets/characters/miku/miku_03.png": "1c496fa1d06646bde607665e39c3611c",
"assets/assets/characters/miku/miku_04.png": "c9b9b70d780f32df24a1c231e1ee8a7e",
"assets/assets/characters/miku/miku_06.png": "c3e537dadc1e85ceb61a3b80873d5b6f",
"assets/assets/characters/miku/miku_07.png": "f1dc41a1f146b23bd99b6bfec071d131",
"assets/assets/characters/miku/miku_08.png": "d3c9cdc8df8326e0f493a3a5fd4b9abb",
"assets/assets/characters/miku/miku_09.png": "05efa7f5fe4f757ddb6eb9068e4b0490",
"assets/assets/characters/miku/miku_11.png": "2d66f96ecf4d8fb9fa63c4f533bc60ca",
"assets/assets/characters/miku/miku_12.png": "1ceb732652a8649b678a8aab4eb4ee66",
"assets/assets/characters/miku/miku_13.png": "881f98784be5fc7918ef572fbdb7858c",
"assets/assets/characters/miku/miku_14.png": "5b2a0989bfb2e5bb2a7635cc815a6dcd",
"assets/assets/characters/miku/miku_16.png": "5507673107f9ba8025ddeec9e734eb02",
"assets/assets/characters/minori/minori_01.png": "f587e6ef5f652a0eee29fe846dea7feb",
"assets/assets/characters/minori/minori_02.png": "2d038a9f31b5b57dd618a315f8221e3a",
"assets/assets/characters/minori/minori_03.png": "9b95e7ea81797cf768e7b03d93874809",
"assets/assets/characters/minori/minori_04.png": "7c02e55535c05ed39476100dfd6eb653",
"assets/assets/characters/minori/minori_06.png": "28d620e074d35a9bb7b11dadb18f4435",
"assets/assets/characters/minori/minori_07.png": "bf34f395ebb4bf39aa970fb031e13c16",
"assets/assets/characters/minori/minori_08.png": "a59072cdeadc103c7e6c154418c7b749",
"assets/assets/characters/minori/minori_09.png": "d6000df6bd13bf09888e676400ea3ad7",
"assets/assets/characters/minori/minori_11.png": "f8d4e049a1f168f3ce10964dc2d74d41",
"assets/assets/characters/minori/minori_12.png": "3304b89ee1c0186af67fe13fc8fde5ad",
"assets/assets/characters/minori/minori_13.png": "ce4b50e4d27e2fc03deaf2f994b0bda6",
"assets/assets/characters/minori/minori_14.png": "18fc480940875b2e6b3fb97a3cfbd2d1",
"assets/assets/characters/minori/minori_16.png": "dd59791b30bf85c622596a7a3d16f9b8",
"assets/assets/characters/minori/minori_17.png": "04afb7e594e8d0cc332c6050684b15f9",
"assets/assets/characters/mizuki/mizuki_01.png": "98e35e206996b91818120ab9caea2708",
"assets/assets/characters/mizuki/mizuki_02.png": "98b9df090b32f27d8de7ab8a2bf7e234",
"assets/assets/characters/mizuki/mizuki_03.png": "d10bb5312777e86b6a19610e45387849",
"assets/assets/characters/mizuki/mizuki_04.png": "5ee51f55f9619fd6fe8f0d3bc0ec42f8",
"assets/assets/characters/mizuki/mizuki_06.png": "eaa6ade61599d8f9b5f14ef9fe00ec22",
"assets/assets/characters/mizuki/mizuki_07.png": "ef646c9c7382471d61c094db310db67f",
"assets/assets/characters/mizuki/mizuki_08.png": "d64621091b1daedf998a8695daf4588a",
"assets/assets/characters/mizuki/mizuki_09.png": "80641beaf73679c9c14238103fc0f7b6",
"assets/assets/characters/mizuki/mizuki_11.png": "1d623824ecba4b0b806d13189ea7ffe7",
"assets/assets/characters/mizuki/mizuki_12.png": "5ea39c8793ca31bc63de609b5bfa1099",
"assets/assets/characters/mizuki/mizuki_13.png": "b37201102a579423dc9adb74cc59d317",
"assets/assets/characters/mizuki/mizuki_14.png": "e123eee04e5ffdae32b58585e71bd0da",
"assets/assets/characters/mizuki/mizuki_16.png": "2477270933d46147ce1003b4185a95ef",
"assets/assets/characters/mizuki/mizuki_17.png": "bab80cb1689ec75c0289b9f60fde4ca5",
"assets/assets/characters/nene/nene_01.png": "c663c95d793c8f67bb7af398537350e4",
"assets/assets/characters/nene/nene_02.png": "af31035b84486ecbe6c5fe0489de3caf",
"assets/assets/characters/nene/nene_03.png": "49417f82d0ebcd7ca92a6a8e170955b0",
"assets/assets/characters/nene/nene_04.png": "d191819b6d39a47ff449854f17e64ac2",
"assets/assets/characters/nene/nene_06.png": "5bb8da4f22a61e608335016fb7e66581",
"assets/assets/characters/nene/nene_07.png": "cb7cd74c84852a5e4f90a62093c47234",
"assets/assets/characters/nene/nene_08.png": "21cb6ec9834cd4693239b7c47196d68b",
"assets/assets/characters/nene/nene_09.png": "9a6216ab4fe1203acbca893c1695957b",
"assets/assets/characters/nene/nene_11.png": "248c7abe48089cb3a107fb96168b3e6c",
"assets/assets/characters/nene/nene_12.png": "5d5f31f3282dfc18aeb59e3a3a94e89d",
"assets/assets/characters/nene/nene_13.png": "cbfb9be24a074beca226601cdfcce330",
"assets/assets/characters/nene/nene_14.png": "b10280da8a33dc53fed2d173478d4533",
"assets/assets/characters/nene/nene_16.png": "3571c9d6bc4eb6916e4c953a4099ef2c",
"assets/assets/characters/rin/rin_01.png": "54b6f17ee0add2db75a9f46b920e24c9",
"assets/assets/characters/rin/rin_02.png": "6dada0bb73ee0cc44230e353b099e66b",
"assets/assets/characters/rin/rin_03.png": "53a47a51bba7fcbda08f2985025ed564",
"assets/assets/characters/rin/rin_04.png": "3325775d5ab068c127efb53613b68680",
"assets/assets/characters/rin/rin_06.png": "b7e77763b34f5b94c74616c59a276e40",
"assets/assets/characters/rin/rin_07.png": "ece2c8017fa2162570abbec7a98b11c4",
"assets/assets/characters/rin/rin_08.png": "8aba8278f2bfa1dfa7af14eeb3e9366e",
"assets/assets/characters/rin/rin_09.png": "d4dd0fe52d53def5ffddcf2062c9807c",
"assets/assets/characters/rin/rin_11.png": "7dedadec50e30f9b2bfbbc08101c7ce7",
"assets/assets/characters/rin/rin_12.png": "cc32d85641cd6f2cf3ba8baa9c5bd2d5",
"assets/assets/characters/rin/rin_13.png": "3ab97be058ccfe03d9a7348e881218ac",
"assets/assets/characters/rin/rin_14.png": "d96e11aab221ba941a550b760e57fd3c",
"assets/assets/characters/rin/rin_16.png": "4757fa66fd488090088f648d546065de",
"assets/assets/characters/rui/rui_01.png": "db3325eea580890cb06c70c9cfff5bcb",
"assets/assets/characters/rui/rui_02.png": "3199346fbe76a8fd26a413a56219e3f2",
"assets/assets/characters/rui/rui_03.png": "53e989b2c89b74d4dc06618ddb24da47",
"assets/assets/characters/rui/rui_04.png": "bb401830bb88fccccb37ab5006f9464e",
"assets/assets/characters/rui/rui_06.png": "b13db5b7d3cab0b33050c6d8911394d5",
"assets/assets/characters/rui/rui_07.png": "495f4346375ee45c43c45f26a269d75b",
"assets/assets/characters/rui/rui_08.png": "c5e99fd09f0c93ee754d6afc13d0bdb4",
"assets/assets/characters/rui/rui_09.png": "977ec688f702f6d582995a505e769c1f",
"assets/assets/characters/rui/rui_11.png": "dead171b7220f23502fddb6ba8d2e516",
"assets/assets/characters/rui/rui_12.png": "1fdef3258f07f56100ea714b50c6841a",
"assets/assets/characters/rui/rui_13.png": "52157ee2e03e4215bcc4d02d50851da6",
"assets/assets/characters/rui/rui_14.png": "19f3f8fb9aba2f9a89a3abc2f2fbbd0c",
"assets/assets/characters/rui/rui_16.png": "fb0f23c7833ac718a7295f8740015414",
"assets/assets/characters/rui/rui_17.png": "460b8602d0f7f6f6801d8d75b9fc6b10",
"assets/assets/characters/rui/rui_18.png": "79e727be23e1a493000a6a617256e9a6",
"assets/assets/characters/rui/rui_19.png": "8495fade8979fd826c55382703e99807",
"assets/assets/characters/saki/saki_01.png": "0cd7b87a4c9e9b3ebb72d00aefd49601",
"assets/assets/characters/saki/saki_02.png": "a1d2a0b5ee48a2c73ba4a170fe345438",
"assets/assets/characters/saki/saki_03.png": "4ab7216dfacaf5c60960901539dcac11",
"assets/assets/characters/saki/saki_04.png": "0d54c088202b78088086d1fe9f96009d",
"assets/assets/characters/saki/saki_06.png": "d12e075ae8e3e5b0fe279c1a424b924e",
"assets/assets/characters/saki/saki_07.png": "dd3e094261d09daec71fbed0b5a424c5",
"assets/assets/characters/saki/saki_08.png": "0b2c8bad6ffe5ee4c9177f3d958dfeff",
"assets/assets/characters/saki/saki_09.png": "2d1f7301831129c7a8519aa5fd123239",
"assets/assets/characters/saki/saki_11.png": "20c9e17c7cf46755826b8662fae556e4",
"assets/assets/characters/saki/saki_12.png": "c97e5dc8580d14e633c1d6f7bceb1e2d",
"assets/assets/characters/saki/saki_13.png": "2cd8f3461ac8fbbade33c84ba43b51cd",
"assets/assets/characters/saki/saki_14.png": "9313349e732bd79477f6e9edc5c87e10",
"assets/assets/characters/saki/saki_16.png": "699e4a669b55252cffc02c933136b131",
"assets/assets/characters/saki/saki_17.png": "65e10d22205f7f206c10c25e007a8b69",
"assets/assets/characters/saki/saki_18.png": "448e0fa30f72aa897a595506feea036e",
"assets/assets/characters/shiho/shiho_01.png": "cc71b9aaea69e2463781165c3fe241d8",
"assets/assets/characters/shiho/shiho_02.png": "d89028cffa35322e0b43d6b6b300cad5",
"assets/assets/characters/shiho/shiho_03.png": "f2bf25a5ec710f3db84220c987ae54fa",
"assets/assets/characters/shiho/shiho_04.png": "f802d59de0fdcb4c36e4173f4da460c2",
"assets/assets/characters/shiho/shiho_06.png": "d34af77a3dc22d4fab6903174f8fe310",
"assets/assets/characters/shiho/shiho_07.png": "c110542b17643e284cc673148481e111",
"assets/assets/characters/shiho/shiho_08.png": "f4342140e18c89982bf792398380ce65",
"assets/assets/characters/shiho/shiho_09.png": "7c39606e1149d0e7130e7f3b814e3c6f",
"assets/assets/characters/shiho/shiho_11.png": "f81e75ea5cfc99f50e76aa90e3f635c5",
"assets/assets/characters/shiho/shiho_12.png": "1d7091a206a16b2a2979b41a87088622",
"assets/assets/characters/shiho/shiho_13.png": "aadcfeaae791efb2625f07275c363fdf",
"assets/assets/characters/shiho/shiho_14.png": "9162127bb636ca173f644eb428283ab5",
"assets/assets/characters/shiho/shiho_16.png": "9a7b705721e6a0c503a8d7dd268f6a62",
"assets/assets/characters/shiho/shiho_17.png": "6779617e712d3b4e61d4cf2fead37194",
"assets/assets/characters/shiho/shiho_18.png": "d6729176473e0c297b70e00c8147e8a2",
"assets/assets/characters/shizuku/shizuku_01.png": "f2e4f5fd24c80ba975134056428717bc",
"assets/assets/characters/shizuku/shizuku_02.png": "1b27dcb35e5f8cba8186a140624c90d4",
"assets/assets/characters/shizuku/shizuku_03.png": "78bba0e7dbf5cc42611e182b01abe22e",
"assets/assets/characters/shizuku/shizuku_04.png": "59bbd949d6874b108903d75fb68db235",
"assets/assets/characters/shizuku/shizuku_06.png": "7ecb52ee2bd89d417c61cd8f22bea093",
"assets/assets/characters/shizuku/shizuku_07.png": "bc7d5de7b7e852e168b779b73ee5db34",
"assets/assets/characters/shizuku/shizuku_08.png": "b2b29140920bf8f8e779d0d4c059cdf6",
"assets/assets/characters/shizuku/shizuku_09.png": "4130832425bb7f66e776b41c8a6ff029",
"assets/assets/characters/shizuku/shizuku_11.png": "d5b9424b4a728c370bed28abfe934941",
"assets/assets/characters/shizuku/shizuku_12.png": "a90f57b9293d15b0c42644dfb5a26fd8",
"assets/assets/characters/shizuku/shizuku_13.png": "9acf0a7007ed1360f9f041a060c3db54",
"assets/assets/characters/shizuku/shizuku_14.png": "ca324edf1cdb145b4cf8f2cfdfa275e2",
"assets/assets/characters/shizuku/shizuku_16.png": "055bfe3f3a735233f85a04094e76c4b9",
"assets/assets/characters/touya/touya_01.png": "2ad84d607a27c21a1d4544e1379fa33e",
"assets/assets/characters/touya/touya_02.png": "67500bfdc24c8c660c143c190bd32a03",
"assets/assets/characters/touya/touya_03.png": "d1de1d2abb18e2c2e33796b31a8fd585",
"assets/assets/characters/touya/touya_04.png": "8828a12cdb0759b307a1615f76115c8d",
"assets/assets/characters/touya/touya_06.png": "8f490016fdf7a9c32efffd1261fc3b0a",
"assets/assets/characters/touya/touya_07.png": "bec958a6dec847abdc18c221d8326943",
"assets/assets/characters/touya/touya_08.png": "eca5ab64f30267ca7eacce040b9f9cd5",
"assets/assets/characters/touya/touya_09.png": "cdb1241581a090f9f6e6108fafd01819",
"assets/assets/characters/touya/touya_11.png": "24c563185d96f8ec4b38fea9c490858a",
"assets/assets/characters/touya/touya_12.png": "73e8277cab2146eb6e7232d4bbb8b551",
"assets/assets/characters/touya/touya_13.png": "dbb446466ec5314b853239fea208bf07",
"assets/assets/characters/touya/touya_14.png": "0de3f0438e2972cf83bea21b7ad5099d",
"assets/assets/characters/touya/touya_16.png": "9185b9d033cb619c0613fc5b03e3db99",
"assets/assets/characters/touya/touya_17.png": "9a8db10b811a94f5d641e46b7b3150f5",
"assets/assets/characters/touya/touya_18.png": "ed629bb4ae08fcd8c293b6a237bf3dcc",
"assets/assets/characters/tsukasa/tsukasa_01.png": "fb5a23b67213c7277524e9a7a55d77b8",
"assets/assets/characters/tsukasa/tsukasa_02.png": "d3c5f25f0c61434158dc931b325d7cbc",
"assets/assets/characters/tsukasa/tsukasa_03.png": "8bd76c0f003c34ba8af755fc8f76ff22",
"assets/assets/characters/tsukasa/tsukasa_04.png": "062f51de1c37366a00d6aaf4e7696072",
"assets/assets/characters/tsukasa/tsukasa_06.png": "61d211ac0f7ee282cb03366839d36e6c",
"assets/assets/characters/tsukasa/tsukasa_07.png": "3a7a49c9212d76c86da949c776cbaef8",
"assets/assets/characters/tsukasa/tsukasa_08.png": "6a3366f66534057eacb8abf1e215b8ac",
"assets/assets/characters/tsukasa/tsukasa_09.png": "2d033d14b26518a34598bba9dc2bb79d",
"assets/assets/characters/tsukasa/tsukasa_11.png": "7a81dfa2b5ede4008971590bfa8c2ec9",
"assets/assets/characters/tsukasa/tsukasa_12.png": "8fb50da319e73e5c1b6bb7fc500a898b",
"assets/assets/characters/tsukasa/tsukasa_13.png": "55bc711d10d7a05857e9e81d57f87a45",
"assets/assets/characters/tsukasa/tsukasa_14.png": "107e8c0ef0a01a81472be26a5af12c2f",
"assets/assets/characters/tsukasa/tsukasa_16.png": "d14799a033e87528d28cc782ec93e80a",
"assets/assets/characters/tsukasa/tsukasa_17.png": "9920acce982bb366139f5488750ef3df",
"assets/assets/characters/tsukasa/tsukasa_18.png": "1c8ec2833d67672f4c2fdd9406219a8a",
"assets/assets/icon.png": "c92604d9fc9f8c4c94588e0bb53f5a99",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/Fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/Fonts/ShangShouFangTangTi.ttf": "4d24496109499ecb24e4d753c9fef713",
"assets/Fonts/YurukaStd.ttf": "2b3966678f6a1c8c8be202caeb49d95a",
"assets/NOTICES": "27a8d4a7ef3c6beb40a6b191bb173ea3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "2439ace9317e5e83c0503e66a1141bf3",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "432435c566c2022871afbeaaf0116224",
"icons/Icon-192.png": "388b4043b8b5f666aa56a662bd9892be",
"icons/Icon-512.png": "fbc001d4674653034483a47b0357d012",
"icons/Icon-maskable-192.png": "388b4043b8b5f666aa56a662bd9892be",
"icons/Icon-maskable-512.png": "fbc001d4674653034483a47b0357d012",
"index.html": "2130199f2cfa630efb04ddd763aa4d13",
"/": "2130199f2cfa630efb04ddd763aa4d13",
"main.dart.js": "cc2d92318a9a386a6e78fee0ca149e7c",
"manifest.json": "f738fb204000c16f23691d06b29b1d2b",
"version.json": "8a36a5a95c25c16ccc9598bf8765d2a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
