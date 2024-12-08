import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyBackendEnvironmentArgs {
  app_id: string;
  environment_name: string;
}

export class aws_amplify_backend_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAmplifyBackendEnvironmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_amplify_backend_environment", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deployment_artifacts(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_artifacts`;
  }

  get environment_name(): string {
    return `${this.resourceType}.${this.resourceName}.environment_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stack_name(): string {
    return `${this.resourceType}.${this.resourceName}.stack_name`;
  }
}
