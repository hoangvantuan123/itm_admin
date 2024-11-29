import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('_TCAUser_WEB')
export class TCAUserWEB {

    @Column({ type: 'int', nullable: true })
    CompanySeq: number | null;

    @PrimaryColumn({ type: 'int' })
    UserSeq: number;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    UserId: string | null;

    @Column({ type: 'int' })
    UserType: number;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    UserName: string | null;

    @Column({ type: 'int', nullable: true })
    EmpSeq: number | null;

    @Column({ type: 'nvarchar', nullable: true })
    LoginPwd: string | null;

    @Column({ type: 'nvarchar',  nullable: true })
    Password1: string | null;

    @Column({ type: 'nvarchar',  nullable: true })
    Password2: string | null;

    @Column({ type: 'nvarchar',  nullable: true })
    Password3: string | null;

    @Column({ type: 'int', nullable: true })
    CustSeq: number | null;

    @Column({ type: 'int', nullable: true })
    DeptSeq: number | null;

    @Column({ type: 'int', nullable: true })
    UserSecu: number | null;

    @Column({ type: 'int', nullable: true })
    LoginStatus: number | null;

    @Column({ type: 'nvarchar', length: 8, nullable: true })
    LoginDate: string | null;

    @Column({ type: 'nvarchar', length: 8, nullable: true })
    PwdChgDate: string | null;

    @Column({ type: 'nvarchar', length: 2000, nullable: true })
    PassHis: string | null;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    PwdMailAdder: string | null;

    @Column({ type: 'int', nullable: true })
    LoginFailCnt: number | null;

    @Column({ type: 'nchar', length: 1, nullable: true })
    PwdType: string | null;

    @Column({ type: 'int', nullable: true })
    LoginType: number | null;

    @Column({ type: 'int', nullable: true })
    ManagementType: number | null;

    @Column({ type: 'int', nullable: true })
    LastUserSeq: number | null;

    @Column({ type: 'datetime', nullable: true })
    LastDateTime: Date | null;

    @Column({ type: 'nvarchar', length: 20, nullable: true })
    Dsn: string | null;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    Remark: string | null;

    @Column({ type: 'nvarchar', length: 8, nullable: true })
    UserlimitDate: string | null;

    @Column({ type: 'datetime', nullable: true })
    LoginFailFirstTime: Date | null;

    @Column({ type: 'int', nullable: true })
    IsLayoutAdmin: number | null;

    @Column({ type: 'nvarchar', length: 1, nullable: true })
    IsGroupWareUser: string | null;

    @Column({ type: 'int', nullable: true })
    SMUserType: number | null;

    @Column({ type: 'int', nullable: true })
    LicenseType: number | null;
}
