import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyWebhookArgs {
  app_id: string;
  branch_name: string;
  description?: string;
}

export class aws_amplify_webhook extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAmplifyWebhookArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_amplify_webhook", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get branch_name(): string {
    return `${this.resourceType}.${this.resourceName}.branch_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
