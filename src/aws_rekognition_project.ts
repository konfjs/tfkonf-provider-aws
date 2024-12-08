import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRekognitionProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRekognitionProjectArgs {
  feature?: string;
  name: string;
  timeouts?: AwsRekognitionProjectArgsTimeouts;
}

export class aws_rekognition_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRekognitionProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rekognition_project", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_update(): string {
    return `${this.resourceType}.${this.resourceName}.auto_update`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
