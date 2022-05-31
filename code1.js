gdjs.MenuCode = {};
gdjs.MenuCode.GDLabelLowScoreObjects1= [];
gdjs.MenuCode.GDLabelLowScoreObjects2= [];
gdjs.MenuCode.GDLabelLowScoreObjects3= [];
gdjs.MenuCode.GDLabelLowScoreObjects4= [];
gdjs.MenuCode.GDLabelLowScoreObjects5= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects1= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects2= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects3= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects4= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects5= [];
gdjs.MenuCode.GDLabelHighScoreObjects1= [];
gdjs.MenuCode.GDLabelHighScoreObjects2= [];
gdjs.MenuCode.GDLabelHighScoreObjects3= [];
gdjs.MenuCode.GDLabelHighScoreObjects4= [];
gdjs.MenuCode.GDLabelHighScoreObjects5= [];
gdjs.MenuCode.GDPlayerNameObjects1= [];
gdjs.MenuCode.GDPlayerNameObjects2= [];
gdjs.MenuCode.GDPlayerNameObjects3= [];
gdjs.MenuCode.GDPlayerNameObjects4= [];
gdjs.MenuCode.GDPlayerNameObjects5= [];
gdjs.MenuCode.GDInputPlayerNameObjects1= [];
gdjs.MenuCode.GDInputPlayerNameObjects2= [];
gdjs.MenuCode.GDInputPlayerNameObjects3= [];
gdjs.MenuCode.GDInputPlayerNameObjects4= [];
gdjs.MenuCode.GDInputPlayerNameObjects5= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartButtonObjects3= [];
gdjs.MenuCode.GDStartButtonObjects4= [];
gdjs.MenuCode.GDStartButtonObjects5= [];
gdjs.MenuCode.GDKnightMaleObjects1= [];
gdjs.MenuCode.GDKnightMaleObjects2= [];
gdjs.MenuCode.GDKnightMaleObjects3= [];
gdjs.MenuCode.GDKnightMaleObjects4= [];
gdjs.MenuCode.GDKnightMaleObjects5= [];
gdjs.MenuCode.GDBrownBackgroundObjects1= [];
gdjs.MenuCode.GDBrownBackgroundObjects2= [];
gdjs.MenuCode.GDBrownBackgroundObjects3= [];
gdjs.MenuCode.GDBrownBackgroundObjects4= [];
gdjs.MenuCode.GDBrownBackgroundObjects5= [];
gdjs.MenuCode.GDLeaderboardObjects1= [];
gdjs.MenuCode.GDLeaderboardObjects2= [];
gdjs.MenuCode.GDLeaderboardObjects3= [];
gdjs.MenuCode.GDLeaderboardObjects4= [];
gdjs.MenuCode.GDLeaderboardObjects5= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects1= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects4= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects5= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects1= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects2= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects4= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects5= [];
gdjs.MenuCode.GDLastTimeObjects1= [];
gdjs.MenuCode.GDLastTimeObjects2= [];
gdjs.MenuCode.GDLastTimeObjects3= [];
gdjs.MenuCode.GDLastTimeObjects4= [];
gdjs.MenuCode.GDLastTimeObjects5= [];
gdjs.MenuCode.GDGameVersionObjects1= [];
gdjs.MenuCode.GDGameVersionObjects2= [];
gdjs.MenuCode.GDGameVersionObjects3= [];
gdjs.MenuCode.GDGameVersionObjects4= [];
gdjs.MenuCode.GDGameVersionObjects5= [];
gdjs.MenuCode.GDModeEasyObjects1= [];
gdjs.MenuCode.GDModeEasyObjects2= [];
gdjs.MenuCode.GDModeEasyObjects3= [];
gdjs.MenuCode.GDModeEasyObjects4= [];
gdjs.MenuCode.GDModeEasyObjects5= [];
gdjs.MenuCode.GDButtonPlayObjects1= [];
gdjs.MenuCode.GDButtonPlayObjects2= [];
gdjs.MenuCode.GDButtonPlayObjects3= [];
gdjs.MenuCode.GDButtonPlayObjects4= [];
gdjs.MenuCode.GDButtonPlayObjects5= [];
gdjs.MenuCode.GDButtonHarderObjects1= [];
gdjs.MenuCode.GDButtonHarderObjects2= [];
gdjs.MenuCode.GDButtonHarderObjects3= [];
gdjs.MenuCode.GDButtonHarderObjects4= [];
gdjs.MenuCode.GDButtonHarderObjects5= [];
gdjs.MenuCode.GDButtonHardObjects1= [];
gdjs.MenuCode.GDButtonHardObjects2= [];
gdjs.MenuCode.GDButtonHardObjects3= [];
gdjs.MenuCode.GDButtonHardObjects4= [];
gdjs.MenuCode.GDButtonHardObjects5= [];
gdjs.MenuCode.GDButtonEasyObjects1= [];
gdjs.MenuCode.GDButtonEasyObjects2= [];
gdjs.MenuCode.GDButtonEasyObjects3= [];
gdjs.MenuCode.GDButtonEasyObjects4= [];
gdjs.MenuCode.GDButtonEasyObjects5= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) != "NO_NAME";
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.MenuCode.GDInputPlayerNameObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDInputPlayerNameObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDInputPlayerNameObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLastTimeObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLastTimeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLastTimeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonPlayObjects3Objects = Hashtable.newFrom({"ButtonPlay": gdjs.MenuCode.GDButtonPlayObjects3});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.MenuCode.GDInputPlayerNameObjects4);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDInputPlayerNameObjects4.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDInputPlayerNameObjects4[i].getString() == "") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDInputPlayerNameObjects4[k] = gdjs.MenuCode.GDInputPlayerNameObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDInputPlayerNameObjects4.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDInputPlayerNameObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(5).setString((( gdjs.MenuCode.GDInputPlayerNameObjects4.length === 0 ) ? "" :gdjs.MenuCode.GDInputPlayerNameObjects4[0].getString()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.MenuCode.GDInputPlayerNameObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDInputPlayerNameObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInputPlayerNameObjects3[i].getString() == "" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDInputPlayerNameObjects3[k] = gdjs.MenuCode.GDInputPlayerNameObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDInputPlayerNameObjects3.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardLowObjects3Objects = Hashtable.newFrom({"ClickLayerLeaderBoardLow": gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardHighObjects3Objects = Hashtable.newFrom({"ClickLayerLeaderBoardHigh": gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonEasyObjects3Objects = Hashtable.newFrom({"ButtonEasy": gdjs.MenuCode.GDButtonEasyObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonHardObjects3Objects = Hashtable.newFrom({"ButtonHard": gdjs.MenuCode.GDButtonHardObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonHarderObjects2Objects = Hashtable.newFrom({"ButtonHarder": gdjs.MenuCode.GDButtonHarderObjects2});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonPlay"), gdjs.MenuCode.GDButtonPlayObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonPlayObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickLayerLeaderBoardLow"), gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardLowObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("LEADERBOARD_ID_QUICKEST")), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickLayerLeaderBoardHigh"), gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardHighObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("LEADERBOARD_ID_LONGEST")), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEasy"), gdjs.MenuCode.GDButtonEasyObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonEasyObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("EASY");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHard"), gdjs.MenuCode.GDButtonHardObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonHardObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("HARD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHarder"), gdjs.MenuCode.GDButtonHarderObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonHarderObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("HARDER");
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonEasy"), gdjs.MenuCode.GDButtonEasyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonHard"), gdjs.MenuCode.GDButtonHardObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonHarder"), gdjs.MenuCode.GDButtonHarderObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonHarderObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonHarderObjects2[i].getVariableString(gdjs.MenuCode.GDButtonHarderObjects2[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonHarderObjects2[k] = gdjs.MenuCode.GDButtonHarderObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonHarderObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonHardObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonHardObjects2[i].getVariableString(gdjs.MenuCode.GDButtonHardObjects2[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonHardObjects2[k] = gdjs.MenuCode.GDButtonHardObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonHardObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonEasyObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonEasyObjects2[i].getVariableString(gdjs.MenuCode.GDButtonEasyObjects2[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonEasyObjects2[k] = gdjs.MenuCode.GDButtonEasyObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonEasyObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonEasyObjects2 */
/* Reuse gdjs.MenuCode.GDButtonHardObjects2 */
/* Reuse gdjs.MenuCode.GDButtonHarderObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonHarderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonHarderObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MenuCode.GDButtonHardObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonHardObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MenuCode.GDButtonEasyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonEasyObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEasy"), gdjs.MenuCode.GDButtonEasyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonHard"), gdjs.MenuCode.GDButtonHardObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonHarder"), gdjs.MenuCode.GDButtonHarderObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonHarderObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDButtonHarderObjects1[i].getVariableString(gdjs.MenuCode.GDButtonHarderObjects1[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonHarderObjects1[k] = gdjs.MenuCode.GDButtonHarderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonHarderObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonHardObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDButtonHardObjects1[i].getVariableString(gdjs.MenuCode.GDButtonHardObjects1[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonHardObjects1[k] = gdjs.MenuCode.GDButtonHardObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonHardObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonEasyObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDButtonEasyObjects1[i].getVariableString(gdjs.MenuCode.GDButtonEasyObjects1[i].getVariables().get("CONFIG_KEY")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonEasyObjects1[k] = gdjs.MenuCode.GDButtonEasyObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonEasyObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonEasyObjects1 */
/* Reuse gdjs.MenuCode.GDButtonHardObjects1 */
/* Reuse gdjs.MenuCode.GDButtonHarderObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonHarderObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonHarderObjects1[i].setAnimation(0);
}
for(var i = 0, len = gdjs.MenuCode.GDButtonHardObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonHardObjects1[i].setAnimation(0);
}
for(var i = 0, len = gdjs.MenuCode.GDButtonEasyObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonEasyObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LastTime"), gdjs.MenuCode.GDLastTimeObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLastTimeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLastTimeObjects1[i].setString("");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.eventsList4(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLabelLowScoreObjects1.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects2.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects3.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects4.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects5.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects1.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects2.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects3.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects4.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects5.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects1.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects2.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects3.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects4.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects5.length = 0;
gdjs.MenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDPlayerNameObjects4.length = 0;
gdjs.MenuCode.GDPlayerNameObjects5.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects4.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects5.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects3.length = 0;
gdjs.MenuCode.GDStartButtonObjects4.length = 0;
gdjs.MenuCode.GDStartButtonObjects5.length = 0;
gdjs.MenuCode.GDKnightMaleObjects1.length = 0;
gdjs.MenuCode.GDKnightMaleObjects2.length = 0;
gdjs.MenuCode.GDKnightMaleObjects3.length = 0;
gdjs.MenuCode.GDKnightMaleObjects4.length = 0;
gdjs.MenuCode.GDKnightMaleObjects5.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects3.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects4.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects5.length = 0;
gdjs.MenuCode.GDLeaderboardObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardObjects4.length = 0;
gdjs.MenuCode.GDLeaderboardObjects5.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects1.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects4.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects5.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects1.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects2.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects4.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects5.length = 0;
gdjs.MenuCode.GDLastTimeObjects1.length = 0;
gdjs.MenuCode.GDLastTimeObjects2.length = 0;
gdjs.MenuCode.GDLastTimeObjects3.length = 0;
gdjs.MenuCode.GDLastTimeObjects4.length = 0;
gdjs.MenuCode.GDLastTimeObjects5.length = 0;
gdjs.MenuCode.GDGameVersionObjects1.length = 0;
gdjs.MenuCode.GDGameVersionObjects2.length = 0;
gdjs.MenuCode.GDGameVersionObjects3.length = 0;
gdjs.MenuCode.GDGameVersionObjects4.length = 0;
gdjs.MenuCode.GDGameVersionObjects5.length = 0;
gdjs.MenuCode.GDModeEasyObjects1.length = 0;
gdjs.MenuCode.GDModeEasyObjects2.length = 0;
gdjs.MenuCode.GDModeEasyObjects3.length = 0;
gdjs.MenuCode.GDModeEasyObjects4.length = 0;
gdjs.MenuCode.GDModeEasyObjects5.length = 0;
gdjs.MenuCode.GDButtonPlayObjects1.length = 0;
gdjs.MenuCode.GDButtonPlayObjects2.length = 0;
gdjs.MenuCode.GDButtonPlayObjects3.length = 0;
gdjs.MenuCode.GDButtonPlayObjects4.length = 0;
gdjs.MenuCode.GDButtonPlayObjects5.length = 0;
gdjs.MenuCode.GDButtonHarderObjects1.length = 0;
gdjs.MenuCode.GDButtonHarderObjects2.length = 0;
gdjs.MenuCode.GDButtonHarderObjects3.length = 0;
gdjs.MenuCode.GDButtonHarderObjects4.length = 0;
gdjs.MenuCode.GDButtonHarderObjects5.length = 0;
gdjs.MenuCode.GDButtonHardObjects1.length = 0;
gdjs.MenuCode.GDButtonHardObjects2.length = 0;
gdjs.MenuCode.GDButtonHardObjects3.length = 0;
gdjs.MenuCode.GDButtonHardObjects4.length = 0;
gdjs.MenuCode.GDButtonHardObjects5.length = 0;
gdjs.MenuCode.GDButtonEasyObjects1.length = 0;
gdjs.MenuCode.GDButtonEasyObjects2.length = 0;
gdjs.MenuCode.GDButtonEasyObjects3.length = 0;
gdjs.MenuCode.GDButtonEasyObjects4.length = 0;
gdjs.MenuCode.GDButtonEasyObjects5.length = 0;

gdjs.MenuCode.eventsList5(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
