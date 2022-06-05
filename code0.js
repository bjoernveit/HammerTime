gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDHammerObjects1= [];
gdjs.GameCode.GDHammerObjects2= [];
gdjs.GameCode.GDHammerObjects3= [];
gdjs.GameCode.GDHammerObjects4= [];
gdjs.GameCode.GDHammerObjects5= [];
gdjs.GameCode.GDBrownBackgroundObjects1= [];
gdjs.GameCode.GDBrownBackgroundObjects2= [];
gdjs.GameCode.GDBrownBackgroundObjects3= [];
gdjs.GameCode.GDBrownBackgroundObjects4= [];
gdjs.GameCode.GDBrownBackgroundObjects5= [];
gdjs.GameCode.GDTimeObjects1= [];
gdjs.GameCode.GDTimeObjects2= [];
gdjs.GameCode.GDTimeObjects3= [];
gdjs.GameCode.GDTimeObjects4= [];
gdjs.GameCode.GDTimeObjects5= [];
gdjs.GameCode.GDHealthObjects1= [];
gdjs.GameCode.GDHealthObjects2= [];
gdjs.GameCode.GDHealthObjects3= [];
gdjs.GameCode.GDHealthObjects4= [];
gdjs.GameCode.GDHealthObjects5= [];
gdjs.GameCode.GDShortestObjects1= [];
gdjs.GameCode.GDShortestObjects2= [];
gdjs.GameCode.GDShortestObjects3= [];
gdjs.GameCode.GDShortestObjects4= [];
gdjs.GameCode.GDShortestObjects5= [];
gdjs.GameCode.GDLongestObjects1= [];
gdjs.GameCode.GDLongestObjects2= [];
gdjs.GameCode.GDLongestObjects3= [];
gdjs.GameCode.GDLongestObjects4= [];
gdjs.GameCode.GDLongestObjects5= [];
gdjs.GameCode.GDLivesTiledObjects1= [];
gdjs.GameCode.GDLivesTiledObjects2= [];
gdjs.GameCode.GDLivesTiledObjects3= [];
gdjs.GameCode.GDLivesTiledObjects4= [];
gdjs.GameCode.GDLivesTiledObjects5= [];
gdjs.GameCode.GDEmitterBrokenObjects1= [];
gdjs.GameCode.GDEmitterBrokenObjects2= [];
gdjs.GameCode.GDEmitterBrokenObjects3= [];
gdjs.GameCode.GDEmitterBrokenObjects4= [];
gdjs.GameCode.GDEmitterBrokenObjects5= [];
gdjs.GameCode.GDEmitterBloodObjects1= [];
gdjs.GameCode.GDEmitterBloodObjects2= [];
gdjs.GameCode.GDEmitterBloodObjects3= [];
gdjs.GameCode.GDEmitterBloodObjects4= [];
gdjs.GameCode.GDEmitterBloodObjects5= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];
gdjs.GameCode.GDNewSpriteObjects5= [];
gdjs.GameCode.GDJoystickObjects1= [];
gdjs.GameCode.GDJoystickObjects2= [];
gdjs.GameCode.GDJoystickObjects3= [];
gdjs.GameCode.GDJoystickObjects4= [];
gdjs.GameCode.GDJoystickObjects5= [];
gdjs.GameCode.GDThumbCircleObjects1= [];
gdjs.GameCode.GDThumbCircleObjects2= [];
gdjs.GameCode.GDThumbCircleObjects3= [];
gdjs.GameCode.GDThumbCircleObjects4= [];
gdjs.GameCode.GDThumbCircleObjects5= [];
gdjs.GameCode.GDRestartObjects1= [];
gdjs.GameCode.GDRestartObjects2= [];
gdjs.GameCode.GDRestartObjects3= [];
gdjs.GameCode.GDRestartObjects4= [];
gdjs.GameCode.GDRestartObjects5= [];
gdjs.GameCode.GDHammerBorderObjects1= [];
gdjs.GameCode.GDHammerBorderObjects2= [];
gdjs.GameCode.GDHammerBorderObjects3= [];
gdjs.GameCode.GDHammerBorderObjects4= [];
gdjs.GameCode.GDHammerBorderObjects5= [];
gdjs.GameCode.GDJoystickOuterObjects1= [];
gdjs.GameCode.GDJoystickOuterObjects2= [];
gdjs.GameCode.GDJoystickOuterObjects3= [];
gdjs.GameCode.GDJoystickOuterObjects4= [];
gdjs.GameCode.GDJoystickOuterObjects5= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinObjects4= [];
gdjs.GameCode.GDCoinObjects5= [];
gdjs.GameCode.GDCoinsTiledObjects1= [];
gdjs.GameCode.GDCoinsTiledObjects2= [];
gdjs.GameCode.GDCoinsTiledObjects3= [];
gdjs.GameCode.GDCoinsTiledObjects4= [];
gdjs.GameCode.GDCoinsTiledObjects5= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects1Objects = Hashtable.newFrom({"Hammer": gdjs.GameCode.GDHammerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.GameCode.GDCoinObjects1.length = 0;

gdjs.GameCode.GDHammerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects1Objects, gdjs.randomInRange(100, 700), gdjs.randomInRange(100, 500), "");
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].setWidth(24);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].getBehavior("Physics2").applyAngularImpulse(gdjs.randomFloatInRange(0.05, 0.3));
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].resetTimer("AliveFor");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects, gdjs.randomInRange(100, 700), gdjs.randomInRange(100, 500), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "noCoinSpawnedSince");
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.GameCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.GameCode.GDLongestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shortest"), gdjs.GameCode.GDShortestObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Gametime");
}{for(var i = 0, len = gdjs.GameCode.GDShortestObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDShortestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDLongestObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLongestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.GameCode.GDHammerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.GameCode.GDHammerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects1Objects = Hashtable.newFrom({"Hammer": gdjs.GameCode.GDHammerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEmitterBloodObjects1Objects = Hashtable.newFrom({"EmitterBlood": gdjs.GameCode.GDEmitterBloodObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.GameCode.GDHammerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects2Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects2Objects, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects2[i].returnVariable(gdjs.GameCode.GDHammerObjects2[i].getVariables().getFromIndex(0)).add(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.GameCode.GDHammerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects1Objects, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.GameCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.GameCode.GDLivesTiledObjects1);
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
gdjs.GameCode.GDEmitterBloodObjects1.length = 0;

{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDLivesTiledObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesTiledObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].returnVariable(gdjs.GameCode.GDHammerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEmitterBloodObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 0, "", 0, 0.2, 0, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects1});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) >= 5;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "coinSpawnTimer");
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects3Objects = Hashtable.newFrom({"Hammer": gdjs.GameCode.GDHammerObjects3});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("IS_DISTANCE_SPEED_UP"), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDHammerObjects3, gdjs.GameCode.GDHammerObjects4);

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects3, gdjs.GameCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.GameCode.GDHammerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects4[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.randomFloatInRange(1, 2) * (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")), (gdjs.GameCode.GDHammerObjects4[i].getCenterXInScene()), (gdjs.GameCode.GDHammerObjects4[i].getCenterYInScene())) / 800), (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")), (gdjs.GameCode.GDHammerObjects4[i].getCenterXInScene()), (gdjs.GameCode.GDHammerObjects4[i].getCenterYInScene()));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("IS_DISTANCE_SPEED_UP"), false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects3 */
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.randomFloatInRange(1, 2) * 0.5, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")), (gdjs.GameCode.GDHammerObjects3[i].getCenterXInScene()), (gdjs.GameCode.GDHammerObjects3[i].getCenterYInScene()));
}
}}

}


};gdjs.GameCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("SPAWN_TIME")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDHammerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHammerObjects3Objects, gdjs.randomInRange(100, 700), gdjs.randomInRange(100, 500), "");
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].setWidth(24);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].getBehavior("Physics2").applyAngularImpulse(gdjs.randomFloatInRange(0.05, 0.3));
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].resetTimer("AliveFor");
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].setAnimation(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.GameCode.GDHammerObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDHammerObjects3[i].getTimerElapsedTimeInSecondsOrNaN("AliveFor") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("IDLE_TIME")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDHammerObjects3[k] = gdjs.GameCode.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDHammerObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDHammerObjects3[i].getVariableBoolean(gdjs.GameCode.GDHammerObjects3[i].getVariables().getFromIndex(1), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDHammerObjects3[k] = gdjs.GameCode.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDHammerObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.randomInRange(1, 10), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")), (gdjs.GameCode.GDHammerObjects3[i].getCenterXInScene()), (gdjs.GameCode.GDHammerObjects3[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].setVariableBoolean(gdjs.GameCode.GDHammerObjects3[i].getVariables().getFromIndex(1), false);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].getBehavior("Physics2").enableLayer(1, true);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].getBehavior("Physics2").setAngularDamping(0.4);
}
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects3[i].removeTimer("AliveFor");
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDCoinObjects) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "coinSpawnTimer") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("COIN_SPAWN_TIME"));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDCoinObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects2Objects, gdjs.randomFloatInRange(100, 700), gdjs.randomFloatInRange(100, 500), "");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEmitterBrokenObjects2Objects = Hashtable.newFrom({"EmitterBroken": gdjs.GameCode.GDEmitterBrokenObjects2});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDHammerObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHammerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHammerObjects2[i].getVariableNumber(gdjs.GameCode.GDHammerObjects2[i].getVariables().getFromIndex(0)) >= 3 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDHammerObjects2[k] = gdjs.GameCode.GDHammerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHammerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects2 */
gdjs.GameCode.GDEmitterBrokenObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEmitterBrokenObjects2Objects, (( gdjs.GameCode.GDHammerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDHammerObjects2[0].getPointX("")), (( gdjs.GameCode.GDHammerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDHammerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.GameCode.GDTimeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTimeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTimeObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2)));
}
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.GameCode.GDHammerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHammerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHammerObjects2[i].getVariableBoolean(gdjs.GameCode.GDHammerObjects2[i].getVariables().getFromIndex(1), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDHammerObjects2[k] = gdjs.GameCode.GDHammerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHammerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDHammerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHammerObjects2[i].getAnimation() != (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDHammerObjects2[i].getVariables().getFromIndex(0))) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDHammerObjects2[k] = gdjs.GameCode.GDHammerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHammerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHammerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHammerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects2[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDHammerObjects2[i].getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CoinsTiled"), gdjs.GameCode.GDCoinsTiledObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.GameCode.GDLivesTiledObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCoinsTiledObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinsTiledObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) * 32);
}
}{for(var i = 0, len = gdjs.GameCode.GDLivesTiledObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesTiledObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isPreview(runtimeScene));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("LEADERBOARD_ID_LONGEST")), gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8))).getChild("LEADERBOARD_ID_QUICKEST")), gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.GameCode.GDLongestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.GameCode.GDLongestObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLongestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Shortest"), gdjs.GameCode.GDShortestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.GameCode.GDShortestObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDShortestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9592964);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-sad-game-over-trombone-471.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.GameCode.GDHammerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Gametime");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2));
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
for(var i = 0, len = gdjs.GameCode.GDHammerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHammerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfEmptyGDJoystickOuterObjects = Hashtable.newFrom({"JoystickOuter": []});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects3Objects = Hashtable.newFrom({"JoystickOuter": gdjs.GameCode.GDJoystickOuterObjects3});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDJoystickOuterObjects) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDJoystickOuterObjects3.length = 0;

