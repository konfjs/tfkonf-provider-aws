import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailContainerServiceArgsPrivateRegistryAccessEcrImagePullerRole {
  is_active?: boolean;
}

export interface AwsLightsailContainerServiceArgsPrivateRegistryAccess {
  ecr_image_puller_role?: AwsLightsailContainerServiceArgsPrivateRegistryAccessEcrImagePullerRole;
}

export interface AwsLightsailContainerServiceArgsPublicDomainNamesCertificate {
  certificate_name: string;
  domain_names: string[];
}

export interface AwsLightsailContainerServiceArgsPublicDomainNames {
  certificate: AwsLightsailContainerServiceArgsPublicDomainNamesCertificate[];
}

export interface AwsLightsailContainerServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLightsailContainerServiceArgs {
  is_disabled?: boolean;
  name: string;
  power: string;
  scale: number;
  tags?: { [key: string]: string };
  private_registry_access?: AwsLightsailContainerServiceArgsPrivateRegistryAccess;
  public_domain_names?: AwsLightsailContainerServiceArgsPublicDomainNames;
  timeouts?: AwsLightsailContainerServiceArgsTimeouts;
}

export class aws_lightsail_container_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailContainerServiceArgs) {
    const meta = {private_registry_access:{isBlock:true,ecr_image_puller_role:{isBlock:true}},public_domain_names:{isBlock:true,certificate:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_container_service", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get power(): string {
    return `${this.resourceType}.${this.resourceName}.power`;
  }

  get power_id(): string {
    return `${this.resourceType}.${this.resourceName}.power_id`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }

  get private_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.private_domain_name`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get scale(): string {
    return `${this.resourceType}.${this.resourceName}.scale`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
