import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchPackageAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsOpensearchPackageAssociationArgs {
  domain_name: string;
  package_id: string;
  timeouts?: AwsOpensearchPackageAssociationArgsTimeouts;
}

export class aws_opensearch_package_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchPackageAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_package_association", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get package_id(): string {
    return `${this.resourceType}.${this.resourceName}.package_id`;
  }

  get reference_path(): string {
    return `${this.resourceType}.${this.resourceName}.reference_path`;
  }
}
