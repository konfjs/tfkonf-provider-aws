import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamServiceLinkedRoleArgs {
  aws_service_name: string;
  custom_suffix?: string;
  description?: string;
  tags?: { [key: string]: string };
}

export class aws_iam_service_linked_role extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamServiceLinkedRoleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_service_linked_role", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_service_name(): string {
    return `${this.resourceType}.${this.resourceName}.aws_service_name`;
  }

  get create_date(): string {
    return `${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `${this.resourceType}.${this.resourceName}.path`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
