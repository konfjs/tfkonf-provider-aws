import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateSds {
  secret_name: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificate {
  file?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateFile;
  sds?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  certificate_authority_arns: string[];
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  certificate_chain: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  secret_name: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrust {
  acm?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  file?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  sds?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidation {
  subject_alternative_names?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificate;
  validation: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidation;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicy {
  tls?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTls;
}

export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaults {
  client_policy?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicy;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolGrpc {
  max_requests: number;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp {
  max_connections: number;
  max_pending_requests?: number;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp2 {
  max_requests: number;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPool {
  grpc?: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolGrpc;
  http?: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp;
  http2?: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp2;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerHealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerPortMapping {
  port: number;
  protocol: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateAcm {
  certificate_arn: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateSds {
  secret_name: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificate {
  acm?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateAcm;
  file?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateFile;
  sds?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateSds;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustFile {
  certificate_chain: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustSds {
  secret_name: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrust {
  file?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustFile;
  sds?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustSds;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidation {
  subject_alternative_names?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrust;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListenerTls {
  mode: string;
  certificate: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificate;
  validation?: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidation;
}

export interface AwsAppmeshVirtualGatewayArgsSpecListener {
  connection_pool?: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPool;
  health_check?: AwsAppmeshVirtualGatewayArgsSpecListenerHealthCheck;
  port_mapping: AwsAppmeshVirtualGatewayArgsSpecListenerPortMapping;
  tls?: AwsAppmeshVirtualGatewayArgsSpecListenerTls;
}

export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormatJson {
  key: string;
  value: string;
}

export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormat {
  text?: string;
  json?: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormatJson[];
}

export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFile {
  path: string;
  format?: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormat;
}

export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLog {
  file?: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFile;
}

export interface AwsAppmeshVirtualGatewayArgsSpecLogging {
  access_log?: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLog;
}

export interface AwsAppmeshVirtualGatewayArgsSpec {
  backend_defaults?: AwsAppmeshVirtualGatewayArgsSpecBackendDefaults;
  listener: AwsAppmeshVirtualGatewayArgsSpecListener[];
  logging?: AwsAppmeshVirtualGatewayArgsSpecLogging;
}

export interface AwsAppmeshVirtualGatewayArgs {
  mesh_name: string;
  name: string;
  tags?: { [key: string]: string };
  spec: AwsAppmeshVirtualGatewayArgsSpec;
}

export class aws_appmesh_virtual_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualGatewayArgs) {
    const meta = {spec:{isBlock:true,backend_defaults:{isBlock:true,client_policy:{isBlock:true,tls:{isBlock:true,certificate:{isBlock:true,file:{isBlock:true},sds:{isBlock:true}},validation:{isBlock:true,subject_alternative_names:{isBlock:true,match:{isBlock:true}},trust:{isBlock:true,acm:{isBlock:true},file:{isBlock:true},sds:{isBlock:true}}}}}},listener:{isBlock:true,connection_pool:{isBlock:true,grpc:{isBlock:true},http:{isBlock:true},http2:{isBlock:true}},health_check:{isBlock:true},port_mapping:{isBlock:true},tls:{isBlock:true,certificate:{isBlock:true,acm:{isBlock:true},file:{isBlock:true},sds:{isBlock:true}},validation:{isBlock:true,subject_alternative_names:{isBlock:true,match:{isBlock:true}},trust:{isBlock:true,file:{isBlock:true},sds:{isBlock:true}}}}},logging:{isBlock:true,access_log:{isBlock:true,file:{isBlock:true,format:{isBlock:true,json:{isBlock:true}}}}}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_virtual_gateway", resourceName);
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

  get mesh_name(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_name`;
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
