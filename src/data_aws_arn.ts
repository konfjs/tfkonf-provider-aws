import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsArnArgs {
  arn: string;
}

export class data_aws_arn extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsArnArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_arn", resourceName);
  }

  get account(): string {
    return `data.${this.resourceType}.${this.resourceName}.account`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get partition(): string {
    return `data.${this.resourceType}.${this.resourceName}.partition`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get resource(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }
}
