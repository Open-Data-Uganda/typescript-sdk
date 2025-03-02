import "@jest/globals";
import axios from "axios";
import { OpenDataUGClient } from "../client";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("OpenDataUGClient", () => {
  let client: OpenDataUGClient;

  beforeEach(() => {
    client = new OpenDataUGClient("test-api-key");
    mockedAxios.create.mockReturnValue(mockedAxios);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Districts", () => {
    it("should fetch all districts", async () => {
      const mockDistricts = {
        data: {
          data: [
            {
              id: "district-1",
              name: "Kampala",
              townStatus: true,
              regionId: "region-1",
              regionName: "Central",
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockDistricts);

      const districts = await client.getDistricts();
      expect(districts).toEqual(mockDistricts.data.data);
      expect(mockedAxios.get).toHaveBeenCalledWith("/districts");
    });

    it("should fetch a specific district", async () => {
      const mockDistrict = {
        data: {
          data: {
            id: "district-1",
            name: "Kampala",
            townStatus: true,
            regionId: "region-1",
            regionName: "Central",
          },
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockDistrict);

      const district = await client.getDistrict("district-1");
      expect(district).toEqual(mockDistrict.data.data);
      expect(mockedAxios.get).toHaveBeenCalledWith("/districts/district-1");
    });
  });

  // Add more test cases for other entities...
});
