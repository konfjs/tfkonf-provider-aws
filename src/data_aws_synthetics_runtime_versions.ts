import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSyntheticsRuntimeVersionsArgsRuntimeVersions {
}

export interface DataAwsSyntheticsRuntimeVersionsArgs {
  runtime_versions?: DataAwsSyntheticsRuntimeVersionsArgsRuntimeVersions[];
}

export class data_aws_synthetics_runtime_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSyntheticsRuntimeVersionsArgs) {
    const meta = {runtime_versions:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_synthetics_runtime_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
