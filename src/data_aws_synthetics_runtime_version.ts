import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSyntheticsRuntimeVersionArgs {
  latest?: boolean;
  prefix: string;
  version?: string;
}

export class data_aws_synthetics_runtime_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSyntheticsRuntimeVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_synthetics_runtime_version", resourceName);
  }

  get deprecation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.deprecation_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix`;
  }

  get release_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_date`;
  }

  get version_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_name`;
  }
}
