import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshMeshArgsSpecEgressFilter {
  type?: string;
}

export interface AwsAppmeshMeshArgsSpecServiceDiscovery {
  ip_preference?: string;
}

export interface AwsAppmeshMeshArgsSpec {
  egress_filter?: AwsAppmeshMeshArgsSpecEgressFilter;
  service_discovery?: AwsAppmeshMeshArgsSpecServiceDiscovery;
}

export interface AwsAppmeshMeshArgs {
  name: string;
  tags?: { [key: string]: string };
  spec?: AwsAppmeshMeshArgsSpec;
}

export class aws_appmesh_mesh extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppmeshMeshArgs) {
    const meta = {spec:{isBlock:true,egress_filter:{isBlock:true},service_discovery:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_mesh", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get mesh_owner(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_owner`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_owner(): string {
    return `${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
