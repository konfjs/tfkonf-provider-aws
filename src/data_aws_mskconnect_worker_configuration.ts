import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskconnectWorkerConfigurationArgs {
  name: string;
}

export class data_aws_mskconnect_worker_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMskconnectWorkerConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mskconnect_worker_configuration", resourceName);
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

  get latest_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get properties_file_content(): string {
    return `data.${this.resourceType}.${this.resourceName}.properties_file_content`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
