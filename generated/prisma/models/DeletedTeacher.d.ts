import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DeletedTeacherModel = runtime.Types.Result.DefaultSelection<Prisma.$DeletedTeacherPayload>;
export type AggregateDeletedTeacher = {
    _count: DeletedTeacherCountAggregateOutputType | null;
    _min: DeletedTeacherMinAggregateOutputType | null;
    _max: DeletedTeacherMaxAggregateOutputType | null;
};
export type DeletedTeacherMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    deletedBy: string | null;
    reason: string | null;
    deletedAt: Date | null;
    restoreAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeletedTeacherMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    deletedBy: string | null;
    reason: string | null;
    deletedAt: Date | null;
    restoreAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeletedTeacherCountAggregateOutputType = {
    id: number;
    teacherId: number;
    deletedBy: number;
    reason: number;
    deletedAt: number;
    restoreAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DeletedTeacherMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    deletedBy?: true;
    reason?: true;
    deletedAt?: true;
    restoreAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeletedTeacherMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    deletedBy?: true;
    reason?: true;
    deletedAt?: true;
    restoreAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeletedTeacherCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    deletedBy?: true;
    reason?: true;
    deletedAt?: true;
    restoreAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeletedTeacherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeletedTeacherWhereInput;
    orderBy?: Prisma.DeletedTeacherOrderByWithRelationInput | Prisma.DeletedTeacherOrderByWithRelationInput[];
    cursor?: Prisma.DeletedTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeletedTeacherCountAggregateInputType;
    _min?: DeletedTeacherMinAggregateInputType;
    _max?: DeletedTeacherMaxAggregateInputType;
};
export type GetDeletedTeacherAggregateType<T extends DeletedTeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateDeletedTeacher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeletedTeacher[P]> : Prisma.GetScalarType<T[P], AggregateDeletedTeacher[P]>;
};
export type DeletedTeacherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeletedTeacherWhereInput;
    orderBy?: Prisma.DeletedTeacherOrderByWithAggregationInput | Prisma.DeletedTeacherOrderByWithAggregationInput[];
    by: Prisma.DeletedTeacherScalarFieldEnum[] | Prisma.DeletedTeacherScalarFieldEnum;
    having?: Prisma.DeletedTeacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeletedTeacherCountAggregateInputType | true;
    _min?: DeletedTeacherMinAggregateInputType;
    _max?: DeletedTeacherMaxAggregateInputType;
};
export type DeletedTeacherGroupByOutputType = {
    id: string;
    teacherId: string;
    deletedBy: string;
    reason: string;
    deletedAt: Date;
    restoreAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DeletedTeacherCountAggregateOutputType | null;
    _min: DeletedTeacherMinAggregateOutputType | null;
    _max: DeletedTeacherMaxAggregateOutputType | null;
};
type GetDeletedTeacherGroupByPayload<T extends DeletedTeacherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeletedTeacherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeletedTeacherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeletedTeacherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeletedTeacherGroupByOutputType[P]>;
}>>;
export type DeletedTeacherWhereInput = {
    AND?: Prisma.DeletedTeacherWhereInput | Prisma.DeletedTeacherWhereInput[];
    OR?: Prisma.DeletedTeacherWhereInput[];
    NOT?: Prisma.DeletedTeacherWhereInput | Prisma.DeletedTeacherWhereInput[];
    id?: Prisma.StringFilter<"DeletedTeacher"> | string;
    teacherId?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedBy?: Prisma.StringFilter<"DeletedTeacher"> | string;
    reason?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    restoreAt?: Prisma.DateTimeNullableFilter<"DeletedTeacher"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
};
export type DeletedTeacherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    restoreAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type DeletedTeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeletedTeacherWhereInput | Prisma.DeletedTeacherWhereInput[];
    OR?: Prisma.DeletedTeacherWhereInput[];
    NOT?: Prisma.DeletedTeacherWhereInput | Prisma.DeletedTeacherWhereInput[];
    teacherId?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedBy?: Prisma.StringFilter<"DeletedTeacher"> | string;
    reason?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    restoreAt?: Prisma.DateTimeNullableFilter<"DeletedTeacher"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
}, "id">;
export type DeletedTeacherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    restoreAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeletedTeacherCountOrderByAggregateInput;
    _max?: Prisma.DeletedTeacherMaxOrderByAggregateInput;
    _min?: Prisma.DeletedTeacherMinOrderByAggregateInput;
};
export type DeletedTeacherScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeletedTeacherScalarWhereWithAggregatesInput | Prisma.DeletedTeacherScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeletedTeacherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeletedTeacherScalarWhereWithAggregatesInput | Prisma.DeletedTeacherScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeletedTeacher"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"DeletedTeacher"> | string;
    deletedBy?: Prisma.StringWithAggregatesFilter<"DeletedTeacher"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"DeletedTeacher"> | string;
    deletedAt?: Prisma.DateTimeWithAggregatesFilter<"DeletedTeacher"> | Date | string;
    restoreAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DeletedTeacher"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeletedTeacher"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DeletedTeacher"> | Date | string;
};
export type DeletedTeacherCreateInput = {
    id?: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher: Prisma.TeacherCreateNestedOneWithoutDeletedTeacherInput;
};
export type DeletedTeacherUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeletedTeacherUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutDeletedTeacherNestedInput;
};
export type DeletedTeacherUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherCreateManyInput = {
    id?: string;
    teacherId: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeletedTeacherUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherListRelationFilter = {
    every?: Prisma.DeletedTeacherWhereInput;
    some?: Prisma.DeletedTeacherWhereInput;
    none?: Prisma.DeletedTeacherWhereInput;
};
export type DeletedTeacherOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeletedTeacherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    restoreAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeletedTeacherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    restoreAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeletedTeacherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    restoreAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeletedTeacherCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput> | Prisma.DeletedTeacherCreateWithoutTeacherInput[] | Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput | Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.DeletedTeacherCreateManyTeacherInputEnvelope;
    connect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
};
export type DeletedTeacherUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput> | Prisma.DeletedTeacherCreateWithoutTeacherInput[] | Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput | Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.DeletedTeacherCreateManyTeacherInputEnvelope;
    connect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
};
export type DeletedTeacherUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput> | Prisma.DeletedTeacherCreateWithoutTeacherInput[] | Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput | Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.DeletedTeacherUpsertWithWhereUniqueWithoutTeacherInput | Prisma.DeletedTeacherUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.DeletedTeacherCreateManyTeacherInputEnvelope;
    set?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    disconnect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    delete?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    connect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    update?: Prisma.DeletedTeacherUpdateWithWhereUniqueWithoutTeacherInput | Prisma.DeletedTeacherUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.DeletedTeacherUpdateManyWithWhereWithoutTeacherInput | Prisma.DeletedTeacherUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.DeletedTeacherScalarWhereInput | Prisma.DeletedTeacherScalarWhereInput[];
};
export type DeletedTeacherUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput> | Prisma.DeletedTeacherCreateWithoutTeacherInput[] | Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput | Prisma.DeletedTeacherCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.DeletedTeacherUpsertWithWhereUniqueWithoutTeacherInput | Prisma.DeletedTeacherUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.DeletedTeacherCreateManyTeacherInputEnvelope;
    set?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    disconnect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    delete?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    connect?: Prisma.DeletedTeacherWhereUniqueInput | Prisma.DeletedTeacherWhereUniqueInput[];
    update?: Prisma.DeletedTeacherUpdateWithWhereUniqueWithoutTeacherInput | Prisma.DeletedTeacherUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.DeletedTeacherUpdateManyWithWhereWithoutTeacherInput | Prisma.DeletedTeacherUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.DeletedTeacherScalarWhereInput | Prisma.DeletedTeacherScalarWhereInput[];
};
export type DeletedTeacherCreateWithoutTeacherInput = {
    id?: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeletedTeacherUncheckedCreateWithoutTeacherInput = {
    id?: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeletedTeacherCreateOrConnectWithoutTeacherInput = {
    where: Prisma.DeletedTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput>;
};
export type DeletedTeacherCreateManyTeacherInputEnvelope = {
    data: Prisma.DeletedTeacherCreateManyTeacherInput | Prisma.DeletedTeacherCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type DeletedTeacherUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.DeletedTeacherWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeletedTeacherUpdateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.DeletedTeacherCreateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedCreateWithoutTeacherInput>;
};
export type DeletedTeacherUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.DeletedTeacherWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeletedTeacherUpdateWithoutTeacherInput, Prisma.DeletedTeacherUncheckedUpdateWithoutTeacherInput>;
};
export type DeletedTeacherUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.DeletedTeacherScalarWhereInput;
    data: Prisma.XOR<Prisma.DeletedTeacherUpdateManyMutationInput, Prisma.DeletedTeacherUncheckedUpdateManyWithoutTeacherInput>;
};
export type DeletedTeacherScalarWhereInput = {
    AND?: Prisma.DeletedTeacherScalarWhereInput | Prisma.DeletedTeacherScalarWhereInput[];
    OR?: Prisma.DeletedTeacherScalarWhereInput[];
    NOT?: Prisma.DeletedTeacherScalarWhereInput | Prisma.DeletedTeacherScalarWhereInput[];
    id?: Prisma.StringFilter<"DeletedTeacher"> | string;
    teacherId?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedBy?: Prisma.StringFilter<"DeletedTeacher"> | string;
    reason?: Prisma.StringFilter<"DeletedTeacher"> | string;
    deletedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    restoreAt?: Prisma.DateTimeNullableFilter<"DeletedTeacher"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeletedTeacher"> | Date | string;
};
export type DeletedTeacherCreateManyTeacherInput = {
    id?: string;
    deletedBy: string;
    reason: string;
    deletedAt?: Date | string;
    restoreAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeletedTeacherUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    deletedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restoreAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeletedTeacherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    deletedBy?: boolean;
    reason?: boolean;
    deletedAt?: boolean;
    restoreAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deletedTeacher"]>;
export type DeletedTeacherSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    deletedBy?: boolean;
    reason?: boolean;
    deletedAt?: boolean;
    restoreAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deletedTeacher"]>;
export type DeletedTeacherSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    deletedBy?: boolean;
    reason?: boolean;
    deletedAt?: boolean;
    restoreAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deletedTeacher"]>;
export type DeletedTeacherSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    deletedBy?: boolean;
    reason?: boolean;
    deletedAt?: boolean;
    restoreAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DeletedTeacherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "deletedBy" | "reason" | "deletedAt" | "restoreAt" | "createdAt" | "updatedAt", ExtArgs["result"]["deletedTeacher"]>;
export type DeletedTeacherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type DeletedTeacherIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type DeletedTeacherIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $DeletedTeacherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeletedTeacher";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        deletedBy: string;
        reason: string;
        deletedAt: Date;
        restoreAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["deletedTeacher"]>;
    composites: {};
};
export type DeletedTeacherGetPayload<S extends boolean | null | undefined | DeletedTeacherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload, S>;
export type DeletedTeacherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeletedTeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeletedTeacherCountAggregateInputType | true;
};
export interface DeletedTeacherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeletedTeacher'];
        meta: {
            name: 'DeletedTeacher';
        };
    };
    findUnique<T extends DeletedTeacherFindUniqueArgs>(args: Prisma.SelectSubset<T, DeletedTeacherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeletedTeacherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeletedTeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeletedTeacherFindFirstArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeletedTeacherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeletedTeacherFindManyArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeletedTeacherCreateArgs>(args: Prisma.SelectSubset<T, DeletedTeacherCreateArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeletedTeacherCreateManyArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeletedTeacherCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeletedTeacherDeleteArgs>(args: Prisma.SelectSubset<T, DeletedTeacherDeleteArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeletedTeacherUpdateArgs>(args: Prisma.SelectSubset<T, DeletedTeacherUpdateArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeletedTeacherDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeletedTeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeletedTeacherUpdateManyArgs>(args: Prisma.SelectSubset<T, DeletedTeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeletedTeacherUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeletedTeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeletedTeacherUpsertArgs>(args: Prisma.SelectSubset<T, DeletedTeacherUpsertArgs<ExtArgs>>): Prisma.Prisma__DeletedTeacherClient<runtime.Types.Result.GetResult<Prisma.$DeletedTeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeletedTeacherCountArgs>(args?: Prisma.Subset<T, DeletedTeacherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeletedTeacherCountAggregateOutputType> : number>;
    aggregate<T extends DeletedTeacherAggregateArgs>(args: Prisma.Subset<T, DeletedTeacherAggregateArgs>): Prisma.PrismaPromise<GetDeletedTeacherAggregateType<T>>;
    groupBy<T extends DeletedTeacherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeletedTeacherGroupByArgs['orderBy'];
    } : {
        orderBy?: DeletedTeacherGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeletedTeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeletedTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeletedTeacherFieldRefs;
}
export interface Prisma__DeletedTeacherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeletedTeacherFieldRefs {
    readonly id: Prisma.FieldRef<"DeletedTeacher", 'String'>;
    readonly teacherId: Prisma.FieldRef<"DeletedTeacher", 'String'>;
    readonly deletedBy: Prisma.FieldRef<"DeletedTeacher", 'String'>;
    readonly reason: Prisma.FieldRef<"DeletedTeacher", 'String'>;
    readonly deletedAt: Prisma.FieldRef<"DeletedTeacher", 'DateTime'>;
    readonly restoreAt: Prisma.FieldRef<"DeletedTeacher", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DeletedTeacher", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DeletedTeacher", 'DateTime'>;
}
export type DeletedTeacherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where: Prisma.DeletedTeacherWhereUniqueInput;
};
export type DeletedTeacherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where: Prisma.DeletedTeacherWhereUniqueInput;
};
export type DeletedTeacherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where?: Prisma.DeletedTeacherWhereInput;
    orderBy?: Prisma.DeletedTeacherOrderByWithRelationInput | Prisma.DeletedTeacherOrderByWithRelationInput[];
    cursor?: Prisma.DeletedTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeletedTeacherScalarFieldEnum | Prisma.DeletedTeacherScalarFieldEnum[];
};
export type DeletedTeacherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where?: Prisma.DeletedTeacherWhereInput;
    orderBy?: Prisma.DeletedTeacherOrderByWithRelationInput | Prisma.DeletedTeacherOrderByWithRelationInput[];
    cursor?: Prisma.DeletedTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeletedTeacherScalarFieldEnum | Prisma.DeletedTeacherScalarFieldEnum[];
};
export type DeletedTeacherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where?: Prisma.DeletedTeacherWhereInput;
    orderBy?: Prisma.DeletedTeacherOrderByWithRelationInput | Prisma.DeletedTeacherOrderByWithRelationInput[];
    cursor?: Prisma.DeletedTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeletedTeacherScalarFieldEnum | Prisma.DeletedTeacherScalarFieldEnum[];
};
export type DeletedTeacherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeletedTeacherCreateInput, Prisma.DeletedTeacherUncheckedCreateInput>;
};
export type DeletedTeacherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeletedTeacherCreateManyInput | Prisma.DeletedTeacherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeletedTeacherCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    data: Prisma.DeletedTeacherCreateManyInput | Prisma.DeletedTeacherCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DeletedTeacherIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeletedTeacherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeletedTeacherUpdateInput, Prisma.DeletedTeacherUncheckedUpdateInput>;
    where: Prisma.DeletedTeacherWhereUniqueInput;
};
export type DeletedTeacherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeletedTeacherUpdateManyMutationInput, Prisma.DeletedTeacherUncheckedUpdateManyInput>;
    where?: Prisma.DeletedTeacherWhereInput;
    limit?: number;
};
export type DeletedTeacherUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeletedTeacherUpdateManyMutationInput, Prisma.DeletedTeacherUncheckedUpdateManyInput>;
    where?: Prisma.DeletedTeacherWhereInput;
    limit?: number;
    include?: Prisma.DeletedTeacherIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeletedTeacherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where: Prisma.DeletedTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeletedTeacherCreateInput, Prisma.DeletedTeacherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeletedTeacherUpdateInput, Prisma.DeletedTeacherUncheckedUpdateInput>;
};
export type DeletedTeacherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
    where: Prisma.DeletedTeacherWhereUniqueInput;
};
export type DeletedTeacherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeletedTeacherWhereInput;
    limit?: number;
};
export type DeletedTeacherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeletedTeacherSelect<ExtArgs> | null;
    omit?: Prisma.DeletedTeacherOmit<ExtArgs> | null;
    include?: Prisma.DeletedTeacherInclude<ExtArgs> | null;
};
export {};
