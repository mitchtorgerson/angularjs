export default class FileListController implements ng.IComponentController {
    private listData: any | undefined;
    private eventIdx: number | undefined;
    private selectedEvent: object | undefined;

    public renderListData () {
      // return this.listData;
    }

    public createDateFromString (date: string) {
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
          return '';
        } else {
            return dateObj;
        }
    }

    public getOnlyFileName (filename: string) {
        const fileNameArray = filename.split('\\');
        return fileNameArray.pop();
    }

    public isEventSelected (eventIdx: number) {
        if (eventIdx > -1) {
            return true;
        } else if (!eventIdx) {
          return false;
        }
    }

    public selectEvent (idx: number) {
        this.eventIdx = idx;
        this.selectedEvent = this.listData[idx];
    }
}
