gdjs.MenuCode = {};
gdjs.MenuCode.GDLabelLowScoreObjects1= [];
gdjs.MenuCode.GDLabelLowScoreObjects2= [];
gdjs.MenuCode.GDLabelLowScoreObjects3= [];
gdjs.MenuCode.GDLabelLowScoreObjects4= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects1= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects2= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects3= [];
gdjs.MenuCode.GDLabelLeaderboardsObjects4= [];
gdjs.MenuCode.GDLabelHighScoreObjects1= [];
gdjs.MenuCode.GDLabelHighScoreObjects2= [];
gdjs.MenuCode.GDLabelHighScoreObjects3= [];
gdjs.MenuCode.GDLabelHighScoreObjects4= [];
gdjs.MenuCode.GDPlayerNameObjects1= [];
gdjs.MenuCode.GDPlayerNameObjects2= [];
gdjs.MenuCode.GDPlayerNameObjects3= [];
gdjs.MenuCode.GDPlayerNameObjects4= [];
gdjs.MenuCode.GDInputPlayerNameObjects1= [];
gdjs.MenuCode.GDInputPlayerNameObjects2= [];
gdjs.MenuCode.GDInputPlayerNameObjects3= [];
gdjs.MenuCode.GDInputPlayerNameObjects4= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartButtonObjects3= [];
gdjs.MenuCode.GDStartButtonObjects4= [];
gdjs.MenuCode.GDKnightMaleObjects1= [];
gdjs.MenuCode.GDKnightMaleObjects2= [];
gdjs.MenuCode.GDKnightMaleObjects3= [];
gdjs.MenuCode.GDKnightMaleObjects4= [];
gdjs.MenuCode.GDBrownBackgroundObjects1= [];
gdjs.MenuCode.GDBrownBackgroundObjects2= [];
gdjs.MenuCode.GDBrownBackgroundObjects3= [];
gdjs.MenuCode.GDBrownBackgroundObjects4= [];
gdjs.MenuCode.GDLeaderboardObjects1= [];
gdjs.MenuCode.GDLeaderboardObjects2= [];
gdjs.MenuCode.GDLeaderboardObjects3= [];
gdjs.MenuCode.GDLeaderboardObjects4= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects1= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3= [];
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects4= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects1= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects2= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3= [];
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects4= [];
gdjs.MenuCode.GDLastTimeObjects1= [];
gdjs.MenuCode.GDLastTimeObjects2= [];
gdjs.MenuCode.GDLastTimeObjects3= [];
gdjs.MenuCode.GDLastTimeObjects4= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) != "Wonderful Person";
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


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects3Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardLowObjects3Objects = Hashtable.newFrom({"ClickLayerLeaderBoardLow": gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardHighObjects2Objects = Hashtable.newFrom({"ClickLayerLeaderBoardHigh": gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.MenuCode.GDInputPlayerNameObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString((( gdjs.MenuCode.GDInputPlayerNameObjects3.length === 0 ) ? "" :gdjs.MenuCode.GDInputPlayerNameObjects3[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickLayerLeaderBoardLow"), gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardLowObjects3Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "4b2c2436-ae5d-40f6-90e0-e280a09a4323", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickLayerLeaderBoardHigh"), gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDClickLayerLeaderBoardHighObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "590ba387-f179-42be-9766-4df9aa64af2d", true);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
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


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

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
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLabelLowScoreObjects1.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects2.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects3.length = 0;
gdjs.MenuCode.GDLabelLowScoreObjects4.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects1.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects2.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects3.length = 0;
gdjs.MenuCode.GDLabelLeaderboardsObjects4.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects1.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects2.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects3.length = 0;
gdjs.MenuCode.GDLabelHighScoreObjects4.length = 0;
gdjs.MenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDPlayerNameObjects4.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDInputPlayerNameObjects4.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects3.length = 0;
gdjs.MenuCode.GDStartButtonObjects4.length = 0;
gdjs.MenuCode.GDKnightMaleObjects1.length = 0;
gdjs.MenuCode.GDKnightMaleObjects2.length = 0;
gdjs.MenuCode.GDKnightMaleObjects3.length = 0;
gdjs.MenuCode.GDKnightMaleObjects4.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects3.length = 0;
gdjs.MenuCode.GDBrownBackgroundObjects4.length = 0;
gdjs.MenuCode.GDLeaderboardObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardObjects4.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects1.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects2.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects3.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardHighObjects4.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects1.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects2.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects3.length = 0;
gdjs.MenuCode.GDClickLayerLeaderBoardLowObjects4.length = 0;
gdjs.MenuCode.GDLastTimeObjects1.length = 0;
gdjs.MenuCode.GDLastTimeObjects2.length = 0;
gdjs.MenuCode.GDLastTimeObjects3.length = 0;
gdjs.MenuCode.GDLastTimeObjects4.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
