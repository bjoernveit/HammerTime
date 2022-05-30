gdjs.Level_321Code = {};
gdjs.Level_321Code.GDHammerObjects2_1final = [];

gdjs.Level_321Code.GDPlayerObjects2_1final = [];

gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPlayerObjects4= [];
gdjs.Level_321Code.GDHammerObjects1= [];
gdjs.Level_321Code.GDHammerObjects2= [];
gdjs.Level_321Code.GDHammerObjects3= [];
gdjs.Level_321Code.GDHammerObjects4= [];
gdjs.Level_321Code.GDBrownBackgroundObjects1= [];
gdjs.Level_321Code.GDBrownBackgroundObjects2= [];
gdjs.Level_321Code.GDBrownBackgroundObjects3= [];
gdjs.Level_321Code.GDBrownBackgroundObjects4= [];
gdjs.Level_321Code.GDTimeObjects1= [];
gdjs.Level_321Code.GDTimeObjects2= [];
gdjs.Level_321Code.GDTimeObjects3= [];
gdjs.Level_321Code.GDTimeObjects4= [];
gdjs.Level_321Code.GDHealthObjects1= [];
gdjs.Level_321Code.GDHealthObjects2= [];
gdjs.Level_321Code.GDHealthObjects3= [];
gdjs.Level_321Code.GDHealthObjects4= [];
gdjs.Level_321Code.GDShortestObjects1= [];
gdjs.Level_321Code.GDShortestObjects2= [];
gdjs.Level_321Code.GDShortestObjects3= [];
gdjs.Level_321Code.GDShortestObjects4= [];
gdjs.Level_321Code.GDLongestObjects1= [];
gdjs.Level_321Code.GDLongestObjects2= [];
gdjs.Level_321Code.GDLongestObjects3= [];
gdjs.Level_321Code.GDLongestObjects4= [];
gdjs.Level_321Code.GDLivesTiledObjects1= [];
gdjs.Level_321Code.GDLivesTiledObjects2= [];
gdjs.Level_321Code.GDLivesTiledObjects3= [];
gdjs.Level_321Code.GDLivesTiledObjects4= [];
gdjs.Level_321Code.GDEmitterBrokenObjects1= [];
gdjs.Level_321Code.GDEmitterBrokenObjects2= [];
gdjs.Level_321Code.GDEmitterBrokenObjects3= [];
gdjs.Level_321Code.GDEmitterBrokenObjects4= [];
gdjs.Level_321Code.GDEmitterBloodObjects1= [];
gdjs.Level_321Code.GDEmitterBloodObjects2= [];
gdjs.Level_321Code.GDEmitterBloodObjects3= [];
gdjs.Level_321Code.GDEmitterBloodObjects4= [];
gdjs.Level_321Code.GDNewSpriteObjects1= [];
gdjs.Level_321Code.GDNewSpriteObjects2= [];
gdjs.Level_321Code.GDNewSpriteObjects3= [];
gdjs.Level_321Code.GDNewSpriteObjects4= [];
gdjs.Level_321Code.GDJoystickObjects1= [];
gdjs.Level_321Code.GDJoystickObjects2= [];
gdjs.Level_321Code.GDJoystickObjects3= [];
gdjs.Level_321Code.GDJoystickObjects4= [];
gdjs.Level_321Code.GDThumbCircleObjects1= [];
gdjs.Level_321Code.GDThumbCircleObjects2= [];
gdjs.Level_321Code.GDThumbCircleObjects3= [];
gdjs.Level_321Code.GDThumbCircleObjects4= [];
gdjs.Level_321Code.GDRestartObjects1= [];
gdjs.Level_321Code.GDRestartObjects2= [];
gdjs.Level_321Code.GDRestartObjects3= [];
gdjs.Level_321Code.GDRestartObjects4= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};
gdjs.Level_321Code.condition3IsTrue_1 = {val:false};
gdjs.Level_321Code.conditionTrue_2 = {val:false};
gdjs.Level_321Code.condition0IsTrue_2 = {val:false};
gdjs.Level_321Code.condition1IsTrue_2 = {val:false};
gdjs.Level_321Code.condition2IsTrue_2 = {val:false};
gdjs.Level_321Code.condition3IsTrue_2 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level_321Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.Level_321Code.GDLivesTiledObjects1);
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.Level_321Code.GDLongestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shortest"), gdjs.Level_321Code.GDShortestObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Gametime");
}{for(var i = 0, len = gdjs.Level_321Code.GDLivesTiledObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLivesTiledObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShortestObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShortestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLongestObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLongestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOverUi");
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBloodObjects1Objects = Hashtable.newFrom({"EmitterBlood": gdjs.Level_321Code.GDEmitterBloodObjects1});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].returnVariable(gdjs.Level_321Code.GDHammerObjects2[i].getVariables().getFromIndex(0)).add(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level_321Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.Level_321Code.GDLivesTiledObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDEmitterBloodObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDLivesTiledObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLivesTiledObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].returnVariable(gdjs.Level_321Code.GDHammerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBloodObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 0, "", 0, 0.2, 0, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "hitHurt.wav", false, 100, 1);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBrokenObjects1Objects = Hashtable.newFrom({"EmitterBroken": gdjs.Level_321Code.GDEmitterBrokenObjects1});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDHammerObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDHammerObjects1[i].getVariables().getFromIndex(0)) >= 3 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDHammerObjects1[k] = gdjs.Level_321Code.GDHammerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects1 */
gdjs.Level_321Code.GDEmitterBrokenObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBrokenObjects1Objects, (( gdjs.Level_321Code.GDHammerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDHammerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDHammerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDHammerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.Level_321Code.GDTimeObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDTimeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDTimeObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2)));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
gdjs.Level_321Code.GDHammerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects, gdjs.random(800), gdjs.random(600), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].setWidth(24);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.randomInRange(1, 10), (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointY("")), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyAngularImpulse(gdjs.randomFloatInRange(0.05, 0.3));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.randomFloatInRange(0.1, 0.5), (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointY("")), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()));
}
}}

}


