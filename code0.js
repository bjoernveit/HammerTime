gdjs.Level_321Code = {};
gdjs.Level_321Code.GDHammerObjects2_1final = [];

gdjs.Level_321Code.GDKnightMaleObjects2_1final = [];

gdjs.Level_321Code.GDKnightMaleObjects1= [];
gdjs.Level_321Code.GDKnightMaleObjects2= [];
gdjs.Level_321Code.GDKnightMaleObjects3= [];
gdjs.Level_321Code.GDKnightMaleObjects4= [];
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

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level_321Code.GDHealthObjects2);
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.Level_321Code.GDLivesTiledObjects2);
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.Level_321Code.GDLongestObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shortest"), gdjs.Level_321Code.GDShortestObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDHealthObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthObjects2[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Gametime");
}{for(var i = 0, len = gdjs.Level_321Code.GDLivesTiledObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLivesTiledObjects2[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShortestObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShortestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLongestObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLongestObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDKnightMaleObjects2Objects = Hashtable.newFrom({"KnightMale": gdjs.Level_321Code.GDKnightMaleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBloodObjects2Objects = Hashtable.newFrom({"EmitterBlood": gdjs.Level_321Code.GDEmitterBloodObjects2});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


{
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects1});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDKnightMaleObjects2Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level_321Code.GDHealthObjects2);
/* Reuse gdjs.Level_321Code.GDKnightMaleObjects2 */
gdjs.copyArray(runtimeScene.getObjects("LivesTiled"), gdjs.Level_321Code.GDLivesTiledObjects2);
gdjs.Level_321Code.GDEmitterBloodObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDHealthObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthObjects2[i].setString("Health: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDLivesTiledObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLivesTiledObjects2[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 32);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].returnVariable(gdjs.Level_321Code.GDHammerObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBloodObjects2Objects, (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointY("")), "");
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects1Objects, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects1[i].returnVariable(gdjs.Level_321Code.GDHammerObjects1[i].getVariables().getFromIndex(0)).add(2);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects = Hashtable.newFrom({"Hammer": gdjs.Level_321Code.GDHammerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBrokenObjects2Objects = Hashtable.newFrom({"EmitterBroken": gdjs.Level_321Code.GDEmitterBrokenObjects2});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDHammerObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDHammerObjects2[i].getVariables().getFromIndex(0)) >= 3 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDHammerObjects2[k] = gdjs.Level_321Code.GDHammerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
gdjs.Level_321Code.GDEmitterBrokenObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEmitterBrokenObjects2Objects, (( gdjs.Level_321Code.GDHammerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDHammerObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDHammerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDHammerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
gdjs.Level_321Code.GDHammerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHammerObjects2Objects, gdjs.random(800), gdjs.random(600), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].setWidth(24);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.randomInRange(1, 10), (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointY("")), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyAngularImpulse(gdjs.randomFloatInRange(0.05, 0.3));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.randomFloatInRange(0.1, 0.5), (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDKnightMaleObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightMaleObjects2[0].getPointY("")), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()), (gdjs.Level_321Code.GDHammerObjects2[i].getCenterXInScene()));
}
}}

}