{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, 0));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects3Objects, gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)), "UI", 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)), "UI", 0), "UI");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("JoystickOuter"), gdjs.GameCode.GDJoystickOuterObjects2);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.GameCode.GDThumbCircleObjects2);
{for(var i = 0, len = gdjs.GameCode.GDJoystickOuterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJoystickOuterObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDThumbCircleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDThumbCircleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects2Objects = Hashtable.newFrom({"ThumbCircle": gdjs.GameCode.GDThumbCircleObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects2Objects = Hashtable.newFrom({"JoystickOuter": gdjs.GameCode.GDJoystickOuterObjects2});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0, 0);
}
}}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.eventsList13(runtimeScene);
}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDJoystickOuterObjects2, gdjs.GameCode.GDJoystickOuterObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDJoystickOuterObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDJoystickOuterObjects3[i].getBehavior("MultitouchJoystick").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDJoystickOuterObjects3[k] = gdjs.GameCode.GDJoystickOuterObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDJoystickOuterObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDJoystickOuterObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Physics2").applyPolarForce((( gdjs.GameCode.GDJoystickOuterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDJoystickOuterObjects3[0].getBehavior("MultitouchJoystick").JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects2Objects) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfEmptyGDJoystickOuterObjects = Hashtable.newFrom({"JoystickOuter": []});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects2Objects = Hashtable.newFrom({"JoystickOuter": gdjs.GameCode.GDJoystickOuterObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects2Objects = Hashtable.newFrom({"ThumbCircle": gdjs.GameCode.GDThumbCircleObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects1Objects = Hashtable.newFrom({"ThumbCircle": gdjs.GameCode.GDThumbCircleObjects1});
gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDJoystickOuterObjects) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDJoystickOuterObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJoystickOuterObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "UI", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "UI", 0), "UI");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("JoystickOuter"), gdjs.GameCode.GDJoystickOuterObjects2);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.GameCode.GDThumbCircleObjects2);
{for(var i = 0, len = gdjs.GameCode.GDJoystickOuterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJoystickOuterObjects2[i].getBehavior("MultitouchJoystick").SimulateTouch_Position(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "UI", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "UI", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("JoystickOuter"), gdjs.GameCode.GDJoystickOuterObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.GameCode.GDThumbCircleObjects1);
{for(var i = 0, len = gdjs.GameCode.GDJoystickOuterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJoystickOuterObjects1[i].getBehavior("MultitouchJoystick").SimulateTouchEnded(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDJoystickOuterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJoystickOuterObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDThumbCircleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDThumbCircleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("JoystickOuter"), gdjs.GameCode.GDJoystickOuterObjects2);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.GameCode.GDThumbCircleObjects2);
{for(var i = 0, len = gdjs.GameCode.GDJoystickOuterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJoystickOuterObjects2[i].getBehavior("MultitouchJoystick").ActivateJoystick(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDThumbCircleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDHammerObjects1.length = 0;
gdjs.GameCode.GDHammerObjects2.length = 0;
gdjs.GameCode.GDHammerObjects3.length = 0;
gdjs.GameCode.GDHammerObjects4.length = 0;
gdjs.GameCode.GDHammerObjects5.length = 0;
gdjs.GameCode.GDBrownBackgroundObjects1.length = 0;
gdjs.GameCode.GDBrownBackgroundObjects2.length = 0;
gdjs.GameCode.GDBrownBackgroundObjects3.length = 0;
gdjs.GameCode.GDBrownBackgroundObjects4.length = 0;
gdjs.GameCode.GDBrownBackgroundObjects5.length = 0;
gdjs.GameCode.GDTimeObjects1.length = 0;
gdjs.GameCode.GDTimeObjects2.length = 0;
gdjs.GameCode.GDTimeObjects3.length = 0;
gdjs.GameCode.GDTimeObjects4.length = 0;
gdjs.GameCode.GDTimeObjects5.length = 0;
gdjs.GameCode.GDHealthObjects1.length = 0;
gdjs.GameCode.GDHealthObjects2.length = 0;
gdjs.GameCode.GDHealthObjects3.length = 0;
gdjs.GameCode.GDHealthObjects4.length = 0;
gdjs.GameCode.GDHealthObjects5.length = 0;
gdjs.GameCode.GDShortestObjects1.length = 0;
gdjs.GameCode.GDShortestObjects2.length = 0;
gdjs.GameCode.GDShortestObjects3.length = 0;
gdjs.GameCode.GDShortestObjects4.length = 0;
gdjs.GameCode.GDShortestObjects5.length = 0;
gdjs.GameCode.GDLongestObjects1.length = 0;
gdjs.GameCode.GDLongestObjects2.length = 0;
gdjs.GameCode.GDLongestObjects3.length = 0;
gdjs.GameCode.GDLongestObjects4.length = 0;
gdjs.GameCode.GDLongestObjects5.length = 0;
gdjs.GameCode.GDLivesTiledObjects1.length = 0;
gdjs.GameCode.GDLivesTiledObjects2.length = 0;
gdjs.GameCode.GDLivesTiledObjects3.length = 0;
gdjs.GameCode.GDLivesTiledObjects4.length = 0;
gdjs.GameCode.GDLivesTiledObjects5.length = 0;
gdjs.GameCode.GDEmitterBrokenObjects1.length = 0;
gdjs.GameCode.GDEmitterBrokenObjects2.length = 0;
gdjs.GameCode.GDEmitterBrokenObjects3.length = 0;
gdjs.GameCode.GDEmitterBrokenObjects4.length = 0;
gdjs.GameCode.GDEmitterBrokenObjects5.length = 0;
gdjs.GameCode.GDEmitterBloodObjects1.length = 0;
gdjs.GameCode.GDEmitterBloodObjects2.length = 0;
gdjs.GameCode.GDEmitterBloodObjects3.length = 0;
gdjs.GameCode.GDEmitterBloodObjects4.length = 0;
gdjs.GameCode.GDEmitterBloodObjects5.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects5.length = 0;
gdjs.GameCode.GDJoystickObjects1.length = 0;
gdjs.GameCode.GDJoystickObjects2.length = 0;
gdjs.GameCode.GDJoystickObjects3.length = 0;
gdjs.GameCode.GDJoystickObjects4.length = 0;
gdjs.GameCode.GDJoystickObjects5.length = 0;
gdjs.GameCode.GDThumbCircleObjects1.length = 0;
gdjs.GameCode.GDThumbCircleObjects2.length = 0;
gdjs.GameCode.GDThumbCircleObjects3.length = 0;
gdjs.GameCode.GDThumbCircleObjects4.length = 0;
gdjs.GameCode.GDThumbCircleObjects5.length = 0;
gdjs.GameCode.GDRestartObjects1.length = 0;
gdjs.GameCode.GDRestartObjects2.length = 0;
gdjs.GameCode.GDRestartObjects3.length = 0;
gdjs.GameCode.GDRestartObjects4.length = 0;
gdjs.GameCode.GDRestartObjects5.length = 0;
gdjs.GameCode.GDHammerBorderObjects1.length = 0;
gdjs.GameCode.GDHammerBorderObjects2.length = 0;
gdjs.GameCode.GDHammerBorderObjects3.length = 0;
gdjs.GameCode.GDHammerBorderObjects4.length = 0;
gdjs.GameCode.GDHammerBorderObjects5.length = 0;
gdjs.GameCode.GDJoystickOuterObjects1.length = 0;
gdjs.GameCode.GDJoystickOuterObjects2.length = 0;
gdjs.GameCode.GDJoystickOuterObjects3.length = 0;
gdjs.GameCode.GDJoystickOuterObjects4.length = 0;
gdjs.GameCode.GDJoystickOuterObjects5.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinObjects4.length = 0;
gdjs.GameCode.GDCoinObjects5.length = 0;
gdjs.GameCode.GDCoinsTiledObjects1.length = 0;
gdjs.GameCode.GDCoinsTiledObjects2.length = 0;
gdjs.GameCode.GDCoinsTiledObjects3.length = 0;
gdjs.GameCode.GDCoinsTiledObjects4.length = 0;
gdjs.GameCode.GDCoinsTiledObjects5.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
