import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRekognitionCollectionArgsTimeouts {
  create?: string;
}

export interface AwsRekognitionCollectionArgs {
  collection_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRekognitionCollectionArgsTimeouts;
}

export class aws_rekognition_collection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRekognitionCollectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rekognition_collection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get collection_id(): string {
    return `${this.resourceType}.${this.resourceName}.collection_id`;
  }

  get face_model_version(): string {
    return `${this.resourceType}.${this.resourceName}.face_model_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
