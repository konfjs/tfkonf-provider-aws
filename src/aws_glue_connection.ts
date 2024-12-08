import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueConnectionArgsPhysicalConnectionRequirements {
  availability_zone?: string;
  security_group_id_list?: string[];
  subnet_id?: string;
}

export interface AwsGlueConnectionArgs {
  connection_properties?: { [key: string]: string };
  connection_type?: string;
  description?: string;
  match_criteria?: string[];
  name: string;
  tags?: { [key: string]: string };
  physical_connection_requirements?: AwsGlueConnectionArgsPhysicalConnectionRequirements;
}

export class aws_glue_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueConnectionArgs) {
    const meta = {physical_connection_requirements:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
