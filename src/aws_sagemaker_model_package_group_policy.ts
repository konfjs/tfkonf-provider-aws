import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerModelPackageGroupPolicyArgs {
  model_package_group_name: string;
  resource_policy: string;
}

export class aws_sagemaker_model_package_group_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerModelPackageGroupPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_model_package_group_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get model_package_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.model_package_group_name`;
  }

  get resource_policy(): string {
    return `${this.resourceType}.${this.resourceName}.resource_policy`;
  }
}
