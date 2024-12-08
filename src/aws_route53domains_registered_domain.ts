import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53domainsRegisteredDomainArgsAdminContact {
}

export interface AwsRoute53domainsRegisteredDomainArgsBillingContact {
}

export interface AwsRoute53domainsRegisteredDomainArgsNameServer {
  glue_ips?: string[];
  name: string;
}

export interface AwsRoute53domainsRegisteredDomainArgsRegistrantContact {
}

export interface AwsRoute53domainsRegisteredDomainArgsTechContact {
}

export interface AwsRoute53domainsRegisteredDomainArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsRoute53domainsRegisteredDomainArgs {
  admin_privacy?: boolean;
  auto_renew?: boolean;
  billing_privacy?: boolean;
  domain_name: string;
  registrant_privacy?: boolean;
  tags?: { [key: string]: string };
  tech_privacy?: boolean;
  transfer_lock?: boolean;
  admin_contact?: AwsRoute53domainsRegisteredDomainArgsAdminContact;
  billing_contact?: AwsRoute53domainsRegisteredDomainArgsBillingContact;
  name_server?: AwsRoute53domainsRegisteredDomainArgsNameServer[];
  registrant_contact?: AwsRoute53domainsRegisteredDomainArgsRegistrantContact;
  tech_contact?: AwsRoute53domainsRegisteredDomainArgsTechContact;
  timeouts?: AwsRoute53domainsRegisteredDomainArgsTimeouts;
}

export class aws_route53domains_registered_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53domainsRegisteredDomainArgs) {
    const meta = {admin_contact:{isBlock:true},billing_contact:{isBlock:true},name_server:{isBlock:true},registrant_contact:{isBlock:true},tech_contact:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53domains_registered_domain", resourceName);
  }

  get abuse_contact_email(): string {
    return `${this.resourceType}.${this.resourceName}.abuse_contact_email`;
  }

  get abuse_contact_phone(): string {
    return `${this.resourceType}.${this.resourceName}.abuse_contact_phone`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get expiration_date(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registrar_name(): string {
    return `${this.resourceType}.${this.resourceName}.registrar_name`;
  }

  get registrar_url(): string {
    return `${this.resourceType}.${this.resourceName}.registrar_url`;
  }

  get reseller(): string {
    return `${this.resourceType}.${this.resourceName}.reseller`;
  }

  get status_list(): string {
    return `${this.resourceType}.${this.resourceName}.status_list`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.updated_date`;
  }

  get whois_server(): string {
    return `${this.resourceType}.${this.resourceName}.whois_server`;
  }
}
