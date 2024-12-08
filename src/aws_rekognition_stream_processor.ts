import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRekognitionStreamProcessorArgsDataSharingPreference {
  opt_in: boolean;
}

export interface AwsRekognitionStreamProcessorArgsInputKinesisVideoStream {
  arn: string;
}

export interface AwsRekognitionStreamProcessorArgsInput {
  kinesis_video_stream?: AwsRekognitionStreamProcessorArgsInputKinesisVideoStream[];
}

export interface AwsRekognitionStreamProcessorArgsNotificationChannel {
  sns_topic_arn?: string;
}

export interface AwsRekognitionStreamProcessorArgsOutputKinesisDataStream {
  arn?: string;
}

export interface AwsRekognitionStreamProcessorArgsOutputS3Destination {
  bucket?: string;
  key_prefix?: string;
}

export interface AwsRekognitionStreamProcessorArgsOutput {
  kinesis_data_stream?: AwsRekognitionStreamProcessorArgsOutputKinesisDataStream[];
  s3_destination?: AwsRekognitionStreamProcessorArgsOutputS3Destination[];
}

export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
}

export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestPolygon {
  x?: number;
  y?: number;
}

export interface AwsRekognitionStreamProcessorArgsRegionsOfInterest {
  bounding_box?: AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox;
  polygon?: AwsRekognitionStreamProcessorArgsRegionsOfInterestPolygon[];
}

export interface AwsRekognitionStreamProcessorArgsSettingsConnectedHome {
  labels?: string[];
}

export interface AwsRekognitionStreamProcessorArgsSettingsFaceSearch {
  collection_id: string;
}

export interface AwsRekognitionStreamProcessorArgsSettings {
  connected_home?: AwsRekognitionStreamProcessorArgsSettingsConnectedHome[];
  face_search?: AwsRekognitionStreamProcessorArgsSettingsFaceSearch[];
}

export interface AwsRekognitionStreamProcessorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRekognitionStreamProcessorArgs {
  kms_key_id?: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  data_sharing_preference?: AwsRekognitionStreamProcessorArgsDataSharingPreference[];
  input?: AwsRekognitionStreamProcessorArgsInput[];
  notification_channel?: AwsRekognitionStreamProcessorArgsNotificationChannel[];
  output?: AwsRekognitionStreamProcessorArgsOutput[];
  regions_of_interest?: AwsRekognitionStreamProcessorArgsRegionsOfInterest[];
  settings?: AwsRekognitionStreamProcessorArgsSettings[];
  timeouts?: AwsRekognitionStreamProcessorArgsTimeouts;
}

export class aws_rekognition_stream_processor extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRekognitionStreamProcessorArgs) {
    const meta = {data_sharing_preference:{isBlock:true},input:{isBlock:true,kinesis_video_stream:{isBlock:true}},notification_channel:{isBlock:true},output:{isBlock:true,kinesis_data_stream:{isBlock:true},s3_destination:{isBlock:true}},regions_of_interest:{isBlock:true,bounding_box:{isBlock:true},polygon:{isBlock:true}},settings:{isBlock:true,connected_home:{isBlock:true},face_search:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rekognition_stream_processor", resourceName);
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get stream_processor_arn(): string {
    return `${this.resourceType}.${this.resourceName}.stream_processor_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
