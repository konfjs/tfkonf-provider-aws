import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFmsResourceSetArgsResourceSet {
  description?: string;
  name: string;
  resource_type_list?: string[];
}

export interface AwsFmsResourceSetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFmsResourceSetArgs {
  tags?: { [key: string]: string };
  resource_set?: AwsFmsResourceSetArgsResourceSet[];
  timeouts?: AwsFmsResourceSetArgsTimeouts;
}

export class aws_fms_resource_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFmsResourceSetArgs) {
    const meta = {resource_set:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fms_resource_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
