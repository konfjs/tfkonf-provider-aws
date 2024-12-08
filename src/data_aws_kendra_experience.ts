import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKendraExperienceArgs {
  experience_id: string;
  index_id: string;
}

export class data_aws_kendra_experience extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKendraExperienceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kendra_experience", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoints(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get error_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.error_message`;
  }

  get experience_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.experience_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
