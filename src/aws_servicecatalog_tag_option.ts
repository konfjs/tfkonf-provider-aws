import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogTagOptionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogTagOptionArgs {
  active?: boolean;
  key: string;
  value: string;
  timeouts?: AwsServicecatalogTagOptionArgsTimeouts;
}

export class aws_servicecatalog_tag_option extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicecatalogTagOptionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_tag_option", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
