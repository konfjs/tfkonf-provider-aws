import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskconnectConnectorArgs {
  name: string;
}

export class data_aws_mskconnect_connector extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMskconnectConnectorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mskconnect_connector", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
