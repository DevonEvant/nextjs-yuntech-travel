// types/scenicSpot.ts
interface Position {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}

interface ParkingPosition {
  PositionLon?: number;
  PositionLat?: number;
  GeoHash?: string;
}

interface Picture {
  PictureUrl1: string;
  PictureDescription1: string;
  PictureUrl2?: string;
  PictureDescription2?: string;
  PictureUrl3?: string;
  PictureDescription3?: string;
}

export interface ScenicSpot {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Description: string;
  Phone: string;
  Address: string;
  ZipCode: string;
  TravelInfo: string;
  OpenTime: string;
  Picture: Picture;
  MapUrl: string;
  Position: Position;
  Class3: string;
  ParkingInfo: string;
  ParkingPosition: ParkingPosition;
  TicketInfo: string;
  Keyword: string;
  City: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}

//! 這個檔案結構為什麼會是這樣
// interface ScenicSpot {
//     ScenicSpotID: string;
//     ScenicSpotName: string;
//     DescriptionDetail: string;
//     Description: string;
//     Phone: string;
//     Address: string;
//     ZipCode: string;
//     TravelInfo: string;
//     OpenTime: string;
//     Picture: {
//         PictureUrl1: string;
//         PictureDescription1: string;
//         PictureUrl2?: string;
//         PictureDescription2?: string;
//         PictureUrl3?: string;
//         PictureDescription3?: string;
//     };
//     MapUrl: string;
//     Position: {
//         PositionLon: number;
//         PositionLat: number;
//         GeoHash: string;
//     };
//     Class3: string;
//     ParkingInfo: string;
//     ParkingPosition: {
//         PositionLon?: number;
//         PositionLat?: number;
//         GeoHash?: string;
//     };
//     TicketInfo: string;
//     Keyword: string;
//     City: string;
//     SrcUpdateTime: string;
//     UpdateTime: string;
// }