{

gdjs.Level_321Code.GDHammerObjects2.length = 0;

gdjs.Level_321Code.GDKnightMaleObjects2.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDHammerObjects2_1final.length = 0;gdjs.Level_321Code.GDKnightMaleObjects2_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightMaleObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightMaleObjects3[i].getX() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDKnightMaleObjects3[k] = gdjs.Level_321Code.GDKnightMaleObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightMaleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
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
    for(var j = 0, jLen = gdjs.Level_321Code.GDKnightMaleObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDKnightMaleObjects2_1final.indexOf(gdjs.Level_321Code.GDKnightMaleObjects3[j]) === -1 )
            gdjs.Level_321Code.GDKnightMaleObjects2_1final.push(gdjs.Level_321Code.GDKnightMaleObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightMaleObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightMaleObjects3[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDKnightMaleObjects3[k] = gdjs.Level_321Code.GDKnightMaleObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightMaleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
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
    for(var j = 0, jLen = gdjs.Level_321Code.GDKnightMaleObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDKnightMaleObjects2_1final.indexOf(gdjs.Level_321Code.GDKnightMaleObjects3[j]) === -1 )
            gdjs.Level_321Code.GDKnightMaleObjects2_1final.push(gdjs.Level_321Code.GDKnightMaleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDHammerObjects2_1final, gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(gdjs.Level_321Code.GDKnightMaleObjects2_1final, gdjs.Level_321Code.GDKnightMaleObjects2);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
/* Reuse gdjs.Level_321Code.GDKnightMaleObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").getLinearVelocityX() * (-(1)));
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").getLinearVelocityX() * (-(1)));
}
}}

}


{

gdjs.Level_321Code.GDHammerObjects2.length = 0;

gdjs.Level_321Code.GDKnightMaleObjects2.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDHammerObjects2_1final.length = 0;gdjs.Level_321Code.GDKnightMaleObjects2_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightMaleObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightMaleObjects3[i].getY() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDKnightMaleObjects3[k] = gdjs.Level_321Code.GDKnightMaleObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightMaleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
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
    for(var j = 0, jLen = gdjs.Level_321Code.GDKnightMaleObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDKnightMaleObjects2_1final.indexOf(gdjs.Level_321Code.GDKnightMaleObjects3[j]) === -1 )
            gdjs.Level_321Code.GDKnightMaleObjects2_1final.push(gdjs.Level_321Code.GDKnightMaleObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects3);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects3);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightMaleObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightMaleObjects3[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDKnightMaleObjects3[k] = gdjs.Level_321Code.GDKnightMaleObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightMaleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects3.length;i<l;++i) {
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
    for(var j = 0, jLen = gdjs.Level_321Code.GDKnightMaleObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDKnightMaleObjects2_1final.indexOf(gdjs.Level_321Code.GDKnightMaleObjects3[j]) === -1 )
            gdjs.Level_321Code.GDKnightMaleObjects2_1final.push(gdjs.Level_321Code.GDKnightMaleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDHammerObjects2_1final, gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(gdjs.Level_321Code.GDKnightMaleObjects2_1final, gdjs.Level_321Code.GDKnightMaleObjects2);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
/* Reuse gdjs.Level_321Code.GDKnightMaleObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").setLinearVelocityY(gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").getLinearVelocityY() * (-(1)));
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityY(gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").getLinearVelocityY() * (-(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHammerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHammerObjects2[i].getAnimation() != (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDHammerObjects2[i].getVariables().getFromIndex(0))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDHammerObjects2[k] = gdjs.Level_321Code.GDHammerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHammerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHammerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDHammerObjects2[i].getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.Level_321Code.GDTimeObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDTimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTimeObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2)));
}
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Longest"), gdjs.Level_321Code.GDLongestObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.Level_321Code.GDLongestObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDLongestObjects3[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
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


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hammer"), gdjs.Level_321Code.GDHammerObjects2);
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Gametime"), 2));
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Gametime");
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").setAngularVelocity(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDHammerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHammerObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}
{ //Subevents
gdjs.Level_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0);
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
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").applyForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
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
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0, 0);
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
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.Level_321Code.GDKnightMaleObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightMaleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightMaleObjects2[i].getBehavior("Physics2").applyForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * -(1), 0, 0, 0);
}
}}

}


{


{
}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{



}


{


{

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Level_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDKnightMaleObjects1.length = 0;
gdjs.Level_321Code.GDKnightMaleObjects2.length = 0;
gdjs.Level_321Code.GDKnightMaleObjects3.length = 0;
gdjs.Level_321Code.GDKnightMaleObjects4.length = 0;
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

gdjs.Level_321Code.eventsList8(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
