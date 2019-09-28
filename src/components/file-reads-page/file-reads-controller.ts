import { ApiClientService } from '../api-client/api-client.service';

export class FileReadsPageController implements ng.IComponentController {

  public fileReads: any;
  public lastLoaded?: Date;
  public errorMsg?: string;
  private llApiClient: ApiClientService;

  constructor(llApiClient: ApiClientService) {
    'ngInject';

    this.llApiClient = llApiClient;
    this.fileReads = [];
    this.errorMsg = '';
    this.lastLoaded = undefined;
  }

  public $onInit(): ng.IPromise<void> {
    /**
     * Normally $onInit shouldn't return any value, but this ends up being very
     * useful for testing.
     */
    return this.loadFileReads();
  }

  private loadFileReads() {
    return this.llApiClient
      .getFileReads()
      .then((fileReads) => {
        this.fileReads = fileReads;
        this.lastLoaded = new Date();
      }, (error) => {
          this.errorMsg = error.error;
      });
  }
}
