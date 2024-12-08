import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskconnectWorkerConfigurationArgsTimeouts {
  delete?: string;
}

export interface AwsMskconnectWorkerConfigurationArgs {
  description?: string;
  name: string;
  properties_file_content: string;
  tags?: { [key: string]: string };
  timeouts?: AwsMskconnectWorkerConfigurationArgsTimeouts;
}

export class aws_mskconnect_worker_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskconnectWorkerConfigurationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_mskconnect_worker_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get properties_file_content(): string {
    return `${this.resourceType}.${this.resourceName}.properties_file_content`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
