import { TestBed } from "@angular/core/testing";

import { APILoaderService } from "./api-loader.service";

describe("ApiLoaderService", () => {
  let service: APILoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APILoaderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