{

gdjs.Level_321Code.GDHammerObjects2.length = 0;

gdjs.Level_321Code.GDPlayerObjects2.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDHammerObjects2_1final.length = 0;gdjs.Level_321Code.GDPlayerObjects2_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getX() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects3[i].getX() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDHammerObjects3[k] = gdjs.Level_321Code.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects3.length = k;if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDHammerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDHammerObjects2_1final.indexOf(gdjs.Level_321Code.GDHammerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDHammerObjects2_1final.push(gdjs.Level_321Code.GDHammerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects2_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects2_1final.push(gdjs.Level_321Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects3[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDHammerObjects3[k] = gdjs.Level_321Code.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects3.length = k;if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDHammerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDHammerObjects2_1final.indexOf(gdjs.Level_321Code.GDHammerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDHammerObjects2_1final.push(gdjs.Level_321Code.GDHammerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects2_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects2_1final.push(gdjs.Level_321Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDHammerObjects2_1final, gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(gdjs.Level_321Code.GDPlayerObjects2_1final, gdjs.Level_321Code.GDPlayerObjects2);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityX() * (-(1)));
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").getLinearVelocityX() * (-(1)));
}
}}

}


{

gdjs.Level_321Code.GDHammerObjects2.length = 0;

gdjs.Level_321Code.GDPlayerObjects2.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDHammerObjects2_1final.length = 0;gdjs.Level_321Code.GDPlayerObjects2_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getY() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects3[i].getY() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDHammerObjects3[k] = gdjs.Level_321Code.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects3.length = k;if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDHammerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDHammerObjects2_1final.indexOf(gdjs.Level_321Code.GDHammerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDHammerObjects2_1final.push(gdjs.Level_321Code.GDHammerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects2_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects2_1final.push(gdjs.Level_321Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects3[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDHammerObjects3[k] = gdjs.Level_321Code.GDHammerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects3.length = k;if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDHammerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDHammerObjects2_1final.indexOf(gdjs.Level_321Code.GDHammerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDHammerObjects2_1final.push(gdjs.Level_321Code.GDHammerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects2_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects2_1final.push(gdjs.Level_321Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDHammerObjects2_1final, gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(gdjs.Level_321Code.GDPlayerObjects2_1final, gdjs.Level_321Code.GDPlayerObjects2);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityY(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityY() * (-(1)));
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityY(gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").getLinearVelocityY() * (-(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects1[i].getAnimation() != (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDHammerObjects1[i].getVariables().getFromIndex(0))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDHammerObjects1[k] = gdjs.Level_321Code.GDHammerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDHammerObjects1[i].getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.Level_321Code.GDLongestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.Level_321Code.GDLongestObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLongestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Shortest"), gdjs.Level_321Code.GDShortestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.Level_321Code.GDShortestObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShortestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7610492);
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9331244);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-sad-game-over-trombone-471.wav", false, 100, 1);
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2));
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Gametime");
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOverUi");
}
{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects2Objects = Hashtable.newFrom({"ThumbCircle": gdjs.Level_321Code.GDThumbCircleObjects2});
gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0, 0);
}
}}

}


};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDJoystickObjects2, gdjs.Level_321Code.GDJoystickObjects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJoystickObjects3[i].getBehavior("MultitouchJoystick").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJoystickObjects3[k] = gdjs.Level_321Code.GDJoystickObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJoystickObjects3.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJoystickObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Physics2").applyPolarForce((( gdjs.Level_321Code.GDJoystickObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDJoystickObjects3[0].getBehavior("MultitouchJoystick").JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDJoystickObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDJoystickObjects2[i].getBehavior("MultitouchJoystick").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJoystickObjects2[k] = gdjs.Level_321Code.GDJoystickObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJoystickObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects2Objects = Hashtable.newFrom({"ThumbCircle": gdjs.Level_321Code.GDThumbCircleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects1Objects = Hashtable.newFrom({"ThumbCircle": gdjs.Level_321Code.GDThumbCircleObjects1});
gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Level_321Code.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.Level_321Code.GDThumbCircleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDJoystickObjects2[i].getBehavior("MultitouchJoystick").SimulateTouch_Position(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "UI", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "UI", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Level_321Code.GDJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.Level_321Code.GDThumbCircleObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDJoystickObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJoystickObjects1[i].getBehavior("MultitouchJoystick").SimulateTouchEnded(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level_321Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Level_321Code.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("ThumbCircle"), gdjs.Level_321Code.GDThumbCircleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDJoystickObjects2[i].getBehavior("MultitouchJoystick").ActivateJoystick(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDThumbCircleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
gdjs.Level_321Code.condition2IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level_321Code.conditionTrue_2 = gdjs.Level_321Code.condition1IsTrue_1;
gdjs.Level_321Code.condition0IsTrue_2.val = false;
gdjs.Level_321Code.condition1IsTrue_2.val = false;
{
gdjs.Level_321Code.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_2.val ) {
{
gdjs.Level_321Code.condition1IsTrue_2.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}}
gdjs.Level_321Code.conditionTrue_2.val = true && gdjs.Level_321Code.condition0IsTrue_2.val && gdjs.Level_321Code.condition1IsTrue_2.val;
}
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level_321Code.conditionTrue_2 = gdjs.Level_321Code.condition2IsTrue_1;
gdjs.Level_321Code.condition0IsTrue_2.val = false;
gdjs.Level_321Code.condition1IsTrue_2.val = false;
{
gdjs.Level_321Code.condition0IsTrue_2.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 0);
}if ( gdjs.Level_321Code.condition0IsTrue_2.val ) {
{
gdjs.Level_321Code.condition1IsTrue_2.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}}
gdjs.Level_321Code.conditionTrue_2.val = true && gdjs.Level_321Code.condition0IsTrue_2.val && gdjs.Level_321Code.condition1IsTrue_2.val;
}
if( gdjs.Level_321Code.condition2IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.Level_321Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList10(runtimeScene);
}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 0);
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects4.length = 0;
gdjs.Level_321Code.GDHammerObjects1.length = 0;
gdjs.Level_321Code.GDHammerObjects2.length = 0;
gdjs.Level_321Code.GDHammerObjects3.length = 0;
gdjs.Level_321Code.GDHammerObjects4.length = 0;
gdjs.Level_321Code.GDBrownBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBrownBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBrownBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDBrownBackgroundObjects4.length = 0;
gdjs.Level_321Code.GDTimeObjects1.length = 0;
gdjs.Level_321Code.GDTimeObjects2.length = 0;
gdjs.Level_321Code.GDTimeObjects3.length = 0;
gdjs.Level_321Code.GDTimeObjects4.length = 0;
gdjs.Level_321Code.GDHealthObjects1.length = 0;
gdjs.Level_321Code.GDHealthObjects2.length = 0;
gdjs.Level_321Code.GDHealthObjects3.length = 0;
gdjs.Level_321Code.GDHealthObjects4.length = 0;
gdjs.Level_321Code.GDShortestObjects1.length = 0;
gdjs.Level_321Code.GDShortestObjects2.length = 0;
gdjs.Level_321Code.GDShortestObjects3.length = 0;
gdjs.Level_321Code.GDShortestObjects4.length = 0;
gdjs.Level_321Code.GDLongestObjects1.length = 0;
gdjs.Level_321Code.GDLongestObjects2.length = 0;
gdjs.Level_321Code.GDLongestObjects3.length = 0;
gdjs.Level_321Code.GDLongestObjects4.length = 0;
gdjs.Level_321Code.GDLivesTiledObjects1.length = 0;
gdjs.Level_321Code.GDLivesTiledObjects2.length = 0;
gdjs.Level_321Code.GDLivesTiledObjects3.length = 0;
gdjs.Level_321Code.GDLivesTiledObjects4.length = 0;
gdjs.Level_321Code.GDEmitterBrokenObjects1.length = 0;
gdjs.Level_321Code.GDEmitterBrokenObjects2.length = 0;
gdjs.Level_321Code.GDEmitterBrokenObjects3.length = 0;
gdjs.Level_321Code.GDEmitterBrokenObjects4.length = 0;
gdjs.Level_321Code.GDEmitterBloodObjects1.length = 0;
gdjs.Level_321Code.GDEmitterBloodObjects2.length = 0;
gdjs.Level_321Code.GDEmitterBloodObjects3.length = 0;
gdjs.Level_321Code.GDEmitterBloodObjects4.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects4.length = 0;
gdjs.Level_321Code.GDJoystickObjects1.length = 0;
gdjs.Level_321Code.GDJoystickObjects2.length = 0;
gdjs.Level_321Code.GDJoystickObjects3.length = 0;
gdjs.Level_321Code.GDJoystickObjects4.length = 0;
gdjs.Level_321Code.GDThumbCircleObjects1.length = 0;
gdjs.Level_321Code.GDThumbCircleObjects2.length = 0;
gdjs.Level_321Code.GDThumbCircleObjects3.length = 0;
gdjs.Level_321Code.GDThumbCircleObjects4.length = 0;
gdjs.Level_321Code.GDRestartObjects1.length = 0;
gdjs.Level_321Code.GDRestartObjects2.length = 0;
gdjs.Level_321Code.GDRestartObjects3.length = 0;
gdjs.Level_321Code.GDRestartObjects4.length = 0;

gdjs.Level_321Code.eventsList12(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
