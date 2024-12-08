import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus {
  revoked_status_action?: string;
  unknown_status_action?: string;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestination {
  address_definition: string;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts {
  from_port: number;
  to_port: number;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSource {
  address_definition: string;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts {
  from_port: number;
  to_port: number;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScope {
  protocols: number[];
  destination?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[];
  destination_ports?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[];
  source?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSource[];
  source_ports?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[];
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
  resource_arn?: string;
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfiguration {
  certificate_authority_arn?: string;
  check_certificate_revocation_status?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[];
  scope?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationScope[];
  server_certificate?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[];
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfiguration {
  server_certificate_configuration?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfigurationServerCertificateConfiguration[];
}

export interface AwsNetworkfirewallTlsInspectionConfigurationArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNetworkfirewallTlsInspectionConfigurationArgsTimeouts;
  tls_inspection_configuration?: AwsNetworkfirewallTlsInspectionConfigurationArgsTlsInspectionConfiguration[];
}

export class aws_networkfirewall_tls_inspection_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkfirewallTlsInspectionConfigurationArgs) {
    const meta = {timeouts:{isBlock:true},tls_inspection_configuration:{isBlock:true,server_certificate_configuration:{isBlock:true,check_certificate_revocation_status:{isBlock:true},scope:{isBlock:true,destination:{isBlock:true},destination_ports:{isBlock:true},source:{isBlock:true},source_ports:{isBlock:true}},server_certificate:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_networkfirewall_tls_inspection_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_authority(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_authority`;
  }

  get certificates(): string {
    return `${this.resourceType}.${this.resourceName}.certificates`;
  }

  get encryption_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_configuration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get number_of_associations(): string {
    return `${this.resourceType}.${this.resourceName}.number_of_associations`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tls_inspection_configuration_id(): string {
    return `${this.resourceType}.${this.resourceName}.tls_inspection_configuration_id`;
  }

  get update_token(): string {
    return `${this.resourceType}.${this.resourceName}.update_token`;
  }
}
