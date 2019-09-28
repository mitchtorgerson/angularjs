import { ApiClientService } from '../api-client/api-client.service';

export class FileWritesPageController implements ng.IComponentController {

  public fileWrites: any;
  public lastLoaded?: Date;
  private llApiClient: ApiClientService;

  constructor(llApiClient: ApiClientService) {
    'ngInject';

    this.llApiClient = llApiClient;
    this.fileWrites = [];
    this.lastLoaded = undefined;
  }

  public $onInit(): ng.IPromise<void> {
    /**
     * Normally $onInit shouldn't return any value, but this ends up being very
     * useful for testing.
     */
    return this.loadFileWrites();
  }

  private loadFileWrites() {
    return this.llApiClient
      .getFileWrites()
      .then((fileWrites) => {
        this.fileWrites = fileWrites;
        this.lastLoaded = new Date();
      });
  }
}
