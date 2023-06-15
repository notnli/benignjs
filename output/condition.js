var __px = window.__px || {};
__px.campaigns = __px.campaigns || [];
__px.campaigns.push({
    "nest": {
        "conditions": [{
            "ratio": 100.0,
            "nest": {
                "conditions": [{
                    "nest": {
                        "conditions": [{
                            "ratio": 100.0,
                            "nest": {
                                "conditions": [{
                                    "patternName": "target__abtest_100__230531_ex_c2c_cale2_02_v1",
                                    "patternId": "target__83877__270848",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_10.tmpl?v=230531",
                                            "target": "mno-header"
                                        }]
                                    },
                                    "match": {
                                        "cu_cale2": 1
                                    }
                                }, {
                                    "patternName": "target__abtest_100__230531_ex_wifi_cale2_03_v1",
                                    "patternId": "target__83877__270849",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_09.tmpl?v=230421",
                                            "target": "mno-header"
                                        }]
                                    },
                                    "match": {
                                        "cu_cale2": 2
                                    }
                                }, {
                                    "patternName": "target__abtest_100__230531_ex_spu",
                                    "patternId": "target__83877__270850",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_11.tmpl?v=230531",
                                            "target": "mno-header"
                                        }]
                                    },
                                    "match": {
                                        "cu_cale2": 3
                                    }
                                }, {
                                    "patternName": "target__abtest_100__230531_ex_saikyo_cale2_01_v1",
                                    "patternId": "target__83877__270851",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_04.tmpl?v=230531",
                                            "target": "mno-header"
                                        }]
                                    }
                                }],
                                "type": "Target"
                            }
                        }],
                        "type": "ABTest"
                    },
                    "match": {
                        "co_mnoc": 1
                    }
                }, {
                    "nest": {
                        "conditions": [{
                            "nest": {
                                "conditions": [{
                                    "ratio": 50.0,
                                    "patternName": "abtest__target_cap_cale2_1__20230531_new_teikyo",
                                    "patternId": "abtest__83879__270854",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_03.tmpl?v=230531",
                                            "target": "mno-header"
                                        }]
                                    }
                                }, {
                                    "ratio": 100.0,
                                    "patternName": "abtest__target_cap_cale2_1__20230531_new_saikyoplan",
                                    "patternId": "abtest__83879__270855",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_08.tmpl?v=230531",
                                            "target": "mno-header"
                                        }]
                                    }
                                }],
                                "type": "ABTest"
                            },
                            "match": {
                                "cu_cale2": 1
                            }
                        }, {
                            "patternName": "target__target_else_segment__230531_new_saikyo_cale2_01_v1",
                            "patternId": "target__83878__270857",
                            "actions": {
                                "replace": [{
                                    "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_03.tmpl?v=230531",
                                    "target": "mno-header"
                                }]
                            }
                        }],
                        "type": "Target"
                    }
                }],
                "type": "Target"
            }
        }],
        "type": "ABTest"
    },
    "enableIframe": true,
    "experimentId": 14868,
    "cookieName": "Rp",
    "ratConfig": {
        "acc": 1312,
        "aid": 1,
        "endPoint": "//secure.rat.rakuten.co.jp/?cpkg_none=",
        "ckp": "Rz",
        "cks": "Rp"
    },
    "scvParams": {
        "acc": "1",
        "aid": "43",
        "attr": "111"
    },
    "campaignName": "mnoprj_ichiba_top_pc",
    "webViewEnabled": true,
    "apiType": "CCMP",
    "apiUrl": "https://user-attributes.api.rakuten.co.jp/capi/v1/rmobile/user.json"
});