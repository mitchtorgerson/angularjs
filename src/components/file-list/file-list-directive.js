
import FileListController from "./file-list-controller";

export default class FileListDirective {
    constructor() {
        /*
            TODO:
            I'm opposed to html here.  Setting the templateUrl had route issues that I didn't have time to look into.
            Another few minutes, and I would have all of this in file-list.html
        */

        this.template = '<div class="container-fluid">' +
                '<div class="row">' +
                    '<div class="event-list-view col-md-4">' +
                        '<div class="event-row row" ng-repeat="event in ctrl.listData | orderBy:\'ext_info.create_timestamp\'" ng-click="ctrl.selectEvent($index)">' +
                            '<div class="event-date col-md-3">' +
                                '<div>{{ctrl.createDateFromString(event.ext_info.create_timestamp) | date:\'MM/dd/yyyy\'}}</div>' +
                                '<div>{{ctrl.createDateFromString(event.ext_info.create_timestamp) | date:\'h:mma\'}}</div>' +
                            '</div>' +
                            '<div class="col-md-9">' +
                                '<div class="row">' +
                                    '<div class="text-right col-md-12 file-name">{{ctrl.getOnlyFileName(event.filename)}}</div>' +
                                '</div>' +
                                '<div class="row">' +
                                    '<div class="text-right col-md-12 file-path">{{event.abs_path}}</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-md-8 properties-container">' +
                        '<div ng-if="ctrl.isEventSelected(ctrl.eventIdx)">' +
                            '<div class="header">PATH</div>' +
                            '<div class="row property-display">' +
                                '<div class="col-md-12">{{ctrl.selectedEvent.abs_path}}</div>' +
                            '</div>' +
                            '<div class="header">EXT INFO</div>' +
                            '<div class="row property-display">' +
                                '<div class="col-md-12">' +
                                    '<div class="row" ng-repeat="(name, value) in ctrl.selectedEvent.ext_info">' +
                                        '<div class="col-md-2">{{name}}</div>' +
                                        '<div class="col-md-10">{{value}}</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="header">FILE ATTRIBUTES</div>' +
                            '<div class="row property-display">' +
                                '<div class="col-md-12">' +
                                    '<div class="row" ng-repeat="attr in ctrl.selectedEvent.file_attributes">' +
                                        '<div class="col-md-12">{{attr}}</div>' +
                                    '</div>' +
                                    '<div ng-if="!ctrl.selectedEvent.file_attributes.length">N/A</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="header">IO STATUS</div>' +
                            '<div class="row property-display">' +
                                '<div class="col-md-12">' +
                                    '<div class="row" ng-repeat="status in ctrl.selectedEvent.iostatus">' +
                                        '<div class="col-md-12">{{status}}</div>' +
                                    '</div>' +
                                    '<div ng-if="!ctrl.selectedEvent.iostatus.length">N/A</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.restrict = 'E';
        this.scope = {
            listData: '=',
        };

        this.controller = FileListController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }
}
