/**
 *  This method creates an object composed of the own and inherited enumerable properties of object
 *  that are not omitted.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['angular'], function(angular) {
    var isObject = angular.isObject;
    var isArray = angular.isArray;
    var isString = angular.isString;

    var clone = function(obj) {
        if (typeof obj !== 'object' || !obj) {
            return obj;
        }
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    };

    var omit = function(obj, keys) {
        if (!isObject(obj)) {
            return obj;
        }
        if (isArray(keys) && keys.length === 0) {
            return obj;
        }
        if (isString(keys) && !keys) {
            return obj;
        }
        if (!isString(keys) && !isArray(keys)) {
            return obj;
        }
        var o = clone(obj);
        keys.forEach(function(key) {
            delete o[key];
        });
        return o;
    };

    return omit;
});
